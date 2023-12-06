"use client";
import Breadcrumb from "@/app/(front)/common/Components/Breadcrumb";
import React from "react";
import Content from "../Content";

const page = () => {
  return (
    <>
      <div className="mx-2">
        <Breadcrumb />
        <Content />
      </div>
    </>
  );
};

export default page;
