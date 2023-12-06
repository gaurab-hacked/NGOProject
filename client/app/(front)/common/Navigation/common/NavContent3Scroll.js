import React from "react";
import Eachcol from "./Eachcol";
import { Card } from "@nextui-org/react";

const NavContent3Scroll = () => {
  return (
    <Card
      radius="none"
      className={`absolute !rounded-sm !p-2 left-[130px] !m-0 top-0 z-50 hidden group-hover:block navcard`}
    >
      <div className=" py-0">
        <ul className="flex gap-3 flex-col md:flex-row">
          <li className="!h-[270px] flex justify-between flex-col">
            <Eachcol />
            <Eachcol />
            <Eachcol />
            <Eachcol />
          </li>

          <li className="!h-[270px] flex justify-between flex-col">
            <Eachcol />
            <Eachcol />
            <Eachcol />
            <Eachcol />
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default NavContent3Scroll;
