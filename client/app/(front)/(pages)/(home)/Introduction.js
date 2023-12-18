import React from "react";
import Events from "./Events";
import { Card } from "@nextui-org/react";

const Introduction = () => {
  return (
    <div className="relative w-full h-full">
      <div className="min-h-[50vh] w-full lg:w-[80%] my-10 p-2 ">
        <Card className="lg:w-[65%] md:w-[75%] w-[100%] m-auto p-3 md:p-5 pb-8 rounded-md">
          <h2 className="text-center font-semibold text-lg md:text-2xl my-5 mt-3 underline">
            Welcome to the Digital Empowerment Society!
          </h2>
          <p className="text-justify text-gray-600 text-sm md:text-base">
            In the rapidly advancing landscape of technology, our nonprofit
            organization is at the forefront of bridging gaps through digital
            literacy initiatives, particularly in underdeveloped countries. As a
            dedicated NGO, our mission revolves around providing a
            transformative path to progress by making digital literacy a
            cornerstone for individuals in regions facing socio-economic
            challenges.
          </p>
          <p className="text-justify text-gray-600 text-sm md:text-base">
            Within underdeveloped countries, our nonprofit endeavors to act as a
            catalyst for positive change. Digital literacy, seen as an
            invaluable passport to progress, becomes a tool for empowerment,
            equipping individuals to navigate the digital era and overcome
            obstacles. Our commitment extends beyond imparting technical skills;
            we aim to foster a comprehensive development that enhances personal
            capabilities and contributes to the collective advancement of
            communities.
          </p>
          <p className="text-justify text-gray-600 text-sm md:text-base">
            Acknowledging the digital divide&apos;s potential to exacerbate
            inequalities, our nonprofit prioritizes targeted digital literacy
            programs to narrow this gap. By doing so, we empower individuals to
            meaningfully participate in the global digital economy, thereby
            addressing socio-economic disparities.
          </p>
          <p className="text-justify text-gray-600 text-sm md:text-base">
            As a nonprofit organization, our vision encompasses a future where
            every individual, regardless of location or socio-economic status,
            can leverage digital technology for personal and collective growth.
            Through collaborative efforts and a focus on digital literacy, we
            are dedicated to creating a more inclusive, connected, and digitally
            empowered world.
          </p>
        </Card>
      </div>
      <Events />
    </div>
  );
};

export default Introduction;
