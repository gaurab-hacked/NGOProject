import "./css/widget.css";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Final from "./Final";
import { RiMessage3Fill } from "react-icons/ri";
import { AiFillProject } from "react-icons/ai";
import { FaNewspaper } from "react-icons/fa6";

const Widget = ({ type, dataBack }) => {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        hrefLink: "/dashboard/users",
        oneMonth: dataBack.oneMonth,
        all: dataBack.all,
        icon: (
          <PersonOutlinedIcon
            className="icon p-1 rounded"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "message":
      data = {
        title: "MESSAGES",
        isMoney: false,
        link: "View all messages",
        hrefLink: "/dashboard/orders",
        oneMonth: dataBack.oneMonth,
        all: dataBack.all,
        icon: (
          <RiMessage3Fill
            className="icon p-1 rounded text-2xl scale-110"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "projects":
      data = {
        title: "PROJECTS",
        hrefLink: "/dashboard/finished",
        oneMonth: dataBack.oneMonth,
        all: dataBack.all,
        isMoney: true,
        link: "View all Projects",
        icon: (
          <AiFillProject
            className="icon p-1 rounded text-2xl"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "News & Events":
      data = {
        title: "NEWS & EVENTS",
        isMoney: false,
        link: "View all News and Events",
        hrefLink: "/dashboard/delivery",
        oneMonth: dataBack.oneMonth,
        all: dataBack.all,
        icon: (
          <FaNewspaper
            className="icon p-1 rounded text-2xl"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return <Final data={data} />;
};

export default Widget;
