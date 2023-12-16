import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import React from "react";

const BreadcrumbsFun = ({ category, subcategory, subsubcategory }) => {
  return (
    <Breadcrumbs
      separator="/"
      itemClasses={{
        separator: "px-2",
      }}
    >
      <BreadcrumbItem>{category}</BreadcrumbItem>
      {category && <BreadcrumbItem>{subcategory}</BreadcrumbItem>}
      {subsubcategory && <BreadcrumbItem>{subsubcategory}</BreadcrumbItem>}
    </Breadcrumbs>
  );
};

export default BreadcrumbsFun;
