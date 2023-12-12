import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaLaptopCode } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { TbPlugConnected } from "react-icons/tb";
import { LuServerCrash } from "react-icons/lu";
import { RiGovernmentFill } from "react-icons/ri";
import { FaServer } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";

const data = [
  {
    id: 1,
    title: "Digital Literacy Programs",
    des: "DES designs and implements digital literacy programs to equip individuals with the skills needed to navigate the digital world. These programs cover basic computer skills, internet usage, online safety, and digital communication. Additionally, such programs include intense, hands-on training focused on producing IT professionals such as IT support specialists, cloud specialists, cyber security specialists, etc. as per the demand of the job market. Remarkably, the related trainees will receive certifications from globally recognised organizations like Cisco, Microsoft ComTIA, AWS, and more.",
    icon: <FaLaptopCode />,
  },
  {
    id: 2,
    title: "Community Outreach",
    des: "The organization believes in the principle of community-driven development. DES collaborates with local communities to understand their specific needs and tailors digital literacy initiatives accordingly.",
    icon: <FaUsersGear />,
  },
  {
    id: 3,
    title: "Rural Connectivity",
    des: "Recognizing the importance of connectivity, DES works on initiatives to bring internet access to remote and rural areas. This includes setting up community networks and advocating for policies that promote affordable and accessible internet services.",
    icon: <TbPlugConnected />,
  },
  {
    id: 4,
    title: "Youth Engagement",
    des: "DES places a strong emphasis on empowering the youth. Specialized programs engage young individuals in learning digital skills, coding, and entrepreneurship, preparing them for opportunities in the digital economy.",
    icon: <LuServerCrash />,
  },
  {
    id: 5,
    title: "Digital Inclusion for Marginalized Groups",
    des: "DES is dedicated to ensuring that marginalized groups, including women, people with disabilities, and those from low-income backgrounds, are not left behind in the digital age. Specialized training programs are designed to address the unique needs of these groups.",
    icon: <FaServer />,
  },
  {
    id: 6,
    title: "E-Governance Advocacy",
    des: "DES works with local governments to advocate for the implementation of digital solutions for better governance. This includes supporting the development of digital platforms for public service delivery and citizen engagement.",
    icon: <RiGovernmentFill />,
  },
  {
    id: 7,
    title: "Green technology research for combating climate change",
    des: "Information and Communication Technology (ICT) plays a crucial role in mitigating climate change by providing tools and solutions that enhance monitoring, management, and decision-making processes. Some of the major ways in which ICT contributes to climate change mitigation are circular economy implementation, climate modeling, waste management, and carbon footprint tracking. In this context, DES aims to conduct research based on the above-mentioned ways in the Nepali context on a priority basis. For instance, the issue of e-waste management may be prioritised since Nepal has lately been suffering the swelling volume of electronic waste. (This type of waste has a negative recycling value and contains hazardous materials like mercury, lead, and lithium) Such a move is also expected to help achieve net-zero status by 2045 through its Nationally Determined Contribution (NDC).",
    icon: <GrTechnology />,
  },
];

export default function AccordianFun() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="max-w-[65%] m-auto my-20">
      <h3 className="text-center text-2xl font-semibold mb-5 underline">
        Key Focus Areas
      </h3>
      <Accordion
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        {data.map((e, index) => {
          return (
            <AccordionItem
              key={e.id}
              aria-label={e.title}
              title={`${e.title}`}
              startContent={e.icon}
              className="text-justify"
            >
              {e.des}
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
