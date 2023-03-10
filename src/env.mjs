import { z } from "zod";

/**
 * Specify your server-side environment variables schema here. This way you can ensure the app isn't
 * built with invalid env vars.
 */
const server = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "test", "production"]),
  NEXTAUTH_SECRET:
    process.env.NODE_ENV === "production"
      ? z.string().min(1)
      : z.string().min(1).optional(),
  NEXTAUTH_URL: z.preprocess(
    // This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
    // Since NextAuth.js automatically uses the VERCEL_URL if present.
    (str) => process.env.VERCEL_URL ?? str,
    // VERCEL_URL doesn't include `https` so it cant be validated as a URL
    process.env.VERCEL ? z.string().min(1) : z.string().url()
  ),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
  // Add `.min(1) on ID and SECRET if you want to make sure they're not empty
  DISCORD_CLIENT_ID: z.string(),
  DISCORD_CLIENT_SECRET: z.string(),
});

/**
 * Specify your client-side environment variables schema here. This way you can ensure the app isn't
 * built with invalid env vars. To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */
const client = z.object({
  // NEXT_PUBLIC_CLIENTVAR: z.string().min(1),
});

/**
 * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
 * middlewares) or client-side so we need to destruct manually.
 *
 * @type {Record<keyof z.infer<typeof server> | keyof z.infer<typeof client>, string | undefined>}
 */
const processEnv = {
  DATABASE_URL: process.env.DATABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  NODE_ENV: process.env.NODE_ENV,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
  // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
};

// Don't touch the part below
// --------------------------

const merged = server.merge(client);

/** @typedef {z.input<typeof merged>} MergedInput */
/** @typedef {z.infer<typeof merged>} MergedOutput */
/** @typedef {z.SafeParseReturnType<MergedInput, MergedOutput>} MergedSafeParseReturn */

let env = /** @type {MergedOutput} */ (process.env);

if (!!process.env.SKIP_ENV_VALIDATION == false) {
  const isServer = typeof window === "undefined";

  const parsed = /** @type {MergedSafeParseReturn} */ (
    isServer
      ? merged.safeParse(processEnv) // on server we can validate all env vars
      : client.safeParse(processEnv) // on client we can only validate the ones that are exposed
  );

  if (parsed.success === false) {
    console.error(
      "??? Invalid environment variables:",
      parsed.error.flatten().fieldErrors
    );
    throw new Error("Invalid environment variables");
  }

  env = new Proxy(parsed.data, {
    get(target, prop) {
      if (typeof prop !== "string") return undefined;
      // Throw a descriptive error if a server-side env var is accessed on the client
      // Otherwise it would just be returning `undefined` and be annoying to debug
      if (!isServer && !prop.startsWith("NEXT_PUBLIC_"))
        throw new Error(
          process.env.NODE_ENV === "production"
            ? "??? Attempted to access a server-side environment variable on the client"
            : `??? Attempted to access server-side environment variable '${prop}' on the client`
        );
      return target[/** @type {keyof typeof target} */ (prop)];
    },
  });
}

export { env };

// Ce code est un module JavaScript qui d??finit un sch??ma de validation pour les variables d'environnement (ENV) utilis??es par une application Next.js. Il utilise la biblioth??que Zod pour d??finir les sch??mas de validation.

// Le code d??finit deux sch??mas de validation: un pour les variables d'environnement du serveur et un pour les variables d'environnement du client. Le sch??ma de validation du serveur contient les variables d'environnement n??cessaires pour l'application c??t?? serveur, tandis que le sch??ma de validation du client contient les variables d'environnement qui doivent ??tre expos??es au client.

// Le code utilise ??galement un objet processEnv qui contient les valeurs actuelles des variables d'environnement. Les valeurs des variables d'environnement sont r??cup??r??es ?? partir de process.env (un objet qui contient toutes les variables d'environnement actuellement d??finies) et sont stock??es dans l'objet processEnv.

// Le code utilise ensuite les sch??mas de validation pour v??rifier que les variables d'environnement sont correctement d??finies et ont les valeurs attendues. Si les variables d'environnement ne sont pas valides, une erreur est lev??e. Si SKIP_ENV_VALIDATION est d??fini ?? true, la validation des variables d'environnement est ignor??e.

// Enfin, le code d??finit un objet env qui contient les variables d'environnement valid??es. Si une variable d'environnement est d??finie ?? la fois dans le sch??ma de validation du serveur et dans le sch??ma de validation du client, la valeur de la variable d'environnement dans le sch??ma de validation du serveur est utilis??e. Si une variable d'environnement est d??finie ?? la fois dans processEnv et dans un sch??ma de validation, la valeur de processEnv est utilis??e. L'objet env est retourn?? pour ??tre utilis?? dans le reste de l'application Next.js.
