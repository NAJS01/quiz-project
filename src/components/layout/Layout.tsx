import React, { ReactNode } from "react";
import Avatar from "../avatar/Avatar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <section className="bg-[#190E4F]">
      <div className="flex min-h-screen flex-col">
        <Avatar
          avatarSrc={"/../public/leo.png"}
          avatarAlt={""}
          username={"Le Pt'it Léo"}
          level={5}
          xp={50}
        />
        <div className="flex-grow">{children}</div>
      </div>
    </section>
  );
};

export default Layout;
