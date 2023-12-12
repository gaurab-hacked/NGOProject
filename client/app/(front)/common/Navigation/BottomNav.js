"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { BiSolidDonateHeart } from "react-icons/bi";
import LOGO from "./newlogo.jpg";
import Image from "next/image";

const BottomNav = () => {
  const [scrollCount, setscrollCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setscrollCount(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`w-full h-[60px] bg-white shadow-lg flex items-center justify-between ${
          scrollCount > 90 ? "fixed" : "sticky"
        } z-40 top-0`}
      >
        <div id="logo" className="w-[40%] flex">
          <Image src={LOGO} className="ml-10" alt="logo" height={55} />
        </div>
        <div className="w-[60%]">
          <ul className="flex h-full items-center w-[95%] justify-between">
            <li>
              <Link className="p-1" href={"/"}>
                Home
              </Link>
              <div className="w-full rounded-md bg-slate-700 h-[3px]"></div>
            </li>

            <li>
              <Link className="p-1" href={"/"}>
                What We Do
              </Link>
              {/* <div className="w-full rounded-md bg-slate-700 h-[3px]"></div> */}
            </li>
            <li>
              <Link className="p-1" href={"/"}>
                News & Events
              </Link>
              {/* <div className="w-full rounded-md bg-slate-700 h-[3px]"></div> */}
            </li>
            <li>
              <Link className="p-1" href={"/"}>
                Projects
              </Link>
              {/* <div className="w-full rounded-md bg-slate-700 h-[3px]"></div> */}
            </li>
            <li>
              <Link className="p-1" href={"/"}>
                Gallery
              </Link>
              {/* <div className="w-full rounded-md bg-slate-700 h-[3px]"></div> */}
            </li>
            <li>
              <Link className="p-1" href={"/"}>
                Contact
              </Link>
              {/* <div className="w-full rounded-md bg-slate-700 h-[3px]"></div> */}
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
