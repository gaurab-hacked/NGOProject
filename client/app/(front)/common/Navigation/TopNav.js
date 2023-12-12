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

const TopNav = () => {
  return (
    <>
      <div className="w-full bg-[#08bee3]  h-[30px] flex justify-end items-center py-1">
        <div className="w-[1px] h-full bg-slate-300 mx-3"></div>
        <div className="flex space-x-3 ml-1">
          <AiFillFacebook className="text-xl text-white cursor-pointer" />
          <FaInstagramSquare className="text-xl text-white cursor-pointer" />
          <FaPinterestSquare className="text-xl text-white cursor-pointer" />
          <FaLinkedin className="text-xl text-white cursor-pointer" />
        </div>
        <div className="w-[1px] h-full bg-slate-300 mx-3"></div>
        <div className="flex items-center gap-1">
          <FaPhoneAlt className="scale-90 text-white" />
          <p className=" text-white tracking-wide">+9779810325922</p>
        </div>
        <div className="w-[1px] h-full bg-slate-300 mx-3"></div>
        <div className="flex items-center gap-1 ">
          <MdEmail className="scale-110 mt-1 text-white" />
          <p className=" text-white tracking-wide">
            info@digitalempowerment.org
          </p>
        </div>
        <div className="w-[1px] h-full bg-slate-300 mr-4 mx-3"></div>
      </div>
    </>
  );
};

export default TopNav;
