import React from "react";

const CommentReply = () => {
  return (
    <>
      <div>
        <div className="commentReply border-t pt-2 ml-10 mt-3 flex items-center justify-between">
          <div className="comment">
            <div className="header flex gap-2 items-center justify-between w-full">
              <div className="header flex gap-2 items-center">
                <div className="profile w-[35px] h-[35px] flex capitalize justify-center text-lg shadow items-center bg-[#0078c8] text-white rounded-full">
                  G
                </div>
                <div className="data">
                  <div className="userName font-semibold capitalize">
                    Gaurab sunar
                  </div>
                  <div className="date text-sm ml-2">2022-01-21</div>
                </div>
              </div>
            </div>
            <div className="content ml-[50px] mt-1 mb-2 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              molestias impedit doloribus modi nemo incidunt qui eius ab aut,
              officiis error sit, laboriosam sunt esse accusamus pariatur facere
              velit ad?
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentReply;
