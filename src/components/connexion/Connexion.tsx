import React from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import Link from "next/link";

const Connexion = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [showpassword, setShowpassword] = React.useState(false);

  const showMdp = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setShowpassword(!showpassword);
  };

  return (
    <React.Fragment>
      <div>
        <h1 className="text-center text-white">Connexion</h1>
        <form className="flex flex-col items-center justify-center">
          <fieldset>
            <legend className="text-lg font-medium text-white">
              Veuillez remplir les champs pour vous connecter
            </legend>
            <div className="mt-4 space-y-4">
              <h3 className="text-red-500">{error}</h3>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email :
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div className="flex justify-between">
                <label
                  htmlFor="pass"
                  className="block text-sm font-medium text-white"
                >
                  Mot de passe :
                </label>
                <div className="flex items-center">
                  <input
                    type={showpassword ? "text" : "password"}
                    id="pass"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                  <div onClick={showMdp} className="btn_hide_show ml-2">
                    <span className="text-white">
                      {showpassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Link href="/accueil">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Se connecter
                  </button>
                </Link>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Connexion;
