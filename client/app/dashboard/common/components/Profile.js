"use client";
import React, { useRef, useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Listbox,
  ListboxItem,
  ListboxSection,
  Avatar,
} from "@nextui-org/react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import Confirmlogout from "./ConFirmlogout";
import { useRouter } from "next/navigation";
import SwitchAccountModal from "./SwitchAccountModal";

export default function Profile(props) {
  const { loginData } = props;
  const [isLogin, setIsLogin] = useState({ data: "", isLogged: false });
  const btnRef = useRef();
  const switchAccountRef = useRef();
  const listBtnRef = useRef();
  const router = useRouter();

  const logoutbtnClk = () => {
    btnRef.current.click();
    listBtnRef.current.click();
  };
  const linkClick = () => {
    listBtnRef.current.click();
    router.push("/dashboard/profile");
  };
  const goHomeClick = () => {
    listBtnRef.current.click();
    router.push("/");
  };
  const switchAccountClick = () => {
    listBtnRef.current.click();
    switchAccountRef.current.click();
  };

  return (
    <>
      <Popover
        placement="bottom"
        showArrow={true}
        className="!rounded-[3px] !mr-5"
      >
        <PopoverTrigger>
          <Avatar
            className="shadow"
            as="button"
            src={loginData.data.image}
            showFallback
            classNames={{
              icon: "text-black/50",
            }}
            ref={listBtnRef}
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
                <div>
                  {loginData.data.email
                    ? loginData.data.email
                    : "zoey@example.com"}
                </div>
              </div>
            </ListboxItem>

            <ListboxSection title="Actions" className="border-b pb-1">
              <ListboxItem
                key="account"
                startContent={
                  <PersonIcon className="text-slate-600 relative text-xl ml-[3px] black:text-slate-200" />
                }
                textValue="My Account"
                onClick={linkClick}
              >
                <div className="!text-xs !font-semibold">My Account</div>
              </ListboxItem>
              <ListboxItem
                key="gohome"
                startContent={
                  <HomeIcon className="text-slate-600 text-lg ml-[5px] black:text-slate-200" />
                }
                textValue="Go Home"
                onClick={goHomeClick}
              >
                <div className="!text-xs !font-semibold">Go Home</div>
              </ListboxItem>
              <ListboxItem
                key="switch account"
                startContent={
                  <SwitchAccountIcon className="text-slate-600 text-lg ml-[5px] black:text-slate-200" />
                }
                textValue="switch account"
                onClick={switchAccountClick}
              >
                <div className="!text-xs !font-semibold">Switch Account</div>
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
                onClick={logoutbtnClk}
              >
                Logout
              </ListboxItem>
            </ListboxSection>
          </Listbox>
        </PopoverContent>
      </Popover>
      <Confirmlogout btnRef={btnRef} router={router} setIsLogin={setIsLogin} />
      <SwitchAccountModal btnRef={switchAccountRef} />
    </>
  );
}
