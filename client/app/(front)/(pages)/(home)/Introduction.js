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
          Global Digital Empowerment Society (GDES) is a California non-profit
          committed to bridging the global digital divide. We empower
          underserved communities worldwide by providing essential digital
          literacy and IT skills. Our mission aims to unlock economic
          empowerment, educational advancement, improved healthcare, civic
          engagement, and social inclusion. Join us on this transformative
          journey toward a more equitable and prosperous global society, one
          click at a time.
        </p>
      </div>
      <div data-aos="fade-left" className="w-1/3">
        <Lottie animationData={Laptop} />
      </div>
    </div>
  );
};

export default Introduction;
