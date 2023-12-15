import React from "react";

const Vision = ({ data }) => {
  return (
    <div className="relative shadow w-full h-full bg-blue-50">
      <div className="min-h-[20vh] pb-12 md:pb-16 w-[100%] mt-10 p-4 text-justify md:text-center md:p-10 pt-4 md:pt-7 ">
        <div className="w-[100%] md:w-[75%] lg:w-[60%] m-auto flex flex-col">
          <h2 className="text-lg md:text-2xl pt-6 pb-5 font-semibold text-center underline">
            {data.title}
          </h2>
          <p className="text-sm md:text-base text-justify md:text-center text-slate-600">
            {data.des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
