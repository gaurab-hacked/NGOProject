"use client";
import React, { useEffect } from "react";
import Lottie from "lottie-react";

import Laptop from "@/assets/laptopfloating.json";

const Introduction = () => {
  return (
    <div className="w-full flex max-w-[85%] gap-5 mx-auto items-center justify-center h-full min-h-[200px]">
      <div data-aos="fade-right" className="w-1/2">
        <h2 className="font-semibold text-center text-lg font-mono md:text-3xl mb-2">
          Digital Empowerment Society
        </h2>
        <p className="text-sm md:text-lg text-center font-mono text-gray-800">
          In the rapidly advancing landscape of technology, our nonprofit
          organization is at the forefront of bridging gaps through digital
          literacy initiatives, particularly in underdeveloped countries. As a
          dedicated NGO, our mission revolves around providing a transformative
          path to progress by making digital literacy a cornerstone for
          individuals in regions facing socio-economic challenges.
        </p>
      </div>
      <div data-aos="fade-left" className="w-1/3">
        <Lottie animationData={Laptop} />
      </div>
    </div>
  );
};

export default Introduction;
