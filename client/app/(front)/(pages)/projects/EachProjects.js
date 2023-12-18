import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import image1 from "@/public/hero.jpg";
import Link from "next/link";

export default function EachProjects({ data }) {
  return (
    <Link href={`/projects/item-${data._id}`} className="max-w-[300px]">
      <Card className="py-4 h-[150px] overflow-hidden">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          {/* <p className="text-tiny uppercase font-bold">Daily Mix</p> */}
          <h4 className="font-bold text-large">
            {data.title.length > 23
              ? data.title.slice(0, 23) + "..."
              : data.title}
          </h4>
          <small className="text-default-500 text-sm text-justify">
            {data.des.length > 150 ? data.des.slice(0, 150) + "..." : data.des}
          </small>
        </CardHeader>
        {data.image && (
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={image1}
              width={270}
            />
          </CardBody>
        )}
      </Card>
    </Link>
  );
}
