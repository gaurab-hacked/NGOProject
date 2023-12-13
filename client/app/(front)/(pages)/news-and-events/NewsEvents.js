"use client";
import React, { useRef } from "react";
import { Card } from "@nextui-org/react";
import Modal from "./Modal";

const newsAndEventsData = [
  {
    title: "News 1",
    content:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. ",
  },
  { title: "Event 1", content: "Consectetur adipiscing elit." },
];

const NewsEvents = () => {
  const btnref = useRef();
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {newsAndEventsData.map((item, index) => (
          <Card
            key={index}
            className="flex-shrink-0 flex max-h-[125px] justify-start p-3 item-center w-full bg-white rounded-md"
            isPressable
            onClick={() => btnref.current.click()}
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600 w-full !text-start">{item.content}</p>
          </Card>
        ))}
      </div>
      <Modal btnref={btnref} />
    </>
  );
};

export default NewsEvents;
