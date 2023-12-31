"use client";
import React from "react";
// import React, { useRef } from "react";
import Image from "next/image";
import scrollImage from "@/public/scrollImage.gif";
import { Card } from "@nextui-org/react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Link from "next/link";

const EachPage = ({ data }) => {
  const scrollDown = () => {
    window.scrollTo({
      top: 550,
      behavior: "smooth",
    });
  };

  // const animationRef = useRef();

  return (
    <div className="md:h-[550px] h-[550px] relative w-full bg-black custom-gradient">
      <Image
        className="position-absolute w-full h-full opacity-40 blur-sm"
        src={data.image}
        style={{ objectFit: "cover" }}
        alt="something"
        height={600}
        width={1100}
      />
      {/* <div className="absolute -rotate-45 w-[300px] z-[3] bottom-0 left-0">
        <Lottie
          // onComplete={() => {
          //   animationRef.current?.setDirection(-1);
          //   animationRef.current?.play();
          // }}
          lottieRef={animationRef}
          animationData={animation1}
          loop={false}
        />
      </div> */}

      <div className="absolute z-50 inset-0">
        <div className="carousel-caption flex flex-col h-full items-center justify-center">
          <div className="p-3 flex justify-center items-center flex-col md:w-[80%] w-[95%] max-w-[800px] font-mono">
            <h1
              data-aos="fade-down"
              className="font-bold joseFin text-2xl md:text-3xl font-mono lg:text-[2.5rem] text-white tracking-wide"
            >
              {data.title} <br />
            </h1>
            <p
              data-aos="flip-up"
              className="w-full lg:w-[80%]  text-white text-center text-lg md:text-xl my-1 lg:text-2xl"
            >
              {data.description}
            </p>
            <div data-aos="fade-up" className="flex gap-5 mt-5 relative">
              <div className="absolute blur-xl inset-0"></div>
              <Link href={"/our-mission"}>
                <Card
                  size="sm"
                  variant="bordered"
                  radius="none"
                  isPressable
                  className="!rounded-sm flex flex-row gap-1 border-2 hover:bg-blue-300 hover:text-black !tracking-wide border-blue-200  mt-1 text-base py-[.4rem] px-4 md:py-[.6rem] md:px-6 pr-6 font-bold bg-transparent text-white "
                >
                  Explore
                  <IoArrowForwardCircleOutline className=" text-xl mt-[1px]" />
                </Card>
              </Link>
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
