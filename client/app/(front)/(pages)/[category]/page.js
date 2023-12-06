"use client";
import React from "react";
import Content from "./Content";
import Breadcrumb from "../../common/Components/Breadcrumb";

const page = () => {
  return (
    <div className="mx-2">
      <Breadcrumb />
      <Content />
    </div>
  );
};

export default page;
