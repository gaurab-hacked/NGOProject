import React from "react";
import image1 from "@/public/Pictureee.jpg";
import { Card } from "@nextui-org/react";
import Image from "next/image";

const newsAndEventsData = [
  {
    _id: 1,
    title: "GDES's Global IT Empowerment",
    des: "GDES's Global IT initiative bridges the digital divide in underdeveloped countries by equipping individuals with hands-on IT skills for greater empowerment and opportunity.",
  },
  {
    _id: 2,
    title: "Rural IT Empowerment Initiative",
    des: "GDES is leading the charge in rural areas through its Global IT initiative, offering hands-on IT skills training to empower communities and unlock their potential.",
  },
];

export default async function PostPage({ params }) {
  const { id } = params;
  const actual = id.split("-")[1];

  const final = newsAndEventsData.filter(
    (e) => String(e._id) === String(actual)
  );

  return (
    <Card className="flex gap-3 flex-col max-w-[80%] mx-auto my-16 p-7">
      <h2 className="text-2xl font-semibold">{final[0].title}</h2>
      {final[0].date && (
        <p className="text-tiny capitalize -mt-4 font-bold text-gray-500">
          Date: {final[0].date}
        </p>
      )}
      <div>
        {final[0].image && (
          <Image
            src={final[0].image}
            width={500}
            height={500}
            alt={final[0].title}
            className="float-left pr-3 rounded-sm"
          />
        )}
        <p className="text-base text-justify text-gray-600 md:text-lg">
          {final[0].des}
        </p>
      </div>
    </Card>
  );
}
