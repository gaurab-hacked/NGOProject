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
        className="h-full absolute inset-0 w-full opacity-30 object-cover"
        alt="hero"
      />
      <div className="z-[5] mb-5 relative flex justify-center items-center flex-col gap-3">
        <h1 className="text-white text-lg md:text-2xl text-center font-serif font-semibold tracking-wider">
          Digital Empowerment Society
        </h1>
        <h3 className="text-white md:text-3xl text-xl font-serif text-center scale-125 font-semibold tracking-wider">
          What We Do
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
