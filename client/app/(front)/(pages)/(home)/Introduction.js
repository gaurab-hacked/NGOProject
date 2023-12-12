import React from "react";
import Events from "./Events";

const Introduction = () => {
  return (
    <div className="relative w-full h-full">
      <div className="min-h-[50vh] w-[80%] my-10 p-10 ">
        <div className="w-[65%] m-auto p-5 pb-8 shadow rounded-md">
          <h2 className="text-center font-semibold text-2xl my-5 mt-3 underline">
            Welcome to the Digital Empowerment Society!
          </h2>
          <p className="text-justify text-slate-600">
            Nepal, no doubt, has been seen phenomenal growth in the Information
            and Communication Technology (ICT) sector. There is only a
            significant upsurge in the adoption of ICT-related tools (like
            mobile sets, computers, laptops, tablets, etc.,) but also a huge
            augmentation in the internet connectivity. Nevertheless, disparities
            continue to exist between different groups across the country in the
            digital domain. For instance, the number of women using the internet
            is lower than that of men. Likewise, the rural communities are far
            behind compared to the urban ones in terms of possessing ICT-related
            tools/devices.
          </p>
          <p className="text-justify text-slate-600">
            There is a palpable need to bridge this digital divide by promoting
            digital literacy among underserved communities. In this light,
            Digital Empowerment Society (DES) as a non-governmental organization
            (NGO) was founded in 2023 to help fulfill the very need. It is
            committed to leveraging information and communication technologies
            to enable people to gain access to better healthcare, education,
            skills, and livelihood opportunities. For us, digital literacy is
            not just a skill but a gateway to empowerment. We also firmly
            believe that every Nepali should enjoy his/her digital rights for
            his/her greater socio-economic well-being.
          </p>
          <p className="text-justify text-slate-600">
            Our efforts are directed at providing comprehensive digital
            education programs that enable individuals to navigate the
            complexities of the digital landscape.
          </p>
        </div>
      </div>
      <Events />
    </div>
  );
};

export default Introduction;
