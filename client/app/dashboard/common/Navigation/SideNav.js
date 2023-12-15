"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { FaUsers } from "react-icons/fa";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { MdCategory } from "react-icons/md";
import { GiKnightBanner } from "react-icons/gi";
import { DiSublime } from "react-icons/di";
import { AiFillProject } from "react-icons/ai";
import { HiMiniUserCircle } from "react-icons/hi2";
import { FaNewspaper } from "react-icons/fa6";
import { BsPostcardFill } from "react-icons/bs";
import { IoIosImages } from "react-icons/io";
import { IoImageSharp } from "react-icons/io5";

import "./css/SideNav.css";
const SideNav = (props) => {
  const { hamClick } = props;
  const loc = usePathname();

  return (
    <div
      className={`h-screen z-50 duration-100 fixed top-[55px] shadow black:shadow-slate-600 ${
        !hamClick ? "left-0 w-[180px]" : "-left-[0px] w-[50px]"
      }`}
    >
      <div className="w-full h-full sidebar black:!bg-[#121212] !z-50 !bg-white">
        <div className="center">
          <ul
            className={`!mb-2  ${
              hamClick ? "!pt-5 flex gap-2 flex-col" : "!pt-0"
            }`}
          >
            <p
              className={`${hamClick ? "hidden" : "block"} title tracking-wide`}
            >
              MAIN
            </p>
            <Link href="/dashboard" style={{ textDecoration: "none" }}>
              <li
                className={
                  loc === "/dashboard"
                    ? `black:!bg-[#363636]  !bg-[#dcd4ff]`
                    : ""
                }
              >
                <DashboardIcon className="icon" />
                <span className={`${hamClick ? "hidden" : "block"}`}>
                  Dashboard
                </span>
              </li>
            </Link>
            <p
              className={`${hamClick ? "hidden" : "block"} title tracking-wide`}
            >
              USEFUL
            </p>
            <Link href="/dashboard/message" style={{ textDecoration: "none" }}>
              <li
                className={
                  loc.includes("/dashboard/message")
                    ? `black:!bg-[#363636]  !bg-[#dcd4ff]`
                    : ""
                }
              >
                <BiSolidMessageSquareDetail className="icon" />
                <span className={`${hamClick ? "hidden" : "block"}`}>
                  Message
                </span>
              </li>
            </Link>
            <p
              className={`${hamClick ? "hidden" : "block"} title tracking-wide`}
            >
              LISTS
            </p>

            <Link href="/dashboard/category" style={{ textDecoration: "none" }}>
              <li
                className={
                  loc.includes("/dashboard/category")
                    ? `black:!bg-[#363636]  !bg-[#dcd4ff]`
                    : ""
                }
              >
                <MdCategory className="icon" />
                <span className={`${hamClick ? "hidden" : "block"}`}>
                  Category
                </span>
              </li>
            </Link>
            <Link
              href="/dashboard/subcategory"
              style={{ textDecoration: "none" }}
            >
              <li
                className={
                  loc.includes("/dashboard/subcategory")
                    ? `black:!bg-[#363636]  !bg-[#dcd4ff]`
                    : ""
                }
              >
                <DiSublime className="icon !scale-125" />
                <span className={`${hamClick ? "hidden" : "block"}`}>
                  Subcategory
                </span>
              </li>
            </Link>
            <Link href="/dashboard/banner" style={{ textDecoration: "none" }}>
              <li
                className={
                  loc.includes("/dashboard/banner")
                    ? `black:!bg-[#363636]  !bg-[#dcd4ff]`
                    : ""
                }
              >
                <GiKnightBanner className="icon !scale-125" />
                <span className={`${hamClick ? "hidden" : "block"}`}>
                  Banner
                </span>
              </li>
            </Link>
            <Link href="/dashboard/projects" style={{ textDecoration: "none" }}>
              <li
                className={
                  loc.includes("/dashboard/projects")
                    ? `black:!bg-[#363636]  !bg-[#dcd4ff]`
                    : ""
                }
              >
                <AiFillProject className="icon" />
                <span className={`${hamClick ? "hidden" : "block"}`}>
                  Projects
                </span>
              </li>
            </Link>
            <Link
              href="/dashboard/news-and-events"
              style={{ textDecoration: "none" }}
            >
              <li
                className={
                  loc.includes("/dashboard/news-and-events")
                    ? `black:!bg-[#363636]  !bg-[#dcd4ff]`
                    : ""
                }
              >
                <FaNewspaper className="icon !scale-90" />
                <span className={`${hamClick ? "hidden" : "block"}`}>
                  News & Events
                </span>
              </li>
            </Link>
            <Link href="/dashboard/blogs" style={{ textDecoration: "none" }}>
              <li
                className={
                  loc.includes("/dashboard/blogs")
                    ? `black:!bg-[#363636]  !bg-[#dcd4ff]`
                    : ""
                }
              >
                <BsPostcardFill className="icon !scale-90" />
                <span className={`${hamClick ? "hidden" : "block"}`}>
                  Blogs
                </span>
              </li>
            </Link>
            <p
              className={`${hamClick ? "hidden" : "block"} title tracking-wide`}
            >
              Gallery
            </p>
            <Link href="/dashboard/albums" style={{ textDecoration: "none" }}>
              <li
                className={
                  loc.includes("/dashboard/albums")
                    ? `black:!bg-[#363636]  !bg-[#dcd4ff]`
                    : ""
                }
              >
                <IoIosImages className="icon" />
                <span className={`${hamClick ? "hidden" : "block"}`}>
                  Albums
                </span>
              </li>
            </Link>
            <Link href="/dashboard/images" style={{ textDecoration: "none" }}>
              <li
                className={
                  loc.includes("/dashboard/images")
                    ? `black:!bg-[#363636]  !bg-[#dcd4ff]`
                    : ""
                }
              >
                <IoImageSharp className="icon" />
                <span className={`${hamClick ? "hidden" : "block"}`}>
                  Images
                </span>
              </li>
            </Link>
            <p
              className={`${hamClick ? "hidden" : "block"} title tracking-wide`}
            >
              USER
            </p>
            <Link href="/dashboard/users" style={{ textDecoration: "none" }}>
              <li
                className={
                  loc.includes("/dashboard/users")
                    ? `black:!bg-[#363636]  !bg-[#dcd4ff]`
                    : ""
                }
              >
                <FaUsers className="icon" />
                <span className={`${hamClick ? "hidden" : "block"}`}>
                  Users
                </span>
              </li>
            </Link>
            <Link href="/dashboard/profile" style={{ textDecoration: "none" }}>
              <li
                className={
                  loc.includes("/dashboard/profile")
                    ? `black:!bg-[#363636]  !bg-[#dcd4ff]`
                    : ""
                }
              >
                <HiMiniUserCircle className="icon !scale-110" />
                <span className={`${hamClick ? "hidden" : "block"}`}>
                  Profile
                </span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
