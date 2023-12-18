import React from "react";
import Breadcrumb from "../../common/Components/Breadcrumb";
import NewsEvents from "./NewsEvents";

const page = () => {
  return (
    <div className="w-[90%] mx-auto my-10 min-h-[70vh]">
      <Breadcrumb
        category={"Home"}
        subcategory={"News-And-Events"}
        showSearch={true}
      />
      <NewsEvents />
    </div>
  );
};

export default page;
