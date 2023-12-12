import React from "react";
import Carousel from "./Carousel";
import Introduction from "./Introduction";
import Vision from "./Vision";
import AccordianFun from "./AccordianFun";
import Pathers from "./Patners";
const pageData = {
  vision: {
    title: "Our Vision",
    des: "Our vision is a world where everyone possesses the skills, knowledge, and access needed to thrive in the digital age. We envision connected and informed communities equipped to tackle challenges using modern tools. By promoting inclusivity and equitable access, we aim to inspire active engagement with technology, fostering creativity and innovation. Our vision goes beyond technological proficiency, emphasizing the holistic development of individuals and communities for meaningful contributions in our dynamic era.",
  },
  challange: {
    title: "Join Us in Empowering Change",
    des: "Whether you’re an individual looking to enhance your digital skills, a community organization seeking to collaborate, or a supporter of our mission, there are numerous ways to get involved. Together, we can build a digitally inclusive society that paves the way for a brighter future. Thank you for visiting the Digital Empowerment Society. Join us in our journey of digital transformation and empowerment. Contact us to learn more or contribute to our cause.",
  },
};

const Home = () => {
  return (
    <>
      <Carousel />
      <Introduction />
      <Vision data={pageData.vision} />
      <AccordianFun />
      <Vision data={pageData.challange} />
      <Pathers />
    </>
  );
};

export default Home;
