"use client";
import React, { useEffect, useState } from "react";
import TopNav from "./TopNav";
import { usePathname } from "next/navigation";
import BottomNav from "./BottomNav";
import { Card } from "@nextui-org/react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BottomNavScroll from "./BottomNavScroll";

const Navigation = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    if (window.screenY > 0) {
      setScrollY(window.screenY);
    }
  }, []);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const pathname = usePathname();
  const isDashboard = pathname.includes("dashboard");
  return !isDashboard ? (
    <nav className="max-w-[1550px] relative">
      <TopNav scrollY={scrollY} />
      <BottomNav />
      {Math.ceil(scrollY) > 600 && (
        <div className="fixed z-50 right-5 bottom-[40vh] ">
          <Card
            isPressable
            radius="none"
            onClick={scrollUp}
            className=" shadow rounded-sm bg-blue-500 hover:bg-blue-800 text-white flex justify-center items-center !w-[35px] !h-[35px]"
          >
            <KeyboardArrowUpIcon className="scale-110" />
          </Card>
        </div>
      )}
    </nav>
  ) : null;
};

export default Navigation;
