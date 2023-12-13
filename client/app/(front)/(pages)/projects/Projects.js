"use client";
import React from "react";
import { Card } from "@nextui-org/react";
import EachProjects from "./EachProjects";

const newsAndEventsData = [
  {
    title: "News 1",
    content:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. ",
  },
  { title: "Event 1", content: "Consectetur adipiscing elit." },
];

const Projects = () => {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5">
        {newsAndEventsData.map((item, index) => (
          <EachProjects />
        ))}
      </div>
    </>
  );
};

export default Projects;
