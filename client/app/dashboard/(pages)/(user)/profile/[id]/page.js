"use client";
import React from "react";
import { useParams } from "next/navigation";
import Main from "../Main";

const page = () => {
  const params = useParams();
  return (
    <>
      <Main userId={params.id} />
    </>
  );
};

export default page;
