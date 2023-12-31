"use client";
import React from "react";
import Breadcrumb from "../../common/Components/Breadcrumb";
import Herosection from "../../common/Components/Herosection";
import AccordianFun from "./AccordianFun";

const page = () => {
  return (
    <>
      <div className="h-[60vh] overflow-hidden w-full">
        <Herosection />
      </div>
      <div className="md:w-[90%] w-[96%] m-auto my-10">
        <Breadcrumb category={"Home"} subcategory={"What-We-Do"} />
        <AccordianFun />
      </div>
    </>
  );
};

export default page;
