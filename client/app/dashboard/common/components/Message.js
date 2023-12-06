import React, { useRef } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Badge,
} from "@nextui-org/react";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";

export default function Message(props) {
  const { unreadMsg } = props;
  const btnref = useRef();
  return (
    <>
      <Popover placement="bottom" showArrow={true} className="!rounded-[3px]">
        <PopoverTrigger>
          <Button
            as="button"
            radius="sm"
            isIconOnly
            aria-label="more than 99 notifications"
            variant="light"
            ref={btnref}
          >
            <Badge
              color="danger"
              content={unreadMsg.length > 99 ? "99+" : unreadMsg.length}
              shape="circle"
              className="text-xs h-[20px] pb-[2px] w-[20px]"
            >
              <EmailIcon className="scale-95 cursor-pointer text-slate-600 dark:text-slate-200" />
            </Badge>
          </Button>
        </PopoverTrigger>
        {unreadMsg.length > 0 && (
          <PopoverContent className="!rounded-[3px] !px-0">
            {unreadMsg.map((e) => {
              return (
                <Link
                  key={e._id}
                  className=" py-2 hover:bg-[#e7e7e7] dark:hover:bg-[#2d2a3d] w-full px-4 select-none cursor-pointer"
                  href={`/dashboard/message/${e._id}`}
                  onClick={() => btnref.current.click()}
                >
                  <div className="text-small capitalize font-bold">
                    {e.title.length > 25
                      ? e.title.slice(0, 25) + "..."
                      : e.title}
                  </div>
                  <div className="text-tiny">
                    {e.msg.length > 40 ? e.msg.slice(0, 40) + "..." : e.msg}
                  </div>
                </Link>
              );
            })}
          </PopoverContent>
        )}
      </Popover>
    </>
  );
}
