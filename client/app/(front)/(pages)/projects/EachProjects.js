import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import image1 from "@/public/hero.jpg";
import Link from "next/link";

export default function EachProjects() {
  return (
    <Link href="/">
      <Card className="py-4 !max-w-[300px]">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          {/* <small className="text-default-500">begineer</small> */}
          <h4 className="font-bold text-large">Ecommerce Site</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={image1}
            width={270}
          />
        </CardBody>
      </Card>
    </Link>
  );
}
