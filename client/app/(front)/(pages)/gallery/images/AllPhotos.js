"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import EachPhotos from "./EachPhotos";
import image1 from "@/public/image1.jpg";
import image2 from "@/public/image2.jpg";
import Image from "next/image";

export default function Albums() {
  const list = [
    {
      title: "image1",
      image: image1,
    },
    {
      title: "image2",
      image: image2,
    },
  ];
  const btnref = useRef();

  return (
    <>
      <div className="gap-5 gridcontainer">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => btnref.current.click()}
            radius="none"
            className="rounded-sm overflow-hidden max-w-[350px]"
          >
            <CardBody className="overflow-visible p-1">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full rounded-sm object-cover hover:scale-105 duration-200 h-[200px]"
                src={item.image}
              />
            </CardBody>
          </Card>
        ))}
      </div>
      <EachPhotos btnref={btnref} data={list} />
    </>
  );
}
