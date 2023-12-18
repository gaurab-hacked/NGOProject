import React from "react";
import Breadcrumb from "../../common/Components/Breadcrumb";
import Leaderships from "./Leadership";

const page = () => {
  return (
    <div className="w-[90%] mx-auto my-10 min-h-[65vh]">
      <Breadcrumb
        showSearch={true}
        category={"Home"}
        subcategory={"Leaderships"}
      />
      <Leaderships />
    </div>
  );
};

export default page;
