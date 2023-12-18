"use client";
import React, { useEffect, useState } from "react";
import { Input, Link, Button, Card, CardBody } from "@nextui-org/react";
import { EyeFilledIcon } from "../login/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../login/EyeSlashFilledIcon";
import { MailIcon } from "../login/MailIcon";
import { IoMdImage } from "react-icons/io";
import { BiSolidUserRectangle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";

export default function Register() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isVisible, setIsVisible] = React.useState(false);
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    name: "",
    image: "",
  });

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [formRegisterData, setFormRegisterData] = useState({
    email: "",
    password: "",
    name: "",
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
      if (response.payload?.token) {
        router.push("/");
        toast.success("Thank you for registering");
        setFormRegisterData({
          email: "",
          password: "",
          name: "",
        });
      } else if (
        response.error.message === "Request failed with status code 400"
      ) {
        toast.warning("User already registered");
      } else if (response.payload?.error) {
        toast.warning(response.payload.error);
      } else {
        toast.error("Some error occurred");
      }
    } catch (error) {
      toast.error("Some error occurred during registration");
    }
  };

  const validateForm = () => {
    let isValid = true;
    let errors = { email: "", password: "", name: "", image: "" };

    // Validate email
    if (!formRegisterData.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!isValidEmail(formRegisterData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Validate password
    if (!formRegisterData.password) {
      errors.password = "Password is required";
      isValid = false;
    } else if (formRegisterData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    // Validate name
    if (!formRegisterData.name) {
      errors.name = "Name is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const formSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    handelLogin(formRegisterData);
  };

  return (
    <div className="flex flex-col w-full min-h-[75vh] !py-10  justify-center items-center">
      <Card
        radius="none"
        className="rounded-sm max-w-full !py-5 !px-5 w-[400px] overflow-visible h-full relative"
      >
        <CardBody className="overflow-hidden">
          <h4 className="uppercase text-slate-600  mb-2 font-semibold tracking-wide text-base">
            Register:
          </h4>
          <form
            className="flex flex-col gap-4 min-h-[370px]"
            onSubmit={formSubmit}
          >
            <Input
              radius="sm"
              label="Name"
              placeholder="Enter your name"
              type="name"
              name="name"
              value={formRegisterData.name}
              onChange={formInputFieldChange}
              errorMessage={formErrors.name}
              endContent={
                <BiSolidUserRectangle className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
            <Input
              radius="sm"
              label="Email"
              name="email"
              value={formRegisterData.email}
              onChange={formInputFieldChange}
              placeholder="Enter your email"
              type="text"
              errorMessage={formErrors.email}
              endContent={
                <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
            <Input
              label="Password"
              radius="sm"
              name="password"
              value={formRegisterData.password}
              onChange={formInputFieldChange}
              placeholder="Enter your password"
              errorMessage={formErrors.password}
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
              className="w-full"
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
      <Toaster richColors position="top-right" closeButton />
    </div>
  );
}
