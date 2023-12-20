"use client";
import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaPhoneAlt, FaYoutubeSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";

const TopNav = () => {
  const pathName = usePathname();
  let isShow = pathName.includes("/dashboard") ? false : true;
  return (
    <>
      {isShow && (
        <div className="w-full bg-[#2463C1]  h-[30px] flex justify-end items-center py-1">
          <div className="hidden sm:block">
            <div className="w-[1px] h-full bg-slate-300 mx-3"></div>
            <div className="flex space-x-3 ml-1 ">
              <Link
                href={"https://www.facebook.com/profile.php?id=61554100722430"}
                target="blank"
              >
                <AiFillFacebook className="text-xl text-white cursor-pointer" />
              </Link>

              <Link
                href={"https://www.instagram.com/desnepal2080/"}
                target="blank"
              >
                <FaInstagramSquare className="text-xl text-white cursor-pointer" />
              </Link>
              <Link href={"https://www.youtube.com/@DESNepal."} target="blank">
                <FaYoutubeSquare className="text-xl text-white cursor-pointer" />
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/in/des-nepal-undefined-3a73642a5/"
                }
                target="blank"
              >
                <FaLinkedin className="text-xl text-white cursor-pointer" />
              </Link>
            </div>
          </div>
          <div className="w-[1px] h-full bg-slate-300 mx-1 mx-3"></div>
          <div className="flex items-center gap-1">
            <FaPhoneAlt className="scale-90 text-white text-sm sm:text-base" />
            <p className=" text-white tracking-wide text-sm sm:text-base">
              +977-9767485800
            </p>
          </div>
          <div className="w-[1px] h-full bg-slate-300 mx-3"></div>
          <div className="flex items-center gap-1 ">
            <MdEmail className="scale-110 mt-1 text-sm sm:text-base text-white" />
            <p className=" text-white tracking-wide text-sm sm:text-base">
              info@des.org.np
            </p>
          </div>
          <div className="w-[1px] h-full bg-slate-300 sm:mr-4 mx-1 sm:mx-3"></div>
        </div>
      )}
    </>
  );
};

export default TopNav;
