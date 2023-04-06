import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AvatarProps {
  avatarSrc: string;
  avatarAlt: string;
  username: string;
  level: number;
  xp: number;
}

const Avatar: React.FC<AvatarProps> = ({
  avatarSrc,
  avatarAlt,
  username,
  level,
  xp,
}) => {
  return (
    <Link href="/profil">
      <div className="flex items-center">
        <Image src={avatarSrc} alt={avatarAlt} width={50} height={50} />
        <div className="flex-grow">
          <div className="text-lg font-semibold text-white">{username}</div>
          <div className="mt-1 flex items-center">
            <div className="h-2 w-16 overflow-hidden rounded-full bg-gray-300">
              <div
                style={{ width: `${xp * 0.5}%` }}
                className="h-full bg-green-500"
              ></div>
            </div>
            <div className="ml-2 text-white">{level}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Avatar;
