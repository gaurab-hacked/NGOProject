import React from "react";
import HeroImage from "@/public/hero.jpg";
import scrollImage from "@/public/scrollImage.gif";
import Image from "next/image";

const Herosection = () => {
  const scrollDown = () => {
    window.scrollTo({
      top: 450,
      behavior: "smooth",
    });
  };
  return (
    <div className="h-full flex justify-center items-center relative bg-black w-full">
      <Image
        src={HeroImage}
        className="h-full absolute blur-sm inset-0 w-full opacity-40 object-cover"
        alt="hero"
      />
      <div className="z-[5] mb-5  font-mono relative flex justify-center items-center flex-col gap-3">
        <h1 className="text-white text-lg md:text-3xl text-center  font-semibold">
          Digital Empowerment Society
        </h1>
        <h3 className="text-white md:text-3xl text-[3rem]  text-center scale-125 font-semibold">
          Our Mission
        </h3>
      </div>
      <Image
        src={scrollImage}
        width={45}
        height={45}
        alt="scroll"
        className="cursor-pointer absolute bottom-5 !w-[45px] !h-[45px]"
        onClick={scrollDown}
      />
    </div>
  );
};

export default Herosection;
