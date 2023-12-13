import React from "react";
import Breadcrumb from "@/app/(front)/common/Components/Breadcrumb";
import Albums from "./AllPhotos";

const page = () => {
  return (
    <div className="w-[90%] min-h-[75vh] mx-auto my-10">
      <Breadcrumb
        category={"Home"}
        subcategory={"Gallery"}
        subsubcategory={"Images"}
      />
      <Albums />
    </div>
  );
};

export default page;
