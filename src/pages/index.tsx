import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Quiz</title>
        <meta name="description" content="quiz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Home;

