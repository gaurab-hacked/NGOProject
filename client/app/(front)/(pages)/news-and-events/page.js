import React from "react";
import Breadcrumb from "../../common/Components/Breadcrumb";
import Events from "./Events";

const page = () => {
  return (
    <div className="w-[90%] mx-auto my-10 min-h-[65vh]">
      <Breadcrumb
        showSearch={true}
        category={"Home"}
        subcategory={"News and Events"}
      />
      <Events />
    </div>
  );
};

export default page;
