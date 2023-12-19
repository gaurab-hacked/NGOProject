"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Footer = () => {
  const pathname = usePathname();
  const isDashboard = pathname.includes("dashboard");
  const date = new Date();

  return !isDashboard ? (
    <footer className="shadow">
      <div className={`mt-0 pt-3 bg-[#2463C1]`}>
        <div className="container mx-auto px-5 pt-5 mb-2">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className={`col-span-4 lg:col-span-4 mb-2 pr-3 lg:pr-5`}>
              <h5 className="text-white font-semibold text-lg text-uppercase mb-1">
                Get In Touch
              </h5>
              <p className="mb-1 text-base font-semibold text-gray-200 w-[80%]">
                Have questions or feedback? We&apos;re here to help! Contact us
                using the info below or our contact form. Well respond promptly.
              </p>
              <div>
                <h6 className="text-white font-semibold text-lg text-uppercase mt-2 mb-3">
                  Follow Us:
                </h6>
                <div className="flex space-x-3 -mt-2 ml-1">
                  <Link
                    href={
                      "https://www.facebook.com/profile.php?id=61554100722430"
                    }
                    target="blank"
                  >
                    <AiFillFacebook className="text-2xl text-white cursor-pointer" />
                  </Link>

                  <Link
                    href={"https://www.instagram.com/desnepal2080/"}
                    target="blank"
                  >
                    <FaInstagramSquare className="text-2xl text-white cursor-pointer" />
                  </Link>
                  <Link
                    href={"https://www.youtube.com/@DESNepal."}
                    target="blank"
                  >
                    <FaYoutubeSquare className="text-2xl text-white cursor-pointer" />
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/des-nepal-undefined-3a73642a5/"
                    }
                    target="blank"
                  >
                    <FaLinkedin className="text-2xl text-white cursor-pointer" />
                  </Link>
                </div>
              </div>
            </div>
            <div className={`col-span-4 lg:col-span-8`}>
              <div className="lg:grid lg:grid-cols-3">
                <div className="mb-5">
                  <h5 className="text-white font-semibold text-lg text-uppercase mb-1">
                    Explore
                  </h5>
                  <div className="flex flex-col">
                    <Link
                      href="/our-mission"
                      className={`flex w-[160px] text-base font-semibold text-gray-200 items-center`}
                    >
                      <ArrowForwardIosIcon className="!text-xs mr-1" />
                      Our Initiatives
                    </Link>
                    <Link
                      href="/news-and-events"
                      className={`flex  w-[160px] text-base font-semibold text-gray-200 items-center`}
                    >
                      <ArrowForwardIosIcon className="!text-xs  mr-1" />
                      Digital Programs
                    </Link>
                    <Link
                      href="/projects"
                      className={` flex w-[160px] text-base font-semibold text-gray-200 items-center`}
                    >
                      <ArrowForwardIosIcon className="!text-xs mr-1" />
                      Projects
                    </Link>
                  </div>
                </div>
                <div className="mb-5">
                  <h5 className="text-white font-semibold text-lg text-uppercase mb-1">
                    Connect
                  </h5>
                  <div className="flex flex-col">
                    <Link
                      href="/contact"
                      className={`flex w-[160px] text-base font-semibold text-gray-200 items-center`}
                    >
                      <ArrowForwardIosIcon className="!text-xs mr-1" />
                      Contact Us
                    </Link>
                    <Link
                      href="/leadership"
                      className={` flex w-[200px] text-base font-semibold text-gray-200 items-center`}
                    >
                      <ArrowForwardIosIcon className="!text-xs mr-1" />
                      Leadership
                    </Link>
                    <Link
                      href="/news-and-events"
                      className={` flex w-[160px] text-base font-semibold text-gray-200 items-center`}
                    >
                      <ArrowForwardIosIcon className="!text-xs mr-1" />
                      News and Events
                    </Link>
                  </div>
                </div>
                <div>
                  <h5 className="text-white font-semibold text-lg text-uppercase">
                    Contact Us:
                  </h5>
                  <div className="flex flex-col space-y-1 ml-1 mt-1">
                    <p className=" flex  text-base font-semibold text-gray-200 items-center">
                      <MdEmail className="text-white mr-3" />
                      info@des.org.np
                    </p>
                    <p className="mb-0 flex text-base font-semibold text-gray-200 items-center">
                      <AiTwotonePhone className="text-white mr-3" />
                      +977-9767485800
                    </p>
                    <Link
                      href="https://www.google.com/maps/place/Suvalaav+Jewellers/@27.7410232,85.3101737,49m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39eb1924434e767b:0x50b0d5a9db419ade!2sSuvalaav+Jewellers!8m2!3d27.7410876!4d85.310239!16s%2Fg%2F11tss8cwyc!3m5!1s0x39eb1924434e767b:0x50b0d5a9db419ade!8m2!3d27.7410876!4d85.310239!16s%2Fg%2F11tss8cwyc?entry=ttu"
                      className={`tracking-wide flex text-base font-semibold text-gray-200 items-center`}
                    >
                      <ImLocation className="text-white mr-3" />
                      kupandol-10 Lalitpur, Nepal
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={`w-full flex justify-center items-center`}>
          <p className="pt-2 pb-4 text-center font-semibold text-base text-gray-200 tracking-wide">
            Copyright © {date.getFullYear()} Digital Empowerment Society. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  ) : null;
};

export default Footer;
