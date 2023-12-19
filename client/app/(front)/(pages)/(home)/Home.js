"use client";
import React, { useEffect } from "react";
import Carousel from "./Carousel";
import Introduction from "./Introduction";
import Vision from "./Vision";
import AccordianFun from "./AccordianFun";
import Pathers from "./Patners";
import CardCollection from "./CardsCollection";
import Slogan from "./Slogan";
import technical from "@/assets/technical.json";
import vision from "@/assets/joinus.json";
import Joinus from "./Joinus";
import AOS from "aos";
import "aos/dist/aos.css";

const pageData = {
  vision: {
    title: "Our Vision",
    des: "At GDES, we envision a world where every individual, irrespective of their background, possesses vital digital literacy and IT skills. Our vision is one of thriving societies, where technology bridges economic gaps, fosters educational growth, ensures improved healthcare, and promotes active civic engagement. Through digital empowerment, we strive to create a more interconnected, inclusive, and prosperous global community.",
    animation: technical,
  },
  challange: {
    title: "Join Us in Empowering Change",
    des: "Join us at GDES to empower change. Together, we bridge the digital divide, empowering underserved communities globally. Your contribution, be it time, skills, or resources, makes a meaningful impact. Let's provide digital literacy and IT skills, unlocking opportunities for economic empowerment, education, healthcare, civic engagement, and social inclusion. Join GDES in shaping a brighter, equitable future—one where every individual thrives in the digital age.",
    animation: vision,
  },
};

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="max-w-[1550px] m-auto">
      <Carousel />
      <Slogan />
      <Introduction />
      <Vision data={pageData.vision} />
      <AccordianFun />
      <hr />
      <Joinus data={pageData.challange} />
      {/* <Pathers /> */}
      {/* <CardCollection /> */}
    </div>
  );
};

export default Home;
