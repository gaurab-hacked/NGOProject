"use client";
import React, { useState } from "react";
import { Input, Link, Button, Card, CardBody } from "@nextui-org/react";
import { EyeFilledIcon } from "../login/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../login/EyeSlashFilledIcon";
import { MailIcon } from "../login/MailIcon";
import { useDispatch } from "react-redux";
import { registerUser } from "@/redux/slices/authSlice";
import { IoMdImage } from "react-icons/io";
import { BiSolidUserRectangle } from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function register() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [formRegisterData, setFormRegisterData] = useState({
    email: "",
    password: "",
    name: "",
    image: "",
  });

  const formInputFieldChange = (e) => {
    if (e.target.name === "image") {
      setFormRegisterData({ ...formRegisterData, image: e.target.files[0] });
    } else {
      setFormRegisterData({
        ...formRegisterData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handelLogin = async (data) => {
    try {
      const response = await dispatch(registerUser(data));
      if (response.payload.token) {
        router.push("/");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    handelLogin(formRegisterData);
  };

  return (
    <div className="flex flex-col w-full min-h-[75vh]  justify-center items-center">
      <Card
        radius="none"
        className="rounded-sm max-w-full w-[340px] overflow-visible h-full relative"
      >
        <CardBody className="overflow-hidden">
          <h4 className="uppercase text-slate-600  mb-2 font-semibold tracking-wide text-base">
            Register:
          </h4>
          <form className="flex flex-col gap-4 h-[370px]" onSubmit={formSubmit}>
            <Input
              radius="sm"
              isRequired
              label="Name"
              placeholder="Enter your name"
              type="name"
              name="name"
              value={formRegisterData.name}
              onChange={formInputFieldChange}
              endContent={
                <BiSolidUserRectangle className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
            <Input
              radius="sm"
              isRequired
              label="Email"
              name="email"
              value={formRegisterData.email}
              onChange={formInputFieldChange}
              placeholder="Enter your email"
              type="email"
              endContent={
                <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
            <Input
              label="Password"
              isRequired
              radius="sm"
              name="password"
              value={formRegisterData.password}
              onChange={formInputFieldChange}
              placeholder="Enter your password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className="max-w-xs"
            />
            <div className="fileInput">
              <Input
                radius="sm"
                label="Profile Picture"
                placeholder="Enter your profile picture"
                name="image"
                onChange={formInputFieldChange}
                type="file"
                endContent={
                  <IoMdImage className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
              />
            </div>
            <p className="text-start text-small">
              Already have an account?{" "}
              <Link size="sm" href="/login" className="cursor-pointer"></Link>
              <span
                className="cursor-pointer text-sm text-blue-700"
                onClick={() => router.push("/login")}
              >
                Sign in
              </span>
            </p>
            <div className="flex gap-2 justify-end">
              <Button
                fullWidth
                color="primary"
                radius="none"
                className="rounded-sm"
                type="submit"
              >
                Sign up
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
