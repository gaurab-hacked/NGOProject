import React from "react";
import image1 from "@/public/leadership.png";
import { Card } from "@nextui-org/react";
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
        <h4 className="font-bold text-large">{final[0].name}</h4>
        <p className="text-base text-justify text-gray-600 md:text-lg">
          {final[0].des}
        </p>
      </div>
    </Card>
  );
}
