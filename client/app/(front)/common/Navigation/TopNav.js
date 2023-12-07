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
      <div className="w-full bg-[#08bee3] h-[30px] flex justify-end items-center py-1">
        <div className="w-[1px] h-full bg-slate-600 mx-3"></div>
        <div className="flex space-x-3 ml-1">
          <AiFillFacebook className="text-xl text-black cursor-pointer" />
          <FaInstagramSquare className="text-xl text-black cursor-pointer" />
          <FaPinterestSquare className="text-xl text-black cursor-pointer" />
          <FaLinkedin className="text-xl text-black cursor-pointer" />
        </div>
        <div className="w-[1px] h-full bg-slate-600 mx-3"></div>
        <div className="flex items-center gap-1">
          <FaPhoneAlt className="scale-90" />
          <p className=" text-black tracking-wide">+9779810325922</p>
        </div>
        <div className="w-[1px] h-full bg-slate-600 mx-3"></div>
        <div className="flex items-center gap-1 ">
          <MdEmail className="scale-110 mt-1" />
          <p className=" text-black tracking-wide">
            info@digitalempowerment.org
          </p>
        </div>
        <div className="w-[1px] h-full bg-slate-600 mr-4 mx-3"></div>
      </div>
    </>
  );
};

export default TopNav;
