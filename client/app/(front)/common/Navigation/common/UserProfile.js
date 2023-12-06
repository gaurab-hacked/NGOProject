import React, { useRef } from "react";
import { TbHelpSquareFilled } from "react-icons/tb";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Listbox,
  ListboxItem,
  ListboxSection,
  Avatar,
} from "@nextui-org/react";
import PersonIcon from "@mui/icons-material/Person";
import ContactsIcon from "@mui/icons-material/Contacts";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "next-themes";
import ConFirmlogout from "@/app/dashboard/common/components/ConFirmlogout";
import { useRouter } from "next/navigation";

export default function Profile(props) {
  const { data, setIsLogin } = props;
  const { theme, setTheme } = useTheme();
  const btnRef = useRef();
  const router = useRouter();

  return (
    <>
      <Popover placement="bottom" showArrow={true} className="!rounded-[3px]">
        <PopoverTrigger>
          <Avatar
            className="shadow"
            as="button"
            src={data.image}
            showFallback
            classNames={{
              icon: "text-black/50",
            }}
          />
        </PopoverTrigger>
        <PopoverContent className="!rounded-[3px] !px-3 !pr-5">
          <Listbox variant="faded" aria-label="Listbox menu with icons">
            <ListboxItem
              className="hover:!border-transparent p-0 m-0 cursor-text hover:!bg-transparent"
              textValue="Signed in as"
            >
              <div className="p-0 m-0">
                <div className="text-base font-semibold">Signed in as</div>
                <div>{data.email ? data.email : "zoey@example.com"}</div>{" "}
                {/* Replace 'data.email' with your user's email data */}
              </div>
            </ListboxItem>

            <ListboxSection title="Actions" className="border-b pb-1">
              <ListboxItem
                key="account"
                startContent={
                  <PersonIcon className="text-slate-600 text-xl ml-[3px] dark:text-slate-200" />
                }
                textValue="My Account"
              >
                <div className="!text-xs !font-semibold">My Account</div>
              </ListboxItem>
              <ListboxItem
                key="contacts"
                startContent={
                  <ContactsIcon className="text-slate-600 text-lg ml-[3px] dark:text-slate-200" />
                }
                textValue="Quick Contact"
              >
                <div className="!text-xs !font-semibold">Quick Contact</div>
              </ListboxItem>
              <ListboxItem
                key="help"
                startContent={
                  <TbHelpSquareFilled className="text-slate-600 text-lg ml-[3px] dark:text-slate-200" />
                }
                textValue="Help and Feedback"
              >
                <div className="!text-xs !font-semibold">Help and Feedback</div>
              </ListboxItem>
              {theme === "light" ? (
                <ListboxItem
                  key="darkMode"
                  startContent={
                    <LightModeIcon className="text-slate-600 text-lg ml-[3px] dark:text-slate-200" />
                  }
                  onClick={() => setTheme("dark")}
                  textValue="Dark Mode"
                >
                  <div className="!text-xs !font-semibold">Dark Mode</div>
                </ListboxItem>
              ) : (
                <ListboxItem
                  key="lightMode"
                  startContent={
                    <LightModeIcon className="text-slate-600 text-lg ml-[3px] dark:text-slate-200" />
                  }
                  onClick={() => setTheme("light")}
                  textValue="Light Mode"
                >
                  <div className="!text-xs !font-semibold">Light Mode</div>
                </ListboxItem>
              )}
              <ListboxItem
                key="dashboard"
                startContent={
                  <DashboardIcon className="text-slate-600 text-lg ml-[3px] dark:text-slate-200" />
                }
                textValue="go to dashboard"
              >
                <div className="!text-xs !font-semibold">Dashboard</div>
              </ListboxItem>
            </ListboxSection>

            <ListboxSection title="Danger zone">
              <ListboxItem
                key="logout"
                className="text-danger"
                color="danger"
                description="Logout from browser"
                startContent={<PowerSettingsNewIcon className="text-lg" />}
                textValue="Logout"
                onClick={() => btnRef.current.click()}
              >
                <div className="!text-xs !font-semibold">Logout</div>
              </ListboxItem>
            </ListboxSection>
          </Listbox>
        </PopoverContent>
      </Popover>
      <ConFirmlogout setIsLogin={setIsLogin} btnRef={btnRef} router={router} />
    </>
  );
}
