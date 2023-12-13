"use client";
import React, { useState, useEffect } from "react";
import { Button, Card, Divider } from "@nextui-org/react";
import Link from "next/link";
import { BiSolidDonateHeart } from "react-icons/bi";
import LOGO from "./newlogo.jpg";
import { IoIosArrowUp } from "react-icons/io";
import Image from "next/image";
import { usePathname } from "next/navigation";

const BottomNav = () => {
  const [scrollCount, setScrollCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollCount(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setScrollCount(window.scrollY);
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const pathname = usePathname();

  return (
    <>
      <div
        className={`w-full h-[60px] bg-white shadow-lg flex items-center justify-between ${
          scrollCount > 90 ? "fixed" : "sticky"
        } z-40 top-0`}
      >
        <div id="logo" className="w-[40%] flex">
          <Image src={LOGO} className="ml-10 h-[60px]" alt="logo" height={60} />
        </div>
        <div className="w-[60%]">
          <ul className="flex h-full font-semibold text-slate-700 items-center w-[95%] justify-between">
            <li className="relative h-full py-1">
              <Link className="p-1" href={"/"}>
                Home
              </Link>
              {pathname === "/" && (
                <div className="w-full absolute bottom-0 rounded-md bg-slate-700 h-[3px]"></div>
              )}
            </li>

            <li className="relative h-full py-1">
              <Link className="p-1" href={"/what-we-do"}>
                What We Do
              </Link>
              {pathname === "/what-we-do" && (
                <div className="w-full absolute bottom-0 rounded-md bg-slate-700 h-[3px]"></div>
              )}
            </li>
            <li className="relative h-full py-1">
              <Link className="p-1" href={"/news-and-events"}>
                News & Events
              </Link>
              {pathname === "/news-and-events" && (
                <div className="w-full absolute bottom-0 rounded-md bg-slate-700 h-[3px]"></div>
              )}
            </li>
            <li className="relative h-full py-1">
              <Link className="p-1" href={"/projects"}>
                Projects
              </Link>
              {pathname === "/projects" && (
                <div className="w-full absolute bottom-0 rounded-md bg-slate-700 h-[3px]"></div>
              )}
            </li>
            <li className="relative h-full py-1">
              <Link className="p-1" href={"/gallery"}>
                Gallery
              </Link>
              {pathname === "/gallery" && (
                <div className="w-full absolute bottom-0 rounded-md bg-slate-700 h-[3px]"></div>
              )}
            </li>
            <li className="relative h-full py-1">
              <Link className="p-1" href={"/contact"}>
                Contact
              </Link>
              {pathname === "/contact" && (
                <div className="w-full absolute bottom-0 rounded-md bg-slate-700 h-[3px]"></div>
              )}
            </li>
            <li>
              <Card
                className="flex h-[33px] flex-row rounded-sm overflow-hidden gap-[1px] item-center  justify-center text-white"
                style={{ alignItems: "center", justifyContent: "center" }}
                isPressable
              >
                <div
                  className="h-full pb-[6px] bg-success flex px-2 py-1"
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <BiSolidDonateHeart className="text-lg" />
                </div>
                <div
                  className="h-full pb-[6px] tracking-wider bg-success flex px-2 py-1 text-sm"
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  Donate
                </div>
              </Card>
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
