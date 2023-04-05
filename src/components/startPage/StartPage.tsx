import React from "react";
import {ButtonJoin} from "../button/ButtonJoin";
import Connexion from "../connexion/Connexion";
import Inscription from "../inscription/Inscription";



export const StartPage = () => {

const [showConnexion, setShowConnexion] = React.useState(false);
const [showInscription, setShowInscription] = React.useState(false);

const handleConnexion = () => { setShowConnexion(!showConnexion) };
const handleInscription = () => { setShowInscription(!showInscription) };

  return (
    <>
        <section id="start" className="bg-[#190E4F]">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">
                <div className="font-semibold tracking-[0.002em] w-full text-white text-center font-obviously-narrow text-[38px] md:text-[54px] md:leading-[66px] leading-[46px]">
                  Quoi ?
                </div>
                <div>
                  {showConnexion ? <Connexion /> : null}
                  {showInscription ? <Inscription /> : null}
                </div>
                <div className="flex flex-col items-center justify-center ">
                    <ButtonJoin onClick={handleConnexion} label="Se Connecter"/>
                    <ButtonJoin onClick={handleInscription} label="S'inscrire"/>
                </div>
                <div className="h-20" />
              </div>
            </div>
          </section>
    </>
    )
};