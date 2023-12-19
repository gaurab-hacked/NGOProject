"use client";
import React from "react";
import Lottie from "lottie-react";

import Mission from "@/assets/mission.json";

const MissionPage = () => {
  return (
    <div
      id="mission"
      className="w-full flex max-w-[100%] gap-5 mx-auto items-center justify-center h-full min-h-[100px]"
    >
      <div data-aos="fade-right" className="w-[60%]">
        <h2 className="font-semibold text-center text-lg font-mono md:text-3xl mb-2">
          Our Mission
        </h2>
        <p className="text-sm md:text-lg text-center font-mono text-gray-800">
          Our mission is to empower individuals in underdeveloped communities by
          providing them with the essential skills and knowledge necessary to
          unlock their full potential. We passionately envision vibrant
          societies where every individual possesses the tools to secure
          meaningful employment, contribute meaningfully to their communities,
          and lead profoundly fulfilling lives. Through comprehensive education,
          targeted training programs, and unwavering community support, we
          actively bridge the digital divide. Our goal is to empower individuals
          to become architects of their own success, fostering positive change
          and sustainable development that resonates across generations.
        </p>
      </div>
      <div data-aos="fade-left" className="w-1/3 max-w-[400px]">
        <Lottie animationData={Mission} />
      </div>
    </div>
  );
};

export default MissionPage;
