"use client";
import React from "react";
import { Card } from "@nextui-org/react";
import EachProjects from "./EachProjects";

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

const Projects = () => {
  return (
    <>
      <div className="grid gap-4 gridcontainer">
        {newsAndEventsData.map((item, index) => (
          <EachProjects key={index} data={item} />
        ))}
      </div>
    </>
  );
};

export default Projects;
