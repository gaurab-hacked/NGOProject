import { Card } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { IoEye } from "react-icons/io5";
import image1 from "@/public/Pictureee.jpg";
import Image from "next/image";

const data = [
  {
    _id: 1,
    title:
      "ह्वावे नेपाल र डिजिटल इम्पावरमेन्ट सोसाइटीले जाजरकोटका भूकम्प प्रभावितलाई सहयोग सामाग्री उपलब्ध गराउने",
    des: "काठमाडौं । ह्वावे नेपालले डिजिटल इम्पावरमेन्ट सोसाइटीमार्फत जाजरकोटका भूकम्प प्रभावित बासिन्दाहरुलाई विभिन्न राहत सामाग्रीहरु उपलब्ध गराएको छ। ह्वावे टेक्नोलोजीज नेपाल कम्पनी प्रालिले आज एक कार्यक्रमका बिच सञ्चार तथा सूचना प्रविधि मन्त्री रेखा शर्माको उपस्थितीमा भूकम्प प्रभावितहरुसम्म पुर्याउनका लागि ती सामाग्रीहरु हस्तान्तरण गरेको छ। कम्पनीले जाजरकोटमा गएको भूकम्प र त्यसले पारेको असर प्रति दुख व्यक्त गर्दै संस्थागत सामाजिक उत्तरदायित्वअन्तरगत एक हजार थान ब्ल्यांकेट, १०० थान स्लिपिङ्ग ब्याग र १० थान टेन्ट उपलब्ध गराएको छ। ह्वावे नेपालले यसअघि २०७२ सालमा गएको भूकम्पमा समेत सहयोग उपलब्ध गराएको थियो भने  कोभिड १९ को समयमा आवश्यक औषधिसमेत दिएको थियो। जाजरकोटमा गएको भूकम्पले असर पारेका क्षेत्रहरुमा हाल २४ सै घण्टा दूरसञ्चार सेवा उपलब्ध गराउनका लागि मर्मतको काम गरिरहेको भन्दै १०० थान स्लिपिङ्ग ब्याग, १० थान फोल्डेबल टेन्ट तथा १ हजार थान ब्ल्यांकेटले केहि राहत प्रदान गर्ने जनाएको छ। यी सम्पूर्ण सहयोग सामाग्रीहरु मन्त्रालयलाई उपलब्ध गराईएको छ र मन्त्रालयले तत्काल जाजरकोटका भूकम्प प्रभावितहरुसम्म पुर्याउने कार्य गर्ने डिजिटल इम्पावरमेन्ट सोसाइटीका अध्यक्ष राजेन्द्र अर्यालले जानकारी दिएका छन्। ती सबै सामाग्रीहरु केहि दिनभित्रै सञ्चार मन्त्री र ह्वावे नेपालका सीईओको उपस्थितिमा प्रभावितहरुलाई हस्तान्तरण गरिने बताईएको छ। ह्वावेले आगामी दिनमा पनि प्रभावितहरुलाई आवश्यक सहयोग गर्न डिजिटल इम्पावरमेन्ट सोसाइटीसँग सहकार्य गरिने जनाएको छ।",
    image: image1,
    date: "13-08-2080",
  },
];

const Events = () => {
  return (
    <Card className="absolute max-h-[570px] min-h-[200px] -top-[250px] lg:block hidden  rounded overflow-hidden bg-blue-50 right-12 w-[360px] z-[1] ">
      <div>
        <h3 className="bg-[#08bee3bc] capitalize tracking-wider shadow-md p-2 py-3 text-xl font-semibold">
          News & Events
        </h3>
        <div className="flex gap-2 mt-4 flex-col m-2">
          {data.slice(0, 5).map((e) => {
            return (
              <Link
                href={`/news-and-events/item-${e._id}`}
                className="h-[100px] flex gap-2 overflow-hidden p-2 shadow bg-white"
              >
                <Image
                  src={e.image}
                  height={100}
                  width={100}
                  className="object-cover h-[85px] rounded-sm w-[80px]"
                  alt="news-and-events"
                />
                <div>
                  <h5 className="text-base font-semibold">
                    {e.title.length > 30
                      ? e.title.slice(0, 30) + "..."
                      : e.title}
                  </h5>
                  <p className="text-sm text-slate-600">
                    {e.des.length > 100 ? e.des.slice(0, 100) + "..." : e.des}
                  </p>
                </div>
              </Link>
            );
          })}

          {data.length > 5 && (
            <div>
              <hr />
              <div className="flex items-center justify-center ">
                <Link
                  className="text-xs flex items-center text-slate-600 hover:text-slate-900 justify-center gap-1 text-center font-semibold tracking-wide"
                  href={"/"}
                >
                  View More
                  <IoEye className="text-lg mt-[1px]" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default Events;
