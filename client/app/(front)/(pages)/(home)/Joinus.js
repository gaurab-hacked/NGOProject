import React from "react";
import Lottie from "lottie-react";

const Joinus = ({ data }) => {
  return (
    <div className="relative overflow-x-hidden flex flex-col md:flex-row gap-5 justify-center py-4 items-center shadow w-full h-full bg-blue-50">
      <div data-aos="fade-right" className="w-full md:w-1/2">
        <h2 className=" font-semibold text-center text-2 font-mono mt-3 md:mt-0 text-2xl md:text-3xl mb-2">
          {data.title}
        </h2>
        <p className="px-5 text-base md:text-lg text-justify md:text-center font-mono">
          {data.des}
        </p>
      </div>
      <div
        data-aos="fade-left"
        className="w-full md:w-1/3 flex justify-center text-gray-800 items-center  h-full max-w-[400px]"
      >
        <Lottie animationData={data.animation} />
      </div>
    </div>
  );
};

export default Joinus;
