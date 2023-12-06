import React from "react";
import { Card } from "@nextui-org/react";

export default function Eachcol() {
  return (
    <Card
      isPressable
      radius="none"
      shadow="none"
      className="w-[250px] !rounded-sm h-[65px] p-2 pt-1 cursor-pointer hover:bg-[#24657018]"
    >
      <div radius="none">
        <h3 className="w-full !text-start font-semibold text-sm tracking-wide">
          Heading
        </h3>
        <p className="w-full !text-start text-xs">
          Make beautiful websites regardless of your design experience.
        </p>
      </div>
    </Card>
  );
}
