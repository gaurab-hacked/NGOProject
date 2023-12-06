"use client";
import React, { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import UserProfile from "./common/UserProfile";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Link from "next/link";
import { SearchIcon } from "@/app/dashboard/common/components/Tables/Icons/SearchIcon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 3,
  },
}));
import TuneIcon from "@mui/icons-material/Tune";
import { Button } from "@nextui-org/react";
import BottomNavScroll from "./BottomNavScroll";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const TopNav = (props) => {
  const [isLogin, setIsLogin] = useState({ data: "", isLogged: false });
  const router = useRouter();
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

  const { scrollY } = props;
  return (
    <div
      className={` top-0 h-[50px] w-full max-w-[1550px] z-50 ${
        Math.ceil(scrollY) > 50 ? "fixed bg-blue-100" : "static bg-white"
      }`}
    >
      <div className="flex py-2  max-w-[1550px] mx-auto w-full h-[50px] justify-center items-center">
        <div className="w-1/4 flex items-center justify-around gap-5">
          <div className=" text-xl font-semibold  tracking-wide flex justify-center items-center">
            LOGO
          </div>
          {Math.ceil(scrollY) > 50 && (
            <div
              variant="ghost"
              radius="none"
              className="font-semibold parentGroup relative flex hover:!text-black cursor-pointer !text-slate-600 !flex-row justify-center items-center !rounded-sm"
            >
              <div className="mb-[2px]">Category</div>
              <KeyboardArrowDownIcon className=" mt-[2px]" />
              <div className="top-7 absolute hidden chieldGroup">
                <BottomNavScroll />
              </div>
            </div>
          )}
        </div>

        <div className="w-1/2 bg-slate-50 border relative flex items-center">
          <TuneIcon className="px-1 max-w-[50px] text-3xl" />
          <input
            type="text"
            className="w-full px-2 text-sm outline-none tracking-wide pr-8 py-1 bg-transparent"
            placeholder="Searching for..."
          />
          <SearchIcon className="absolute right-2" />
        </div>
        <div className="mx-auto">
          <div className="flex items-center justify-center">
            <div className=" mx-2">
              <IconButton
                aria-label="cart"
                className="outl
              ine-none"
              >
                <Link
                  href="/cart"
                  className="h-[15px] rounded-full w-[15px] flex justify-center items-center"
                >
                  <StyledBadge badgeContent="1" color="primary">
                    <ShoppingCartIcon className="!text-xl scale-110 !text-slate-600" />
                  </StyledBadge>
                </Link>
              </IconButton>
            </div>
            <div className=" w-1/4 mx-2">
              <IconButton aria-label="cart" className="outline-none">
                <StyledBadge badgeContent="1" color="primary">
                  <AiFillHeart className="text-2xl  cursor-pointer !text-slate-600" />
                </StyledBadge>
              </IconButton>
            </div>
            <div className=" mx-2 !ml-4">
              {isLogin.isLogged ? (
                <UserProfile data={isLogin.data} setIsLogin={setIsLogin} />
              ) : (
                <Button
                  variant="bordered"
                  size="sm"
                  radius="none"
                  color="secondary"
                  className="rounded-sm font-semibold tracking-wide"
                  onClick={() => router.push("/login")}
                >
                  Signup
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
