"use client";
import { Button, Divider, Input, Textarea } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";
import { AiTwotonePhone, AiFillFacebook } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import {
  FaInstagramSquare,
  FaPinterestSquare,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";
import { postContacts } from "@/redux/slices/messageSlice";
import { useDispatch } from "react-redux";
import { Toaster, toast } from "sonner";
import Breadcrumb from "../../common/Components/Breadcrumb";

const Page = () => {
  const dispatch = useDispatch();
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    title: "",
    msg: "",
  });
  const handelContactData = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };
  const handelpost = async (data) => {
    try {
      const response = await dispatch(postContacts(data));
      if (response.payload.success) {
        toast.success("Thank you for contacting us");
      } else if (response.payload.error) {
        toast.warning(response.payload.error);
      } else {
        toast.error("Some error accuired");
      }
    } catch (error) {
      toast.error("Some error accuired");
    }
  };

  const [errMsg, setErrMsg] = useState({
    name: "",
    email: "",
    title: "",
    msg: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newValidationErrors = {
      name: "",
      email: "",
      title: "",
      msg: "",
    };

    if (!contactData.name.trim()) {
      newValidationErrors.name = "Please enter your name";
      isValid = false;
    }

    if (!contactData.email.trim() || !isValidEmail(contactData.email)) {
      newValidationErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!contactData.title.trim()) {
      newValidationErrors.title = "Please enter message title";
      isValid = false;
    }

    if (!contactData.msg.trim()) {
      newValidationErrors.msg = "Please enter message description";
      isValid = false;
    }

    setErrMsg(newValidationErrors);

    return isValid;
  };

  const isValidEmail = (email) => {
    // Basic email validation regex, you can use a library for more robust validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    handelpost(contactData);
    setContactData({ name: "", email: "", title: "", msg: "" });
  };
  return (
    <div className="md:w-[90%] w-[96%] mx-auto my-10">
      <Breadcrumb
        category={"Home"}
        subcategory={"Contact"}
        showSearch={false}
      />
      <div className="min-h-[70vh] flex flex-col md:grid gap-x-3 grid-cols-11 py-10 px-2 max-w-[1500px] mx-auto">
        <div className="col-span-5 hidden font-mono md:block">
          <h1 className="mb-10 text-3xl tracking-wide font-semibold">
            Digital Empowerment Society
          </h1>
          <h3 className="uppercase font-semibold text-slate-700 tracking-wide text-lg mb-2">
            Location:
          </h3>
          <div className="flex flex-col space-y-3 ml-7 !mt-4 mb-5">
            <p className=" flex  text-base font-semibold text-slate-600 items-center">
              <MdEmail className="text-primary mr-3" />
              info@des.org.np
            </p>
            <p className="mb-0 flex text-base font-semibold text-slate-600 items-center">
              <AiTwotonePhone className="text-primary mr-3" />
              +977-9767485800
            </p>
            <Link
              href="https://www.google.com/maps/place/Suvalaav+Jewellers/@27.7410232,85.3101737,49m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39eb1924434e767b:0x50b0d5a9db419ade!2sSuvalaav+Jewellers!8m2!3d27.7410876!4d85.310239!16s%2Fg%2F11tss8cwyc!3m5!1s0x39eb1924434e767b:0x50b0d5a9db419ade!8m2!3d27.7410876!4d85.310239!16s%2Fg%2F11tss8cwyc?entry=ttu"
              className={`tracking-wide flex text-base font-semibold text-slate-600 items-center`}
            >
              <ImLocation className="text-primary mr-3" />
              kupandol-10 Lalitpur, Nepal
            </Link>
          </div>
          <h3 className="uppercase mt-5 font-semibold text-slate-700 tracking-wide text-lg mb-2">
            Follow Us:
          </h3>
          <div className=" flex gap-4 mt-4 ml-7">
            <Link
              href={"https://www.facebook.com/profile.php?id=61554100722430"}
              target="blank"
            >
              <AiFillFacebook className="text-2xl text-blue-900 scale-110 hover:text-slate-900 cursor-pointer" />
            </Link>

            <Link
              href={"https://www.instagram.com/desnepal2080/"}
              target="blank"
            >
              <FaInstagramSquare className="text-2xl text-blue-900 scale-110 hover:text-slate-900 cursor-pointer" />
            </Link>
            <Link href={"https://www.youtube.com/@DESNepal."} target="blank">
              <FaYoutubeSquare className="text-2xl text-blue-900 scale-110 hover:text-slate-900 cursor-pointer" />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/des-nepal-undefined-3a73642a5/"
              }
              target="blank"
            >
              <FaLinkedin className="text-2xl text-blue-900 scale-110 hover:text-slate-900 cursor-pointer" />
            </Link>
          </div>
        </div>
        <Divider orientation="vertical" />
        <div className="col-span-6">
          <h3 className="uppercase font-mono font-semibold text-slate-700 tracking-wide text-lg mb-2">
            Contact From:
          </h3>
          <form
            onSubmit={handelSubmit}
            method="post"
            className="flex !font-mono flex-col px-2 gap-3 "
          >
            <Input
              variant="underlined"
              type="text"
              name="name"
              value={contactData.name}
              onChange={handelContactData}
              placeholder="Enter your name"
              errorMessage={errMsg.name ? errMsg.name : ""}
            />
            <Input
              variant="underlined"
              type="email"
              name="email"
              value={contactData.email}
              onChange={handelContactData}
              placeholder="Enter your email"
              errorMessage={errMsg.email ? errMsg.email : ""}
            />
            <Input
              variant="underlined"
              type="text"
              name="title"
              value={contactData.title}
              onChange={handelContactData}
              placeholder="Enter message title"
              errorMessage={errMsg.title ? errMsg.title : ""}
            />
            <Textarea
              variant="underlined"
              type="text"
              name="msg"
              value={contactData.msg}
              onChange={handelContactData}
              placeholder="Enter message description"
              height={300}
              errorMessage={errMsg.msg ? errMsg.msg : ""}
            />
            <Button
              radius="none"
              type="submit"
              className="w-[150px]"
              color="primary"
            >
              Submit
            </Button>
          </form>
          <div className="col-span-5 block md:hidden mt-7">
            <h3 className="uppercase font-semibold text-slate-700 tracking-wide text-base mb-2">
              Location:
            </h3>
            <div className="flex flex-col space-y-3 ml-7 !mt-4 mb-5">
              <p className=" flex  text-base font-semibold text-slate-600 items-center">
                <MdEmail className="text-primary mr-3" />
                desnepal@gmail.com
              </p>
              <p className="mb-0 flex text-base font-semibold text-slate-600 items-center">
                <AiTwotonePhone className="text-primary mr-3" />
                +977-9767485800
              </p>
              <Link
                href="https://www.google.com/maps/place/Suvalaav+Jewellers/@27.7410232,85.3101737,49m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39eb1924434e767b:0x50b0d5a9db419ade!2sSuvalaav+Jewellers!8m2!3d27.7410876!4d85.310239!16s%2Fg%2F11tss8cwyc!3m5!1s0x39eb1924434e767b:0x50b0d5a9db419ade!8m2!3d27.7410876!4d85.310239!16s%2Fg%2F11tss8cwyc?entry=ttu"
                className={`tracking-wide flex text-base font-semibold text-slate-600 items-center`}
              >
                <ImLocation className="text-primary mr-3" />
                kupandol-10 Lalitpur, Nepal
              </Link>
            </div>
            <h3 className="uppercase mt-5 font-semibold text-slate-700 tracking-wide text-base mb-2">
              Follow Us:
            </h3>
            <div className=" flex gap-4 mt-4 ml-7">
              <AiFillFacebook className="text-2xl text-blue-900 scale-110 hover:text-slate-900 cursor-pointer" />
              <FaInstagramSquare className="text-2xl text-blue-900 scale-110 hover:text-slate-900 cursor-pointer" />
              <FaPinterestSquare className="text-2xl text-blue-900 scale-110 hover:text-slate-900 cursor-pointer" />
              <FaLinkedin className="text-2xl text-blue-900 scale-110 hover:text-slate-900 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="col-span-12 mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28256.547177897402!2d85.311488!3d27.7151744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1697715183780!5m2!1sen!2snp"
            className="w-full border-none h-full min-h-[400px] mt-10"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Toaster richColors position="top-right" closeButton />
    </div>
  );
};

export default Page;
