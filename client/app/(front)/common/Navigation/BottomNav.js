"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
// import Donate from "./svg/hand_dollar.svg";
import { BiSolidDonateHeart } from "react-icons/bi";
import LOGO from "./newlogo.jpg";
import Image from "next/image";

const BottomNav = () => {
  return (
    <>
      <div className="w-full h-[60px] bg-white shadow flex items-center justify-between">
        <div id="logo w-[40%] flex">
          <Image src={LOGO} className="ml-10" alt="logo" height={55} />
        </div>
        <div className="w-[60%]">
          <ul className="flex h-full items-center w-[95%] justify-between ">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>What We Do</Link>
            </li>
            <li>
              <Link href={"/"}>Projects</Link>
            </li>
            <li>
              <Link href={"/"}>Contact</Link>
            </li>
            <li>
              <Link href={"/"}>News & Events</Link>
            </li>
            <li>
              <Button
                radius="none"
                className="text-sm uppercase tracking-wide rounded-sm text-white"
                color="success"
                startContent={<BiSolidDonateHeart className="scale-110" />}
              >
                Donate
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BottomNav;
