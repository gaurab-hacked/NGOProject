import "./css/widget.css";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import Final from "./Final";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

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
    case "Categories":
      data = {
        title: "Categories",
        isMoney: false,
        link: "View all Categories",
        hrefLink: "/dashboard/orders",
        oneMonth: dataBack.oneMonth,
        all: dataBack.all,
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon p-1 rounded"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "Projects":
      data = {
        title: "Projects",
        hrefLink: "/dashboard/finished",
        oneMonth: dataBack.oneMonth,
        all: dataBack.all,
        isMoney: true,
        link: "View all Projects",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon p-1 rounded"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "News & Events":
      data = {
        title: "News & Events",
        isMoney: false,
        link: "View all News and Events",
        hrefLink: "/dashboard/delivery",
        oneMonth: dataBack.oneMonth,
        all: dataBack.all,
        icon: (
          <LocalShippingIcon
            className="icon p-1 rounded"
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
