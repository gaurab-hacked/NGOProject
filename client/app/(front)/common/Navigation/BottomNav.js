"use client";
import React, { useState, useEffect } from "react";
import { Button, Card } from "@nextui-org/react";
import Link from "next/link";
import { BiSolidDonateHeart } from "react-icons/bi";
import LOGO from "./newlogo.jpg";
import { IoIosArrowUp } from "react-icons/io";
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

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
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
          <ul className="flex h-full font-semibold text-slate-700 items-center w-[95%] justify-between">
            <li>
              <Link className="p-1" href={"/"}>
                Home
              </Link>
              {/* <div className="w-full rounded-md bg-slate-700 h-[3px]"></div> */}
            </li>

            <li>
              <Link className="p-1" href={"/what-we-do"}>
                What We Do
              </Link>
              {/* <div className="w-full rounded-md bg-slate-700 h-[3px]"></div> */}
            </li>
            <li>
              <Link className="p-1" href={"/news-and-events"}>
                News & Events
              </Link>
              {/* <div className="w-full rounded-md bg-slate-700 h-[3px]"></div> */}
            </li>
            <li>
              <Link className="p-1" href={"/projects"}>
                Projects
              </Link>
              {/* <div className="w-full rounded-md bg-slate-700 h-[3px]"></div> */}
            </li>
            <li>
              <Link className="p-1" href={"/gallery"}>
                Gallery
              </Link>
              {/* <div className="w-full rounded-md bg-slate-700 h-[3px]"></div> */}
            </li>
            <li>
              <Link className="p-1" href={"/contact"}>
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
      {scrollCount > 600 && (
        <Card
          isPressable
          className="h-[30px] w-[30px] rounded-sm bg-red-300 fixed right-10 bottom-[35vh] z-50 bg-blue-500 flex justify-center item-center"
          style={{ alignItems: "center" }}
          radius="none"
          onClick={scrollUp}
        >
          <IoIosArrowUp className="text-white text-2xl" />
        </Card>
      )}
    </>
  );
};

export default BottomNav;
