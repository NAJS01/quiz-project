import React from "react";

const Inscription = () => {
  const [email, setEmail] = React.useState("");
  const [nom, setNom] = React.useState("");
  const [prenom, setPrenom] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordTest, setPasswordTest] = React.useState("");
  const [error, setError] = React.useState("");
  const [errMdp, setErrMdp] = React.useState("");

  return (
    <React.Fragment>
      <div className="bg-gray-100 p-10">
        <h1 className="mb-4 text-3xl font-bold">Inscription</h1>
        <form className="rounded-lg bg-white p-6 shadow-md">
          <fieldset>
            <legend className="mb-4 text-lg font-medium">
              Veuillez remplir tous les champs
            </legend>
            <div className="flex flex-col gap-4">
              <h3 className="text-red-500">{error}</h3>
              <h3 className="text-red-500">{errMdp}</h3>

              <label htmlFor="email" className="font-medium">
                Email :
              </label>
              <input
                className="rounded-md border-2 border-gray-300 p-2"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="prenom" className="font-medium">
                Prénom :
              </label>
              <input
                className="rounded-md border-2 border-gray-300 p-2"
                type="text"
                id="prenom"
                name="prenom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
              <label htmlFor="nom" className="font-medium">
                Nom :
              </label>
              <input
                className="rounded-md border-2 border-gray-300 p-2"
                type="text"
                id="nom"
                name="nom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
              />
              <p className="text-sm text-gray-500">
                1 Majuscule, 1 chiffre et 8 caractères minimum obligatoire
              </p>
              <label htmlFor="passtest" className="font-medium">
                Mot de passe:{" "}
              </label>
              <input
                className="rounded-md border-2 border-gray-300 p-2"
                type="password"
                id="passtest"
                name="passwordTest"
                value={passwordTest}
                onChange={(e) => setPasswordTest(e.target.value)}
                required
              />
              <label htmlFor="pass" className="font-medium">
                Confirmer le mot de passe:
              </label>
              <input
                className="rounded-md border-2 border-gray-300 p-2"
                type="password"
                id="pass"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                className="rounded-md bg-blue-500 py-2 px-4 text-white transition-colors duration-300 ease-in-out hover:bg-blue-600"
                type="submit"
                value="S'inscrire"
              />
            </div>
          </fieldset>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Inscription;
