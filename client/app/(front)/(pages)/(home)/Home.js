import React from "react";
import Carousel from "./Carousel";
import Introduction from "./Introduction";
import Vision from "./Vision";
import AccordianFun from "./AccordianFun";
import Pathers from "./Patners";
import CardCollection from "./CardsCollection";
import Slogan from "./Slogan";
const pageData = {
  vision: {
    title: "Our Vision",
    des: "Our vision is a world where everyone possesses the skills, knowledge, and access needed to thrive in the digital age. We envision connected and informed communities equipped to tackle challenges using modern tools. By promoting inclusivity and equitable access, we aim to inspire active engagement with technology, fostering creativity and innovation. Our vision goes beyond technological proficiency, emphasizing the holistic development of individuals and communities for meaningful contributions in our dynamic era.",
  },
  challange: {
    title: "Join Us in Empowering Change",
    des: "Join the movement to empower change through digital literacy. Our investment in underdeveloped countries is a commitment to building a brighter future, one click at a time. Be a catalyst for progress, bridging the technological gap and fostering global participation to create a more equitable and prosperous world. Your involvement is key to shaping a limitless future through empowerment. Join us on this transformative journey.",
  },
};

const Home = () => {
  return (
    <div className="max-w-[1550px] m-auto">
      <Carousel />
      <Slogan />
      <Introduction />
      <Vision data={pageData.vision} />
      <AccordianFun />
      <hr />
      <Vision data={pageData.challange} />
      {/* <Pathers /> */}
      {/* <CardCollection /> */}
    </div>
  );
};

export default Home;
