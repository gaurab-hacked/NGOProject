"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { IoMdCart } from "react-icons/io";
import StoreIcon from "@mui/icons-material/Store";
import { FaUsers } from "react-icons/fa";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { MdCategory } from "react-icons/md";
import { GiKnightBanner } from "react-icons/gi";
import { DiSublime } from "react-icons/di";
import { AiOutlineStock } from "react-icons/ai";
import BarChartIcon from "@mui/icons-material/BarChart";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { HiMiniUserCircle } from "react-icons/hi2";
import "./css/SideNav.css";
import NoCrashIcon from "@mui/icons-material/NoCrash";
const SideNav = (props) => {
  const { hamClick } = props;
  const loc = usePathname();

  return (
    <div
      className={`h-screen z-50 duration-100 fixed top-[55px] shadow dark:shadow-slate-600 ${
        !hamClick ? "left-0 w-[180px]" : "-left-[0px] w-[50px]"
      }`}
    >
      <div className="w-full h-full sidebar dark:!bg-[#121212] !z-50 !bg-white">
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
                    ? `dark:!bg-[#363636]  !bg-[#dcd4ff]`
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
                    ? `dark:!bg-[#363636]  !bg-[#dcd4ff]`
                    : ""
                }
              >
                <BiSolidMessageSquareDetail className="icon" />
                <span className={`${hamClick ? "hidden" : "block"}`}>
                  Message
                </span>
              </li>
            </Link>
            {/* <Link
              href="/dashboard/notification"
              style={{ textDecoration: "none" }}
            >
              <li
                className={
                  loc.includes("/dashboard/notification") ? `dark:!bg-[#363636]  !bg-[#dcd4ff]` : ""
                }
              >
                <NotificationsNoneIcon className="icon" />
                <span className={`${hamClick ? "hidden" : "block"}`}>
                  Notifications
                </span>
              </li>
            </Link> */}

            <Link href="/dashboard/orders" style={{ textDecoration: "none" }}>
              <li
                className={
                  loc.includes("/dashboard/orders")
                    ? `dark:!bg-[#363636]  !bg-[#dcd4ff]`
                    : ""
                }
              >
                <IoMdCart className="icon" />
                <span className={`${hamClick ? "hidden" : "block"}`}>
                  Orders
                </span>
              </li>
            </Link>
            <Link href="/dashboard/delivery" style={{ textDecoration: "none" }}>
              <li
                className={
                  loc.includes("/dashboard/delivery")
                    ? `dark:!bg-[#363636]  !bg-[#dcd4ff]`
                    : ""
                }
              >
                <LocalShippingIcon className="icon" />
                <span className={`${hamClick ? "hidden" : "block"}`}>
                  Delivery
                </span>
              </li>
            </Link>
            <Link href="/dashboard/finished" style={{ textDecoration: "none" }}>
              <li
                className={
                  loc.includes("/dashboard/finished")
                    ? `dark:!bg-[#363636]  !bg-[#dcd4ff]`
                    : ""
                }
              >
                <NoCrashIcon className="icon" />
                <span className={`${hamClick ? "hidden" : "block"}`}>
                  Finished
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
                    ? `dark:!bg-[#363636]  !bg-[#dcd4ff]`
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
                    ? `dark:!bg-[#363636]  !bg-[#dcd4ff]`
                    : ""
                }
              >
                <DiSublime className="icon" />
                <span className={`${hamClick ? "hidden" : "block"}`}>
                  Subcategory
                </span>
              </li>
            </Link>
            <Link href="/dashboard/banner" style={{ textDecoration: "none" }}>
              <li
                className={
                  loc.includes("/dashboard/banner")
                    ? `dark:!bg-[#363636]  !bg-[#dcd4ff]`
                    : ""
                }
              >
                <GiKnightBanner className="icon" />
                <span className={`${hamClick ? "hidden" : "block"}`}>
                  Banner
                </span>
              </li>
            </Link>
            <Link href="/dashboard/products" style={{ textDecoration: "none" }}>
              <li
                className={
                  loc.includes("/dashboard/products")
                    ? `dark:!bg-[#363636]  !bg-[#dcd4ff]`
                    : ""
                }
              >
                <StoreIcon className="icon" />
                <span className={`${hamClick ? "hidden" : "block"}`}>
                  Products
                </span>
              </li>
            </Link>
            <p
              className={`${hamClick ? "hidden" : "block"} title tracking-wide`}
            >
              STATS
            </p>
            <Link
              href="/dashboard/filledchart"
              style={{ textDecoration: "none" }}
            >
              <li
                className={
                  loc.includes("/dashboard/filledchart")
                    ? `dark:!bg-[#363636]  !bg-[#dcd4ff]`
                    : ""
                }
              >
                <AnalyticsIcon className="icon" />
                <span className={`${hamClick ? "hidden" : "block"}`}>
                  Filled Chart
                </span>
              </li>
            </Link>
            <Link
              href="/dashboard/linechart"
              style={{ textDecoration: "none" }}
            >
              <li
                className={
                  loc.includes("/dashboard/linechart")
                    ? `dark:!bg-[#363636]  !bg-[#dcd4ff]`
                    : ""
                }
              >
                <AiOutlineStock className="icon" />
                <span className={`${hamClick ? "hidden" : "block"}`}>
                  Line Chart
                </span>
              </li>
            </Link>
            <Link href="/dashboard/barchart" style={{ textDecoration: "none" }}>
              <li
                className={
                  loc.includes("/dashboard/barchart")
                    ? `dark:!bg-[#363636]  !bg-[#dcd4ff]`
                    : ""
                }
              >
                <BarChartIcon className="icon" />
                <span className={`${hamClick ? "hidden" : "block"}`}>
                  Bar Chart
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
                    ? `dark:!bg-[#363636]  !bg-[#dcd4ff]`
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
                    ? `dark:!bg-[#363636]  !bg-[#dcd4ff]`
                    : ""
                }
              >
                <HiMiniUserCircle className="icon" />
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
