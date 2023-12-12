import { Image } from "@nextui-org/react";
import React from "react";

const Patners = () => {
  return (
    <>
      <div className="relative w-full h-full">
        <div className="min-h-[10vh] w-[100%] mt-4 p-10 ">
          <div className="w-[60%] m-auto flex flex-col">
            <h2 className="text-2xl pb-5 font-semibold text-center underline">
              Our Pathers
            </h2>
            <div className="flex w-[80%] items-center m-auto my-10 mb-5 justify-between ">
              <Image
                src={"./microsoft.png"}
                width={200}
                height={200}
                alt="microsoft"
                className="w-[100px] h-[100px]"
              />
              <Image
                src={"./facebook.png"}
                width={200}
                height={200}
                alt="facebook"
                className="w-[100px] h-[100px]"
              />
              <Image
                src={"./instagram.webp"}
                width={200}
                height={200}
                alt="instagram"
                className="w-[100px] h-[100px]"
              />
              <Image
                src={"./twitter.png"}
                width={200}
                height={200}
                alt="twitter"
                className="w-[120px] h-[100px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Patners;
