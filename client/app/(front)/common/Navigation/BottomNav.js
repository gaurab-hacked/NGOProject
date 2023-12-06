import Link from "next/link";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NavContent1 from "./common/NavContent1";
import NavContent2 from "./common/NavContent2";
import NavContent3 from "./common/NavContent3";
import { Card } from "@nextui-org/react";

const BottomNav = () => {
  return (
    <Card radius="none" className="w-full relative !overflow-visible">
      <nav className="flex h-[50px] justify-center max-w-[1300px] mx-auto relative px-20 items-center w-full ">
        <div>
          <ul className="flex w-full justify-between">
            <li className="relative px-2 group flex !duration-100 items-center justify-center">
              <Link
                href={"/"}
                className=" py-3 text-sm font-semibold tracking-wide text-gray-700 px-1 flex items-center justify-center"
              >
                Home
                {/* <div className="w-[80%] bg-gray-600 rounded-md h-[.2rem] absolute bottom-[.6rem]"></div> */}
              </Link>
            </li>
            <li className="relative px-2 group flex !duration-100 items-center justify-center">
              <Link
                href={"/"}
                className=" py-3 text-sm font-semibold tracking-wide text-gray-700 px-1 flex items-center justify-center"
              >
                <div className="pl-[.3rem]">About Us</div>
                <KeyboardArrowDownIcon className="mt-[6px] text-lg text-gray-700 group-hover:rotate-180" />
                {/* <div className="w-[80%] bg-gray-600 rounded-md h-[.2rem] absolute bottom-[.6rem]"></div> */}
              </Link>
              <NavContent2 pl="0" pr="" />
            </li>

            <li className="relative px-2 group flex !duration-100 items-center justify-center">
              <Link
                href={"/"}
                className=" py-3 text-sm font-semibold tracking-wide text-gray-700 px-1 flex items-center justify-center"
              >
                <div className="pl-[.3rem]">Trending</div>
                <KeyboardArrowDownIcon className="mt-[6px] text-lg text-gray-700 group-hover:rotate-180" />
                {/* <div className="w-[80%] bg-gray-600 rounded-md h-[.2rem] absolute bottom-[.6rem]"></div> */}
              </Link>
              <NavContent3 pl="0" pr="" />
            </li>
            <li className="relative px-2 group flex !duration-100 items-center justify-center">
              <Link
                href={"/"}
                className=" py-3 text-sm font-semibold tracking-wide text-gray-700 px-1 flex items-center justify-center"
              >
                <div className="pl-[.3rem]">Most Sell</div>
                <KeyboardArrowDownIcon className="mt-[6px] text-lg text-gray-700 group-hover:rotate-180" />
                {/* <div className="w-[80%] bg-gray-600 rounded-md h-[.2rem] absolute bottom-[.6rem]"></div> */}
              </Link>
              <NavContent1 pl="0" pr="0" />
            </li>
            <li className="relative px-2 group flex !duration-100 items-center justify-center">
              <Link
                href={"/"}
                className=" py-3 text-sm font-semibold tracking-wide text-gray-700 px-1 flex items-center justify-center"
              >
                <div className="pl-[.3rem]">Gold</div>
                <KeyboardArrowDownIcon className="mt-[6px] text-lg text-gray-700 group-hover:rotate-180" />
                {/* <div className="w-[80%] bg-gray-600 rounded-md h-[.2rem] absolute bottom-[.6rem]"></div> */}
              </Link>
              <NavContent1 pl="0" pr="0" />
            </li>
            <li className="relative px-2 group flex !duration-100 items-center justify-center">
              <Link
                href={"/"}
                className=" py-3 text-sm font-semibold tracking-wide text-gray-700 px-1 flex items-center justify-center"
              >
                <div className="pl-[.3rem]">Silver</div>
                <KeyboardArrowDownIcon className="mt-[6px] text-lg text-gray-700 group-hover:rotate-180" />
                {/* <div className="w-[80%] bg-gray-600 rounded-md h-[.2rem] absolute bottom-[.6rem]"></div> */}
              </Link>
              <NavContent1 pl="" pr="0" />
            </li>
            <li className="relative px-2 group flex !duration-100 items-center justify-center">
              <Link
                href={"/"}
                className=" py-3 text-sm font-semibold tracking-wide text-gray-700 px-1 flex items-center justify-center"
              >
                Contact Us
                {/* <div className="w-[80%] bg-gray-600 rounded-md h-[.2rem] absolute bottom-[.6rem]"></div> */}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Card>
  );
};

export default BottomNav;
