import React from "react";
import { Button } from "@nextui-org/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import scrollImage from "@/public/scrollImage.gif";
import HeroImage from "./heropage.png";
const EachPage = () => {
  const scrollDown = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };

  return (
    // <div className="h-[500px] relative w-full bg-black mt-7">
    <div className="h-[500px] relative w-full bg-black">
      <Image
        className="position-absolute w-full h-full opacity-80"
        src={HeroImage}
        style={{ objectFit: "cover" }}
        alt="something"
      />
      <div className="absolute z-50 inset-0">
        <div className="carousel-caption flex flex-col h-full items-center justify-center">
          <div
            className="p-3 flex justify-center items-center flex-col gap-5"
            style={{ maxWidth: "700px" }}
          >
            {/* <h2 className="font-bold text-3xl text-white tracking-wider opacity-90">
              Gold Tilahari{" "}
              <span
                id="text-stroke"
                className="text-3xl text-white tracking-widest font-serif"
              >
                (Get Now)
              </span>
            </h2>
            <p className="w-full lg:w-[70%] text-slate-100 text-center text-lg tracking-wide">
              Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet
              amet amet ndiam elitr ipsum diam
            </p>
            <div className="flex gap-5">
              <Button
                size="sm"
                className="!rounded-sm !tracking-wide mt-1 px-5 font-bold bg-[#AECBFF] hover:bg-[#85b0ff] text-slate-800 "
              >
                View More{" "}
                <ArrowForwardIcon className="-ml-1 text-sm mt-[1px]" />
              </Button>
            </div> */}
            <div className="absolute bottom-10 ">
              <Image
                src={scrollImage}
                width={45}
                height={45}
                alt="scroll"
                className="cursor-pointer"
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
