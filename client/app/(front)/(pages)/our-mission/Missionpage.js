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
          Our mission at Global Digital Empowerment Society (GDES) is clear: to
          equip individuals in underdeveloped communities with essential digital
          literacy and IT skills. We envision thriving societies where everyone
          has the tools to secure meaningful employment, contribute
          meaningfully, and lead fulfilling lives. Through education, training,
          and community support, we bridge the digital divide, empowering
          individuals to become architects of their own success and drive
          positive change and sustainable development. Join us in this mission
          to create a more equitable and prosperous world through the
          transformative power of digital empowerment.
        </p>
      </div>
      <div data-aos="fade-left" className="w-1/3 max-w-[400px]">
        <Lottie animationData={Mission} />
      </div>
    </div>
  );
};

export default MissionPage;
