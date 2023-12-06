import Link from "next/link";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NavContent2Scroll from "./common/NavContent2Scroll";
import NavContent3Scroll from "./common/NavContent3Scroll";
import NavContent1Scroll from "./common/NavContent1Scroll";
import { Card } from "@nextui-org/react";

const BottomNavScroll = () => {
  return (
    <Card radius="none" className="round-sm flex !overflow-visible">
      <ul className="flex w-[130px] !flex-col justify-start items-start">
        <li className="relative px-2 group flex !duration-100 items-center justify-start">
          <Link
            href={"/"}
            className=" py-3 text-sm w-[130px] font-semibold tracking-wide text-gray-700 px-1 flex items-center justify-start"
          >
            Home
            {/* <div className="w-[80%] bg-gray-600 rounded-md h-[.2rem] absolute bottom-[.6rem]"></div> */}
          </Link>
        </li>
        <li className="relative px-2 group flex !duration-100 items-center justify-start">
          <Link
            href={"/"}
            className=" py-3 text-sm w-[130px]  font-semibold tracking-wide text-gray-700 px-1 flex items-center justify-start"
          >
            <div>About Us</div>
            <KeyboardArrowDownIcon className="mt-[6px] text-lg text-gray-700 -rotate-90" />
            {/* <div className="w-[80%] bg-gray-600 rounded-md h-[.2rem] absolute bottom-[.6rem]"></div> */}
          </Link>
          <NavContent2Scroll pl="0" pr="" />
        </li>

        <li className="relative px-2 group flex !duration-100 items-center justify-start">
          <Link
            href={"/"}
            className=" py-3 text-sm w-[130px]  font-semibold tracking-wide text-gray-700 px-1 flex items-center justify-start"
          >
            <div>Trending</div>
            <KeyboardArrowDownIcon className="mt-[6px] text-lg text-gray-700 -rotate-90" />
            {/* <div className="w-[80%] bg-gray-600 rounded-md h-[.2rem] absolute bottom-[.6rem]"></div> */}
          </Link>
          <NavContent3Scroll pl="0" pr="" />
        </li>
        <li className="relative px-2 group flex !duration-100 items-center justify-start">
          <Link
            href={"/"}
            className=" py-3 text-sm w-[130px]  font-semibold tracking-wide text-gray-700 px-1 flex items-center justify-start"
          >
            <div>Most Sell</div>
            <KeyboardArrowDownIcon className="mt-[6px] text-lg text-gray-700 -rotate-90" />
            {/* <div className="w-[80%] bg-gray-600 rounded-md h-[.2rem] absolute bottom-[.6rem]"></div> */}
          </Link>
          <NavContent1Scroll pl="0" pr="0" />
        </li>
        <li className="relative px-2 group flex !duration-100 items-center justify-start">
          <Link
            href={"/"}
            className=" py-3 text-sm w-[130px]  font-semibold tracking-wide text-gray-700 px-1 flex items-center justify-start"
          >
            <div>Gold</div>
            <KeyboardArrowDownIcon className="mt-[6px] text-lg text-gray-700 -rotate-90" />
            {/* <div className="w-[80%] bg-gray-600 rounded-md h-[.2rem] absolute bottom-[.6rem]"></div> */}
          </Link>
          <NavContent1Scroll pl="0" pr="0" />
        </li>
        <li className="relative px-2 group flex !duration-100 items-center justify-start">
          <Link
            href={"/"}
            className=" py-3 text-sm w-[130px]  font-semibold tracking-wide text-gray-700 px-1 flex items-center justify-start"
          >
            <div>Silver</div>
            <KeyboardArrowDownIcon className="mt-[6px] text-lg text-gray-700 -rotate-90" />
            {/* <div className="w-[80%] bg-gray-600 rounded-md h-[.2rem] absolute bottom-[.6rem]"></div> */}
          </Link>
          <NavContent1Scroll pl="0" pr="" />
        </li>
        <li className="relative px-2 group flex !duration-100 items-center justify-start">
          <Link
            href={"/"}
            className=" py-3 text-sm w-[130px]  font-semibold tracking-wide text-gray-700 px-1 flex items-center justify-start"
          >
            Contact Us
            {/* <div className="w-[80%] bg-gray-600 rounded-md h-[.2rem] absolute bottom-[.6rem]"></div> */}
          </Link>
        </li>
      </ul>
    </Card>
  );
};

export default BottomNavScroll;
