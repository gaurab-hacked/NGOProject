"use client";
import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import image1 from "@/public/image1.jpg";
import Link from "next/link";

const list = [
  {
    _id: 1,
    title: "भूकम्प प्रभावितलाई सहयोग",
    image: image1,
    date: "13-08-2080",
  },
];

export default function Albums() {
  return (
    <div className="gap-5 gridcontainer justify-center sm:justify-start">
      {list.map((item, index) => (
        <Link
          href="gallery/images"
          className="max-w-[300px] md:mx-0 mx-auto"
          key={index}
        >
          <Card className="py-4 pt-1">
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={item.image}
                width={300}
              />
            </CardBody>
            <CardFooter className="pb-0 font-mono pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-mono font-bold text-gray-500">
                Date: {item.date}
              </p>
              <h4 className="font-bold font-mono text-large">{item.title}</h4>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
