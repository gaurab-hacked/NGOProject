"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { AiFillFacebook } from "react-icons/ai";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaPinterestSquare,
} from "react-icons/fa";
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
      <div className={`mt-0 pt-3 bg-blue-50`}>
        <div className="container mx-auto px-5 pt-5 mb-2">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className={`col-span-4 lg:col-span-4 mb-2 pr-3 lg:pr-5`}>
              <h5 className="text-slate-900 font-semibold text-uppercase mb-1">
                Get In Touch
              </h5>
              <p className="mb-1 text-sm font-semibold text-slate-600 w-[80%]">
                Have questions or feedback? We're here to help! Contact us using
                the info below or our contact form. We'll respond promptly.
              </p>
              <div>
                <h6 className="text-slate-900 font-semibold text-uppercase mt-2 mb-3">
                  Follow Us:
                </h6>
                <div className="flex space-x-3 -mt-2 ml-1">
                  <AiFillFacebook className="text-xl text-primary cursor-pointer" />
                  <FaInstagramSquare className="text-xl text-primary cursor-pointer" />
                  <FaPinterestSquare className="text-xl text-primary cursor-pointer" />
                  <FaLinkedin className="text-xl text-primary cursor-pointer" />
                </div>
              </div>
            </div>
            <div className={`col-span-4 lg:col-span-8`}>
              <div className="lg:grid lg:grid-cols-3">
                <div className="mb-5">
                  <h5 className="text-slate-900 font-semibold text-uppercase mb-1">
                    Explore
                  </h5>
                  <div className="flex flex-col">
                    <Link
                      href="#"
                      className={`flex w-[160px] text-sm font-semibold text-slate-600 items-center`}
                    >
                      <ArrowForwardIosIcon className="!text-xs mr-1" />
                      Our Initiatives
                    </Link>
                    <Link
                      href="#"
                      className={`flex  w-[160px] text-sm font-semibold text-slate-600 items-center`}
                    >
                      <ArrowForwardIosIcon className="!text-xs  mr-1" />
                      Digital Programs
                    </Link>
                    <Link
                      href="#"
                      className={` flex w-[160px] text-sm font-semibold text-slate-600 items-center`}
                    >
                      <ArrowForwardIosIcon className="!text-xs mr-1" />
                      Projects
                    </Link>
                  </div>
                </div>
                <div className="mb-5">
                  <h5 className="text-slate-900 font-semibold text-uppercase mb-1">
                    Connect
                  </h5>
                  <div className="flex flex-col">
                    <Link
                      href="#"
                      className={`flex w-[160px] text-sm font-semibold text-slate-600 items-center`}
                    >
                      <ArrowForwardIosIcon className="!text-xs mr-1" />
                      Contact Us
                    </Link>
                    <Link
                      href="#"
                      className={` flex w-[200px] text-sm font-semibold text-slate-600 items-center`}
                    >
                      <ArrowForwardIosIcon className="!text-xs mr-1" />
                      Community Engagement
                    </Link>
                    <Link
                      href="#"
                      className={` flex w-[160px] text-sm font-semibold text-slate-600 items-center`}
                    >
                      <ArrowForwardIosIcon className="!text-xs mr-1" />
                      Get Involved
                    </Link>
                  </div>
                </div>
                <div>
                  <h5 className="text-slate-900 font-semibold text-uppercase">
                    Contact Us:
                  </h5>
                  <div className="flex flex-col space-y-1 ml-1 mt-1">
                    <p className=" flex  text-sm font-semibold text-slate-600 items-center">
                      <MdEmail className="text-primary mr-3" />
                      desnepal@gmail.com
                    </p>
                    <p className="mb-0 flex text-sm font-semibold text-slate-600 items-center">
                      <AiTwotonePhone className="text-primary mr-3" />
                      +977-9767485800
                    </p>
                    <Link
                      href="https://www.google.com/maps/place/Suvalaav+Jewellers/@27.7410232,85.3101737,49m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39eb1924434e767b:0x50b0d5a9db419ade!2sSuvalaav+Jewellers!8m2!3d27.7410876!4d85.310239!16s%2Fg%2F11tss8cwyc!3m5!1s0x39eb1924434e767b:0x50b0d5a9db419ade!8m2!3d27.7410876!4d85.310239!16s%2Fg%2F11tss8cwyc?entry=ttu"
                      className={`tracking-wide flex text-sm font-semibold text-slate-600 items-center`}
                    >
                      <ImLocation className="text-primary mr-3" />
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
          <p className="pt-2 pb-4 text-center font-semibold text-sm text-slate-700 tracking-wide">
            Copyright © {date.getFullYear()} Digital Empowerment Society. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  ) : null;
};

export default Footer;
