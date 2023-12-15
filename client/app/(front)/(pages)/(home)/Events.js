import { Card } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { IoEye } from "react-icons/io5";

const Events = () => {
  return (
    <Card className="absolute h-[570px] -top-[250px] lg:block hidden  rounded overflow-hidden bg-blue-50 right-12 w-[360px] z-10 ">
      <div>
        <h3 className="bg-[#08bee3bc] capitalize tracking-wider shadow-md p-2 py-3 text-xl font-semibold">
          News & Events
        </h3>
        <div className="flex gap-2 mt-4 flex-col m-2">
          <div className="h-[85px] overflow-hidden p-2 shadow bg-white">
            <h5 className="text-base font-semibold">Content Head</h5>
            <p className="text-sm text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, praesentium?
            </p>
          </div>
          <div className="h-[85px] overflow-hidden p-2 shadow bg-white">
            <h5 className="text-base font-semibold">Content Head</h5>
            <p className="text-sm text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, praesentium?
            </p>
          </div>
          <div className="h-[85px] overflow-hidden p-2 shadow bg-white">
            <h5 className="text-base font-semibold">Content Head</h5>
            <p className="text-sm text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, praesentium?
            </p>
          </div>
          <div className="h-[85px] overflow-hidden p-2 shadow bg-white">
            <h5 className="text-base font-semibold">Content Head</h5>
            <p className="text-sm text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, praesentium?
            </p>
          </div>
          <div className="h-[85px] overflow-hidden p-2 shadow bg-white">
            <h5 className="text-base font-semibold">Content Head</h5>
            <p className="text-sm text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, praesentium?
            </p>
          </div>
          <hr />
          <div className="flex items-center justify-center ">
            <Link
              className="text-xs flex items-center text-slate-600 hover:text-slate-900 justify-center gap-1 text-center font-semibold tracking-wide"
              href={"/"}
            >
              View More
              <IoEye className="text-lg mt-[1px]" />
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Events;
