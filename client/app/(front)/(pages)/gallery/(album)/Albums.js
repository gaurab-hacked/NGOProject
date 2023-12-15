"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import image1 from "@/public/hero.jpg";
import Link from "next/link";

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
    <div className="gap-5 gridcontainer">
      {list.map((item, index) => (
        <Link href="gallery/images" className="max-w-[300px]" key={index}>
          <Card className="py-4 pt-1">
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={image1}
                width={270}
              />
            </CardBody>
            <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Daily Mix</p>
              <h4 className="font-bold text-large">Ecommerce Site</h4>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
