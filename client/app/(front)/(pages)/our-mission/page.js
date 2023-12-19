"use client";
import React, { useEffect } from "react";
import Breadcrumb from "../../common/Components/Breadcrumb";
import Herosection from "../../common/Components/Herosection";
import Missionpage from "./Missionpage";
import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <div className="h-[60vh] overflow-hidden w-full">
        <Herosection />
      </div>
      <div className="md:w-[90%] w-[96%] m-auto my-10">
        <Breadcrumb category={"Home"} subcategory={"Our Mission"} />
        <Missionpage />
      </div>
    </>
  );
};

export default Page;
