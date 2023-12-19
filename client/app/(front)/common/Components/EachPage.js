import React from "react";
import Image from "next/image";
import scrollImage from "@/public/scrollImage.gif";
import { Button } from "@nextui-org/react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
const EachPage = ({ data }) => {
  const scrollDown = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };

  return (
    // <div className="h-[500px] relative w-full bg-black mt-7">
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
            <h1 className="font-bold joseFin text-[2.5rem] text-white tracking-wide">
              {data.title} <br />
            </h1>
            <p className="w-full lg:w-[80%] text-white text-center text-2xl">
              {data.description}
            </p>
            <div className="flex gap-5 mt-5 relative">
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
            <div className="absolute bottom-10 ">
              <Image
                src={scrollImage}
                width={45}
                height={45}
                alt="scroll"
                className="cursor-pointer !w-[45px] !h-[45px]"
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
