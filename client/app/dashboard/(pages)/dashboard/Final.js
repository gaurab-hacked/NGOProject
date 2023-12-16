import React, { useState } from "react";
import Link from "next/link";
function convertToK(amount) {
  if (amount < 1000) {
    return amount.toString();
  } else {
    const kValue = amount / 1000.0;
    return kValue.toFixed(1) + "k";
  }
}
const Final = ({ data }) => {
  return (
    <div className="widget max-w-[350px] min-w-[250px] !w-[300px]">
      <div className="left">
        <span className="title !pb-0 !mb-0">{data?.title}</span>
        <span className="counter">
          {data?.isMoney && "Rs"} {convertToK(Number(data?.all))}
          <span className="!text-xs !capitalize ml-1">
            {`All ${data?.title.toLowerCase()}`}
          </span>
        </span>
        <Link href={"/"} className="link">
          {data?.link}
        </Link>
      </div>
      <div className="right">
        <div></div>
        <div className="w-full flex justify-end">{data?.icon}</div>
      </div>
    </div>
  );
};

export default Final;
