import React from "react";
import Albums from "./(album)/Albums";
import Breadcrumb from "../../common/Components/Breadcrumb";

const page = () => {
  return (
    <div className="w-[90%] min-h-[75vh] mx-auto my-10">
      <Breadcrumb category={"Home"} subcategory={"Gallery"} />
      <Albums />
    </div>
  );
};

export default page;
