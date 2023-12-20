import React from "react";
import Lottie from "lottie-react";

const Vision = ({ data }) => {
  return (
    <div className="relative flex flex-col-reverse md:flex-row justify-center items-center shadow w-full h-full py-14 bg-blue-50">
      <div className="md:w-1/3 flex justify-center items-center  h-full">
        <div className="-mt-24 md:mt-0 md:absolute bottom-8 w-[650px]">
          <div className="relative">
            <div data-aos="fade-right">
              <Lottie animationData={data.animation} />
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" className="md:w-1/2">
        <h2 className=" font-semibold text-center text-2xl font-mono md:text-3xl mb-2">
          {data.title}
        </h2>
        <p className="px-5 text-base md:text-lg text-gray-800 text-justify md:text-center font-mono">
          {data.des}
        </p>
      </div>
    </div>
  );
};

export default Vision;
