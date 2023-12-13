"use client";
import React from "react";
import Breadcrumb from "../../common/Components/Breadcrumb";
import AccordianFun from "./AccordianFun";
import Herosection from "../../common/Components/Herosection";

const page = () => {
  return (
    <>
      <div className="h-[60vh] overflow-hidden w-full">
        <Herosection />
      </div>
      <div className="w-[90%] m-auto my-10">
        <Breadcrumb category={"Home"} subcategory={"What-We-Do"} />
        <AccordianFun />
      </div>
    </>
  );
};

export default page;
