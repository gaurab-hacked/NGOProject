import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import image1 from "@/public/hero.jpg";
import Link from "next/link";

export default function EachProjects({ data }) {
  return (
    <Link
      href={`/projects/item-${data._id}`}
      className="max-w-[300px] md:mx-0 mx-auto"
    >
      <Card className="pb-4 h-[150px] !z-[2] overflow-hidden">
        <CardHeader className="pb-0 px-4 !z-[2] flex-col items-start">
          {/* <p className="text-tiny uppercase font-bold">Daily Mix</p> */}
          <h4 className="font-bold font-mono text-large">
            {data.title.length > 23
              ? data.title.slice(0, 23) + "..."
              : data.title}
          </h4>
          <small className="text-slate-800 font-sans text-base text-justify">
            {data.des.length > 130 ? data.des.slice(0, 130) + "..." : data.des}
          </small>
        </CardHeader>
        {data.image && (
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={image1}
              width={300}
            />
          </CardBody>
        )}
      </Card>
    </Link>
  );
}
