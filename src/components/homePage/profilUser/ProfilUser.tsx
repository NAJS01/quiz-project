import React from "react";
import Link from "next/link";

const ProfilUser = () => {
  return (
    <div className="w-1/3 bg-[#31E981] py-3 px-6 text-lg font-bold text-white">
      <h1>Profil User</h1>
      <p>image</p>
      <Link href="/profil">
        <button className="bg-[#e93131] py-3 px-6 text-lg font-bold text-white">
          voir profil
        </button>
      </Link>
    </div>
  );
};

export default ProfilUser;
