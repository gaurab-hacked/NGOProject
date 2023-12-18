import Image from "next/image";
import React from "react";
import image from "@/public/mission.png";
import { Card } from "@nextui-org/react";

const Missionpage = () => {
  return (
    <div>
      <Card className="xl:w-[65%] w-[90%] mx-auto flex flex-col lg:flex-row gap-10 p-5 md:p-10 my-10">
        <Image src={image} alt="our mission" width={380} height={250} />
        <div>
          <h2 className="text-xl md:text-2xl font-semibold w-divide mb-1">
            Our Mission
          </h2>
          <p className="text-justify text-gray-600 text-sm md:text-base">
            Our mission is to empower individuals in underdeveloped communities
            by providing them with the essential skills and knowledge necessary
            to unlock their full potential. We passionately envision vibrant
            societies where every individual possesses the tools to secure
            meaningful employment, contribute meaningfully to their communities,
            and lead profoundly fulfilling lives. Through comprehensive
            education, targeted training programs, and unwavering community
            support, we actively bridge the digital divide. Our goal is to
            empower individuals to become architects of their own success,
            fostering positive change and sustainable development that resonates
            across generations.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Missionpage;
