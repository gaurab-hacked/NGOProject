import React from "react";
import Eachcol from "./Eachcol";
import { Card } from "@nextui-org/react";

const NavContent3 = (props) => {
  const { pl, pr } = props;
  const extraclass = pl == pr ? "" : pl != "" ? "left-0" : "right-0";
  return (
    <Card
      radius="none"
      className={`absolute !rounded-sm !p-2 ${extraclass} !m-0 top-[3rem] z-50 hidden group-hover:block navcard`}
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

export default NavContent3;
