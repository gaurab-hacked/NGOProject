"use client";
import React from "react";
import { Breadcrumbs, BreadcrumbItem, Card, Input } from "@nextui-org/react";
import { SearchIcon } from "@/app/dashboard/common/components/Tables/Icons/SearchIcon";

const Breadcrumb = ({ category, subcategory, subsubcategory, showSearch }) => {
  return (
    <Card
      className="h-[55px] mb-8 mt-3 flex rounded-sm flex-row px-5 w-full items-center justify-between"
      radius="none"
    >
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
      <>
        {showSearch && (
          <div className="w-[25%]">
            <Input
              endContent={<SearchIcon />}
              radius="sm"
              variant="underlined"
              size="sm"
              placeholder="Search Images..."
              className="mb-2"
            />
          </div>
        )}
      </>
    </Card>
  );
};

export default Breadcrumb;
