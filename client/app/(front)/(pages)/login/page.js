"use client";
import React, { useEffect, useState } from "react";
import { Input, Link, Button, Card, CardBody } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { MailIcon } from "./MailIcon";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";

export default function login() {
  const router = useRouter();
  const [isVisible, setIsVisible] = React.useState(false);
  const dispatch = useDispatch();
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });

  const handelLogin = async (data) => {
    try {
      const response = await dispatch(loginUser(data));
      if (response.payload.token) {
        router.push("/");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const formInputFieldChange = (e) => {
    setUserFormData({ ...userFormData, [e.target.name]: e.target.value });
  };

  const formsubmit = (e) => {
    e.preventDefault();
    handelLogin(userFormData);
  };

  const [isLogin, setIsLogin] = useState({ data: "", isLogged: false });
  const { userData, authToken, loading } = useSelector(
    (state) => state.authReducer
  );

  useEffect(() => {
    if (userData !== null && authToken !== null) {
      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("token", JSON.stringify(authToken));
    }
  }, [userData, authToken]);

  let dataLocalstorage = "";

  if (typeof window !== "undefined" && window.localStorage) {
    const userDataItem = window.localStorage.getItem("userData");
    if (userDataItem) {
      dataLocalstorage = userDataItem;
    }
  }

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setIsLogin({
        data: JSON.parse(storedUserData),
        isLogged: true,
      });
    }
  }, [dataLocalstorage, userData]);

  useEffect(() => {
    if (Number(isLogin.data.privilege) < 1) {
      router.push("/");
    }
  }, [isLogin, userData]);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="flex flex-col w-full min-h-[70vh]  justify-center items-center">
      <Card
        radius="none"
        className="rounded-sm bg-white max-w-full w-[340px] overflow-visible h-full relative"
      >
        <CardBody className="overflow-hidden">
          <h4 className="uppercase text-slate-600 mb-2 font-semibold tracking-wide text-base">
            Login:
          </h4>
          <form
            className="flex flex-col gap-4 py-5"
            method="post"
            onSubmit={formsubmit}
          >
            <Input
              isRequired
              radius="sm"
              label="Email"
              placeholder="Enter your email"
              type="email"
              name="email"
              value={userFormData.email}
              onChange={formInputFieldChange}
              endContent={
                <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
            <Input
              label="Password"
              radius="sm"
              placeholder="Enter your password"
              name="password"
              value={userFormData.password}
              onChange={formInputFieldChange}
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
            <p className="text-start text-small">
              Need to create an account?{" "}
              <span
                className="cursor-pointer text-sm text-blue-700"
                onClick={() => router.push("/register")}
              >
                Sign up
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
                Login
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
