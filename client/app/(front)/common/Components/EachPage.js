"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import scrollImage from "@/public/scrollImage.gif";
import { Button } from "@nextui-org/react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
const EachPage = ({ data }) => {
  const scrollDown = () => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  };

  return (
    <div className="md:h-[600px] h-[500px] relative w-full bg-black">
      <Image
        className="position-absolute w-full h-full opacity-50 blur-sm"
        src={data.image}
        style={{ objectFit: "cover" }}
        alt="something"
        height={600}
        width={1100}
      />
      <div className="absolute z-50 inset-0">
        <div className="carousel-caption flex flex-col h-full items-center justify-center">
          <div className="p-3 flex justify-center items-center flex-col max-w-[800px] font-mono">
            <h1
              data-aos="fade-down"
              className="font-bold joseFin text-[2.5rem] text-white tracking-wide"
            >
              {data.title} <br />
            </h1>
            <p
              data-aos="flip-up"
              className="w-full lg:w-[80%] text-white text-center text-2xl"
            >
              {data.description}
            </p>
            <div data-aos="fade-up" className="flex gap-5 mt-5 relative">
              <div className="absolute blur-xl inset-0"></div>
              <Button
                size="sm"
                variant="bordered"
                className="!rounded-sm !tracking-wide border-blue-200  mt-1 text-base py-5 px-7 pr-6 font-bold bg-transparent text-white "
              >
                Explore
                <IoArrowForwardCircleOutline className="-ml-1 text-xl mt-[1px]" />
              </Button>
            </div>
            <div data-aos="fade-up" className="absolute bottom-14 ">
              <Image
                src={scrollImage}
                width={50}
                height={50}
                alt="scroll"
                className="cursor-pointer !w-[50px] !h-[50px]"
                onClick={scrollDown}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachPage;
