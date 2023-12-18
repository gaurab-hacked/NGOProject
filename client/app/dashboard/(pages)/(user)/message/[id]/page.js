"use client";
import React from "react";
import Pagesab from "../page";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  return (
    <div>
      <Pagesab MsgId={params.id} />
    </div>
  );
};

export default Page;
