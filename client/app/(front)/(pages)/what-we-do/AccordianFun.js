import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaLaptopCode } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { TbPlugConnected } from "react-icons/tb";
import { LuServerCrash } from "react-icons/lu";
import { FaServer } from "react-icons/fa6";

const data = [
  {
    id: 1,
    title: "Digital Literacy Programs",
    des: "Embark on a transformative journey with our comprehensive digital literacy programs, designed for individuals of all ages and backgrounds. Dive into engaging workshops that go beyond the basics, covering fundamental computer skills, navigating social media intricacies, and mastering online safety. Join us in embracing the digital era with confidence and competence, as we guide you through the ever-evolving landscape of digital knowledge. Ignite your curiosity and empower yourself with the skills essential for thriving in the digital age. Welcome to a world where digital literacy opens doors to limitless possibilities.",
    icon: <FaLaptopCode />,
  },
  {
    id: 2,
    title: "Community Outreach",
    des: "At the heart of our mission lies a deep belief in the strength of communities. Our dedicated team actively engages with local communities, striving to understand their unique needs and challenges. Through close collaboration, we ensure that our initiatives are not just impactful but also tailor-made to address specific requirements. Join hands with us as we forge bonds and build bridges within communities, fostering a spirit of unity and shared progress. Together, let's create lasting change by working hand in hand with those we serve.",
    icon: <FaUsersGear />,
  },
  {
    id: 3,
    title: "Skill Development",
    des: "Beyond the mere utilization of digital tools, we place a strong emphasis on skill development for the digital age. Our training programs go above and beyond, encompassing a diverse array of essential skills such as coding, graphic design, digital marketing, and more. Step into the future with newfound capabilities, unlocking doors to exciting career growth opportunities. Join us on a journey of continuous learning and skill enhancement, where each lesson learned is a stepping stone toward a brighter, digitally empowered future.",
    icon: <TbPlugConnected />,
  },
  {
    id: 4,
    title: "Empowerment for Marginalized Groups",
    des: "Our unwavering commitment extends to ensuring that the digital revolution leaves no one behind. We focus on empowering marginalized groups, including women, rural populations, and underserved youth, by providing specialized training and resources. Through targeted initiatives, we strive to bridge the digital divide and create pathways for inclusive participation in the digital realm. Join us in championing diversity and inclusion as we empower individuals from all walks of life to harness the full potential of the digital age.",
    icon: <LuServerCrash />,
  },
  {
    id: 5,
    title: "Technology for Social Impact",
    des: "Harness the transformative power of technology for social good with our initiatives geared towards creating a positive impact. From spearheading awareness campaigns to actively supporting local social initiatives, we leverage digital platforms to amplify the influence of meaningful causes. Join us in utilizing technology as a force for positive change, making a tangible difference in the lives of individuals and communities. In a world increasingly connected by digital threads, let's weave a tapestry of social impact, where technology becomes a tool for building a better and more equitable society.",
    icon: <FaServer />,
  },
];

export default function AccordianFun() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));

  return (
    <div>
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
              className="text-justify text-sm md:text-base"
            >
              {e.des}
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
