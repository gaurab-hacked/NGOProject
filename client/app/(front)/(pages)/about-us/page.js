"use client";
import React from "react";
import About from "./About";
import Breadcrumb from "../../common/Components/Breadcrumb";

const page = () => {
  return (
    <div className="mx-2">
      <Breadcrumb />
      <About />
    </div>
  );
};

export default page;
