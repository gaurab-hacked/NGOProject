import Image from "next/image";
import React from "react";
import image1 from "@/public/logo.svg";
import image2 from "@/public/devider.svg";
import { Divider } from "@nextui-org/react";
import Events from "./Events";

const Slogan = () => {
  return (
    <div className="relative w-full h-full">
      <div className="mx-auto mb-20  max-w-[80%]">
        <div className="flex flex-col min-h-[250px]">
          <div className="flex justify-center items-center ">
            <div className="flex items-center m-6 mb-5">
              <Image src={image1} height={300} width={300} alt="slogan" />
              <div className="bg-blue-100 py-5 px-7">
                <h2 className="text-[3rem] font-mono font-semibold">
                  #TechForAll
                </h2>
                <h3 className="font-semibold italic text-lg">
                  Bridging Gaps, Empowering Lives
                </h3>
              </div>
            </div>
          </div>
          <p className="font-semibold italic text-center pb-3">
            DES: A non-profit bridging the digital divide, empowering
            underserved communities through transformative digital literacy for
            an inclusive future.
          </p>
        </div>
        <div className="flex w-full gap-2 mt-5 justify-center items-center">
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
