"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import image1 from "@/public/hero.jpg";

export default function Albums() {
  const list = [
    {
      title: "Event1",
      img: image1,
    },
    {
      title: "Event1",
      img: image1,
    },
    {
      title: "Event1",
      img: image1,
    },
    {
      title: "Event1",
      img: image1,
    },
    {
      title: "Event1",
      img: image1,
    },
    {
      title: "Event1",
      img: image1,
    },
    {
      title: "Event1",
      img: image1,
    },
    {
      title: "Event1",
      img: image1,
    },
  ];

  const router = useRouter();

  return (
    <div className="gap-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => router.push("/gallery/images")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
