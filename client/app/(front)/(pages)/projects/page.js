import React from "react";
import Breadcrumb from "../../common/Components/Breadcrumb";
import Projects from "./Projects";

const page = () => {
  return (
    <div className="w-[90%] mx-auto my-10 min-h-[70vh]">
      <Breadcrumb
        showSearch={true}
        category={"Home"}
        subcategory={"Projects"}
      />
      <Projects />
    </div>
  );
};

export default page;
