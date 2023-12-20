import Image from "next/image";
import React from "react";
import image1 from "@/public/logo.svg";
import image2 from "@/public/devider.svg";
import { Divider } from "@nextui-org/react";
import Events from "./Events";

const Slogan = () => {
  return (
    <div className="relative w-full h-full">
      <div className="mx-auto max-w-[95%] md:max-w-[80%]">
        <div className="flex flex-col min-h-[250px]">
          <div className="flex justify-center items-center ">
            <div className="flex items-center md:m-6 bg-2 md:mb-5">
              <Image
                src={image1}
                height={300}
                width={300}
                className="md:w-[300px] md:h-[300px] h-[150px] w-[150px]"
                alt="slogan"
              />
              <div className="bg-blue-100 md:py-5 py-3 px-3 md:px-7">
                <h2 className="text-2xl md:text-[3rem] font-mono font-semibold">
                  #TechForAll
                </h2>
                <h3 className="font-semibold font-mono italic text-sm md:text-lg">
                  Bridging Gaps, Empowering Lives
                </h3>
              </div>
            </div>
          </div>
          <p
            data-aos="fade-up"
            className="font-semibold italic text-center pb-3 text-sm md:text-based max-w-[95%] md:max-w-[90%] mx-auto"
          >
            DES: A non-profit bridging the digital divide, empowering
            underserved communities through transformative digital literacy for
            an inclusive future.
          </p>
        </div>
        <div className="flex w-[80%] mx-auto md:w-full gap-2 mt-5 justify-center items-center">
          <Divider className="w-[50%]" />
          <Image src={image2} height={40} width={40} alt="devider" />
          <Divider className="w-[50%]" />
        </div>
      </div>
      {/* <Events /> */}
    </div>
  );
};

export default Slogan;
