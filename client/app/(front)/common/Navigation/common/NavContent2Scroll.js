import React from "react";
import Cards from "./Card2";
import Eachcol from "./Eachcol";
import { Card } from "@nextui-org/react";

const NavContent2Scroll = () => {
  return (
    <Card
      radius="none"
      className={`absolute !rounded-sm !p-2 left-[130px] !m-0 top-0 z-50 hidden group-hover:block navcard`}
    >
      <div className=" py-0">
        <ul className="flex gap-3 flex-col h-[280px] md:flex-row">
          <li className="!min-h-[250px] flex justify-between flex-col">
            <Eachcol />
            <Eachcol />
            <Eachcol />
            <Eachcol />
          </li>
          <li className="!h-full flex flex-col gap-2 justify-between">
            <div className="h-[200px]">
              <Cards />
            </div>
            <Eachcol />
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default NavContent2Scroll;
