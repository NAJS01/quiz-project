import React from "react";

const Difficulty: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-4 pb-12 text-center">
      <h1 className=" text-white">Choisis ta difficulté</h1>
      <nav>
        <ul className="flex w-full flex-col items-center justify-center gap-y-4 pb-12 text-center">
          <li className="w-full bg-red-500 py-3 px-6 text-lg font-bold text-white">
            lapinou
          </li>
          <li className="w-full bg-[#5299D3] py-3 px-6 text-lg font-bold text-white">
            lapin de 6 semaine
          </li>
          <li className="w-full bg-[#52d354] py-3 px-6 text-lg font-bold text-white">
            lapin de type adulte
          </li>
          <li className="w-full bg-[#3d28f8] py-3 px-6 text-lg font-bold text-white">
            Lièvre
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Difficulty;
