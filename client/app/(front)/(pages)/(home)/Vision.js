import React from "react";
import Lottie from "lottie-react";

const Vision = ({ data }) => {
  return (
    <div className="relative flex justify-center items-center shadow w-full h-full py-14 bg-blue-50">
      <div className="w-1/3 flex justify-center items-center  h-full">
        <div className="absolute bottom-8 w-[650px]">
          <Lottie animationData={data.animation} />
        </div>
      </div>
      <div className="w-1/2">
        <h2 className=" font-semibold text-center text-lg font-mono md:text-3xl mb-2">
          {data.title}
        </h2>
        <p className="px-5 text-sm md:text-lg text-gray-800 text-center font-mono">
          {data.des}
        </p>
      </div>
    </div>
  );
};

export default Vision;
