"use client";
import React, { useEffect, useRef, useState } from "react";
import SideNav from "./SideNav";
import { usePathname, useRouter } from "next/navigation";
import TopNavContent from "./TopNavContent";
import { useDispatch, useSelector } from "react-redux";
import { getUnreadMsg } from "@/redux/slices/messageSlice";

const TopNav = (props) => {
  const pathname = usePathname();
  const isDashboard = pathname.includes("dashboard");
  const { hamClick, setHamClick } = props;
  const dispatch = useDispatch();
  const router = useRouter();
  const { unreadMsg } = useSelector((state) => state.messageReducer);
  const userRef = useRef(false);
  useEffect(() => {
    if (userRef.current === false) {
      dispatch(getUnreadMsg());
    }
    return () => {
      userRef.current = true;
    };
  }, []);

  // !==========================================

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
    if (!isLogin) {
      router.push("/");
    }
  }, [isLogin, userData]);

  // !==========================================

  return isDashboard ? (
    <nav className="w-full overflow-auto h-[55px] ">
      <div className="w-full h-[55px] flex shadow  bg-white z-50 fixed top-0 left-0 right-0">
        <TopNavContent
          loginData={isLogin}
          setHamClick={setHamClick}
          hamClick={hamClick}
          unreadMsg={unreadMsg}
        />
      </div>
      <SideNav hamClick={hamClick} />
    </nav>
  ) : null;
};

export default TopNav;
