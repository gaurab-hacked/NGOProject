import { Image } from "@nextui-org/react";
import React from "react";

const Patners = () => {
  return (
    <>
      <div className="z-1 relative w-full h-full">
        <div className="z-1 min-h-[10vh] w-[100%] mt-4 p-4 md:p-10 ">
          <div className="w-full md:w-[75%] lg:w-[60%] m-auto flex flex-col">
            <h2 className="text-lg md:text-2xl pb-5 font-semibold text-center underline">
              Our Pathers
            </h2>
            <div className="z-1 flex w-[95%] items-center m-auto my-6 md:my-10 mb-3 md:mb-5 justify-center gap-4 md:gap-10 ">
              <Image
                src={"./microsoft.png"}
                width={100}
                height={100}
                alt="microsoft"
                className="w-[60px] z-1 h-[60px] md:w-[100px] md:h-[100px]"
              />
              <Image
                src={"./facebook.png"}
                width={100}
                height={100}
                alt="facebook"
                className="w-[60px] z-1 h-[60px] md:w-[100px] md:h-[100px]"
              />
              <Image
                src={"./instagram.webp"}
                width={100}
                height={100}
                alt="instagram"
                className="w-[60px] z-1 h-[60px] md:w-[100px] md:h-[100px]"
              />
              <Image
                src={"./twitter.png"}
                width={100}
                height={100}
                alt="twitter"
                className="w-[65px] z-1 h-[60px] md:w-[110px] md:h-[100px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Patners;
