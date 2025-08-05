"use client";
import Image from "next/image";
import React from "react";

const TeamMemberCard = ({ member }) => {
  if (!member) {
    return null;
  }

  const { name, title, image, alt } = member;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:scale-[1.02]">
      {/* Image  */}
      <div className="w-full h-80 relative">
        <Image
          src={image}
          alt={alt || name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>

      <div className="p-5 flex flex-col">
        <h3 className="text-xl font-semibold text-[#8d493a] mt-2 mb-1">
          {name}
        </h3>

        <p className="text-sm text-[#8d493a] mb-6">{title}</p>

        <button
          className="bg-[#FDF9F6] text-[#8d493a] border border-[#d3c0b1] py-2 px-6 rounded-md self-start
                           hover:bg-[#d3c0b1] hover:text-white transition duration-300 ease-in-out"
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default TeamMemberCard;
