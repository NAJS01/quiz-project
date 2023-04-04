import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const ButtonJoin = ({ label, ...props }: ButtonProps) => {



  return (
    <p
      className={
        `w-100 mt-6 -skew-x-12 py-3 px-4 whitespace-nowrap bg-pink text-xl text-white`}
      {...props}
    >
      <span className="inline-block transform skew-x-12">{label}</span>
    </p>
  );
};