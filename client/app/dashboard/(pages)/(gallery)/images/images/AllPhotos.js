"use client";
import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { Delete } from "@mui/icons-material";

export default function Albums({ list }) {
  const deleteBtnClk = (e) => {
    console.log(e);
  };
  return (
    <>
      <div className="gap-1 gridcontainer !m-10 !mx-5 max-h-[600px] !pb-20 overflow-y-auto">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => {}}
            radius="none"
            className="rounded-sm max-w-[350px] overflow-hidden"
          >
            <CardBody className="overflow-visible group max-w-[350px] flex justify-center  h-[200px] items-center relative bg-black !p-0">
              <Image
                shadow="sm"
                radius="lg"
                width={300}
                height={300}
                alt={item}
                className="w-full absolute inset-0 h-full rounded-sm object-cover group-hover:opacity-20 duration-200"
                src={item}
              />
              <div onClick={() => deleteBtnClk(item)}>
                <Delete className="text-3xl group-hover:block hidden scale-110 text-white" />
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
}
