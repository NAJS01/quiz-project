import React from "react";
import {ButtonJoin} from "../button/ButtonJoin";
import Link from "next/link";

export const StartPage = () => {
  return (
    <>
        <section id="start" className="bg-[#190E4F]">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">
                <div className="font-semibold tracking-[0.002em] w-full text-white text-center font-obviously-narrow text-[38px] md:text-[54px] md:leading-[66px] leading-[46px]">
                  Quoi ?
                </div>
                <div className="flex flex-col items-center justify-center ">
                    <Link href="/accueil"><ButtonJoin label="Se Connecter"/></Link>
                    <Link href="/inscription"><ButtonJoin label="S'inscrire"/></Link>
                </div>
                <div className="h-20" />
              </div>
            </div>
          </section>
    </>
    )
};