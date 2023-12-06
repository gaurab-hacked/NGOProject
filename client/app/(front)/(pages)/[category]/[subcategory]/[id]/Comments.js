import { Card } from "@nextui-org/react";
import React from "react";
import { BsHeartFill } from "react-icons/bs";
import { FaComment } from "react-icons/fa";
import CommentReply from "./CommentReply";

const Comments = () => {
  return (
    <>
      <Card radius="none" className="round-sm px-5 pt-3 pb-2">
        <div>
          <div className="comment">
            <div className="header flex gap-2 items-center">
              <div className="profile w-[35px] h-[35px] flex uppercase justify-center text-lg shadow items-center bg-[#0078c8] text-white rounded-full">
                G
              </div>
              <div className="data">
                <div className="userName font-semibold capitalize">
                  Gaurab sunar
                </div>
                <div className="date text-sm ml-2">2022-01-20</div>
              </div>
            </div>
            <div className="content ml-[50px] mt-1 mb-2 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In, odio!
            </div>
            <div className="like flex items-center h-[30px] gap-3 ml-[50px] mb-2">
              <div className=" flex items-center h-[30px] gap-1 cursor-pointer">
                <BsHeartFill className={`-mb-1 text-[#0078c8] `} />
                12
              </div>
              <div className=" flex items-center h-[30px] gap-1 cursor-pointer">
                <label
                  htmlFor="comment"
                  className="flex items-center h-[30px] gap-1 cursor-pointer"
                >
                  <FaComment />
                  12
                </label>
              </div>
            </div>
          </div>
          <CommentReply />
          <CommentReply />
          <CommentReply />
        </div>
      </Card>
    </>
  );
};

export default Comments;
