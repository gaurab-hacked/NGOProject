"use client";
import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import {
  FaInstagramSquare,
  FaLinkedin,
  FaPinterestSquare,
} from "react-icons/fa";
import { usePathname } from "next/navigation";

const TopNav = () => {
  const pathName = usePathname();
  let isShow = pathName.includes("/dashboard") ? false : true;
  return (
    <>
      {isShow && (
        <div className="w-full bg-[#2463C1]  h-[30px] flex justify-center sm:justify-end items-center py-1">
          <div className="hidden sm:block">
            <div className="w-[1px] h-full bg-slate-300 mx-3"></div>
            <div className="flex space-x-3 ml-1 ">
              <AiFillFacebook className="text-xl text-white cursor-pointer" />
              <FaInstagramSquare className="text-xl text-white cursor-pointer" />
              <FaPinterestSquare className="text-xl text-white cursor-pointer" />
              <FaLinkedin className="text-xl text-white cursor-pointer" />
            </div>
          </div>
          <div className="w-[1px] h-full bg-slate-300 mx-1 sm:mx-3"></div>
          <div className="flex items-center gap-1">
            <FaPhoneAlt className="scale-90 text-white text-xs sm:text-base" />
            <p className=" text-white tracking-wide text-xs sm:text-base">
              +9779810325922
            </p>
          </div>
          <div className="w-[1px] h-full bg-slate-300 mx-3"></div>
          <div className="flex items-center gap-1 ">
            <MdEmail className="scale-110 mt-1 text-xs sm:text-base text-white" />
            <p className=" text-white tracking-wide text-xs sm:text-base">
              info@digitalempowerment.org
            </p>
          </div>
          <div className="w-[1px] h-full bg-slate-300 sm:mr-4 mx-1 sm:mx-3"></div>
        </div>
      )}
    </>
  );
};

export default TopNav;
