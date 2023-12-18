"use client";
import React from "react";
import image1 from "@/public/leadership.png";
import Link from "next/link";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";

const newsAndEventsData = [
  {
    _id: 1,
    title:
      "From Solutions Architect to Global Changemaker: Bridging the Digital Divide",
    name: "Samir (BJ) Thapa (MSIM)",
    image: image1,
    des: "For the past 30 years, my career has been dedicated to building bridges—bridges not only in technology but also in people's lives. Armed with a solid foundation in Electronics & Communications Engineering and complemented by a Master's in Information Management, I've seamlessly blended engineering expertise with business acumen. Throughout my journey, I've played a pivotal role in helping numerous organizations unlock operational efficiency and reach new heights. However, fueled by a different ambition, my focus has now shifted towards empowering individuals globally through the transformative power of digital literacy and IT skills. Picture a world where underprivileged communities, regardless of their location, can access the tools needed to thrive and improve their lives. I envision crafting innovative technology solutions that not only bridge the digital divide but also spark a global revolution in learning. My extensive experience, ranging from architecting and deploying network, cloud, and communications technologies to leading architectural design and developing technology strategies, seamlessly translates into building sustainable digital literacy programs for underserved communities. In this pursuit, I can develop culturally sensitive, low-cost tech solutions that are accessible to individuals with limited resources. Leveraging cloud technologies, I aim to overcome geographical barriers and deliver impactful learning experiences. Collaboration with local organizations and NGOs is integral to ensuring long-term program sustainability and community ownership. Moreover, I am passionate about mobilizing volunteers and resources to amplify the program's reach and impact. My belief is rooted in the idea that digital literacy is more than just a skill—it is a passport to a brighter future. Together, let's join hands and build a world where everyone has the opportunity to thrive in the digital age.",
  },
];

const Leaderships = () => {
  return (
    <>
      <div className="grid gap-4 gridcontainer">
        {newsAndEventsData.map((data, index) => (
          <Link
            href={`/leadership/item-${data._id}`}
            key={index}
            className="max-w-[300px]"
          >
            <Card className="py-4 min-h-[150px] overflow-hidden">
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl !max-h-[220px]"
                  src={data.image}
                  width={270}
                  height={220}
                />
              </CardBody>
              <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">
                  {data.title.length > 23
                    ? data.title.slice(0, 23) + "..."
                    : data.title}
                </h4>
                <p className="text-tiny uppercase font-bold">{data.name}</p>
                <small className="text-default-500 text-justify">
                  {data.des.length > 120
                    ? data.des.slice(0, 120) + "..."
                    : data.des}
                </small>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Leaderships;
