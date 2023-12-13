import React from "react";
import Breadcrumb from "../../common/Components/Breadcrumb";
import NewsEvents from "./NewsEvents";

const page = () => {
  return (
    <div className="w-[90%] mx-auto my-10 min-h-[70vh]">
      <Breadcrumb
        showSearch={true}
        category={"Home"}
        subcategory={"News-And-Events"}
      />
      <NewsEvents />
    </div>
  );
};

export default page;
