import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function EachEventCards({ data }) {
  return (
    <Link href="/news-and-events/news-1" className="max-w-[300px]">
      <Card className="pb-4 !font-mono">
        <CardBody className="overflow-visible pb-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={data.image}
            width={270}
          />
        </CardBody>
        <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny  font-mono uppercase font-bold text-gray-500">
            Date: {data.date}
          </p>
          <h4 className="font-bold font-mono text-large">
            {data.title.length > 40
              ? data.title.substring(0, 40) + "..."
              : data.title}
          </h4>
          <small className="text-default-500 font-mono text-justify">
            {data.des.length > 100
              ? data.des.substring(0, 100) + "..."
              : data.title}
          </small>
        </CardFooter>
      </Card>
    </Link>
  );
}
