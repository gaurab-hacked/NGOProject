"use client";
import React from "react";
import EachEventCards from "./EachEventCards";
import image1 from "@/public/Pictureee.jpg";

const newsAndEventsData = [
  {
    _id: 1,
    title:
      "ह्वावे नेपाल र डिजिटल इम्पावरमेन्ट सोसाइटीले जाजरकोटका भूकम्प प्रभावितलाई सहयोग सामाग्री उपलब्ध गराउने",
    des: "काठमाडौं । ह्वावे नेपालले डिजिटल इम्पावरमेन्ट सोसाइटीमार्फत जाजरकोटका भूकम्प प्रभावित बासिन्दाहरुलाई विभिन्न राहत सामाग्रीहरु उपलब्ध गराएको छ। ह्वावे टेक्नोलोजीज नेपाल कम्पनी प्रालिले आज एक कार्यक्रमका बिच सञ्चार तथा सूचना प्रविधि मन्त्री रेखा शर्माको उपस्थितीमा भूकम्प प्रभावितहरुसम्म पुर्याउनका लागि ती सामाग्रीहरु हस्तान्तरण गरेको छ। कम्पनीले जाजरकोटमा गएको भूकम्प र त्यसले पारेको असर प्रति दुख व्यक्त गर्दै संस्थागत सामाजिक उत्तरदायित्वअन्तरगत एक हजार थान ब्ल्यांकेट, १०० थान स्लिपिङ्ग ब्याग र १० थान टेन्ट उपलब्ध गराएको छ। ह्वावे नेपालले यसअघि २०७२ सालमा गएको भूकम्पमा समेत सहयोग उपलब्ध गराएको थियो भने  कोभिड १९ को समयमा आवश्यक औषधिसमेत दिएको थियो। जाजरकोटमा गएको भूकम्पले असर पारेका क्षेत्रहरुमा हाल २४ सै घण्टा दूरसञ्चार सेवा उपलब्ध गराउनका लागि मर्मतको काम गरिरहेको भन्दै १०० थान स्लिपिङ्ग ब्याग, १० थान फोल्डेबल टेन्ट तथा १ हजार थान ब्ल्यांकेटले केहि राहत प्रदान गर्ने जनाएको छ। यी सम्पूर्ण सहयोग सामाग्रीहरु मन्त्रालयलाई उपलब्ध गराईएको छ र मन्त्रालयले तत्काल जाजरकोटका भूकम्प प्रभावितहरुसम्म पुर्याउने कार्य गर्ने डिजिटल इम्पावरमेन्ट सोसाइटीका अध्यक्ष राजेन्द्र अर्यालले जानकारी दिएका छन्। ती सबै सामाग्रीहरु केहि दिनभित्रै सञ्चार मन्त्री र ह्वावे नेपालका सीईओको उपस्थितिमा प्रभावितहरुलाई हस्तान्तरण गरिने बताईएको छ। ह्वावेले आगामी दिनमा पनि प्रभावितहरुलाई आवश्यक सहयोग गर्न डिजिटल इम्पावरमेन्ट सोसाइटीसँग सहकार्य गरिने जनाएको छ।",
    image: image1,
    date: "13-08-2080",
  },
];

const Projects = () => {
  return (
    <>
      <div className="grid gap-4 gridcontainer">
        {newsAndEventsData.map((item, index) => (
          <EachEventCards key={item._id} data={item} />
        ))}
      </div>
    </>
  );
};

export default Projects;
