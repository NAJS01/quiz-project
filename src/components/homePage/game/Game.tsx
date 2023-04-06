import React from "react";
import Link from "next/link";

const Game = () => {
  return (
    <Link
      className="w-1/3 bg-red-500 py-3 px-6 text-lg font-bold text-white"
      href="/difficulte"
    >
      <div>
        <h1>Jouer</h1>
      </div>
    </Link>
  );
};

export default Game;
