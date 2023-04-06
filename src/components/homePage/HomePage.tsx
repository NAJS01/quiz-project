import React from "react";
import Layout from "../layout/Layout";
import Game from "./game/Game";
import DayQuiz from "./dayQuiz/DayQuiz";
import ProfilUser from "./profilUser/ProfilUser";

export const HomePage = () => {
  return (
    <Layout>
      <div className="flex w-full flex-col items-center justify-center gap-y-4 pb-12 text-center">
        <h1 className="text-white">QUOI ?</h1>
        <Game />
        <DayQuiz />
        <ProfilUser />
      </div>
    </Layout>
  );
};
