import React from "react";
import Lottie from "lottie-react";

const Joinus = ({ data }) => {
  return (
    <div className="relative flex gap-5 justify-center items-center shadow w-full h-full bg-blue-50">
      <div className="w-1/2">
        <h2 className=" font-semibold text-center text-lg font-mono md:text-3xl mb-2">
          {data.title}
        </h2>
        <p className="px-5 text-sm md:text-lg text-center font-mono">
          {data.des}
        </p>
      </div>
      <div className="w-1/3 flex justify-center text-gray-800 items-center  h-full max-w-[400px]">
        <Lottie animationData={data.animation} />
      </div>
    </div>
  );
};

export default Joinus;
