"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import EachPhotos from "./EachPhotos";
import image1 from "@/public/hero.jpg";
import Image from "next/image";

export default function Albums() {
  const list = [
    {
      title: "Orange",
      img: image1,
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: image1,
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: image1,
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: image1,
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: image1,
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: image1,
      price: "$8.00",
    },
    {
      title: "Banana",
      img: image1,
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: image1,
      price: "$12.20",
    },
  ];
  const router = useRouter();
  const btnref = useRef();

  return (
    <>
      <div className="gap-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => btnref.current.click()}
            // ref={btnref}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[200px]"
                src={item.img}
              />
            </CardBody>
          </Card>
        ))}
      </div>
      <EachPhotos btnref={btnref} />
    </>
  );
}
