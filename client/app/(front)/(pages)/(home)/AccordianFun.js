import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { LuServerCrash } from "react-icons/lu";
import { RiHealthBookFill } from "react-icons/ri";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";
import { MdEnergySavingsLeaf } from "react-icons/md";

const data = [
  {
    id: 1,
    title: "Economic Empowerment",
    des: "Digital literacy opens doors to new job markets. From remote work and online entrepreneurship to e-commerce and digital agriculture, individuals can gain valuable skills and income opportunities previously inaccessible. Participation in the global digital economy fuels local economies and fosters sustainable development.",
    icon: <RiMoneyDollarBoxFill />,
  },
  {
    id: 2,
    title: "Educational Advancement",
    des: "Access to online learning platforms and educational resources empowers individuals to break free from geographical and financial limitations. Digital literacy enables self-directed learning, upskilling, and access to higher education, fueling a more educated and competitive workforce.",
    icon: <FaLaptopCode />,
  },
  {
    id: 3,
    title: "Improved Healthcare",
    des: "Telemedicine offers remote consultations and access to medical information, bridging healthcare gaps in underserved areas. Digitally empowered communities can participate in health awareness campaigns and disease prevention initiatives, leading to healthier populations.",
    icon: <RiHealthBookFill />,
  },
  {
    id: 4,
    title: "Civic Engagement and Empowerment",
    des: "Digital tools facilitate communication and information sharing, fostering transparency and accountability in governance. Social media platforms enable communities to voice concerns, advocate for change, and hold leaders accountable.",
    icon: <LuServerCrash />,
  },
  {
    id: 5,
    title: "Social Inclusion and Bridging the Divide",
    des: "Digital literacy empowers marginalized groups, including women, minorities, and rural communities, to connect, share their stories, and advocate for their rights. It breaks down geographical barriers and fosters cultural understanding, promoting a more inclusive and connected society.",
    icon: <IoIosPeople className="scale-125" />,
  },
  {
    id: 6,
    title: "Green Tech Research to Combat Climate Change",
    des: "Global Digital Empowerment Society (DES) recognizes the pivotal role of Information and Communication Technology (ICT) in addressing climate change. With a focus on Nepal, DES prioritizes research in areas such as circular economy implementation, climate modeling, waste management, and e-waste issues. The emphasis on e-waste management aligns with Nepal's growing electronic waste challenge, containing hazardous materials. This initiative contributes to Nepal's goal of achieving net-zero status by 2045 as outlined in its Nationally Determined Contribution (NDC).",
    icon: <MdEnergySavingsLeaf className="scale-125" />,
  },
];

export default function AccordianFun() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));

  return (
    <div className="w-[95%] md:max-w-[65%] m-auto my-20">
      <h2 className=" font-semibold text-center text-2xl font-mono md:text-3xl mb-2">
        Key Focus Areas
      </h2>
      <Accordion
        id="accor"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        {data.map((e, index) => {
          return (
            <AccordionItem
              data-aos="fade-up"
              key={e.id}
              aria-label={e.title}
              title={`${e.title}`}
              startContent={e.icon}
              className="text-justify text-sm md:text-base !font-mono"
            >
              {e.des}
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
