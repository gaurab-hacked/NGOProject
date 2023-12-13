"use client";
import { Card, Input } from "@nextui-org/react";
import React from "react";
import Link from "next/link";
import { SearchIcon } from "@/app/dashboard/common/components/Tables/Icons/SearchIcon";

const Breadcrumb = ({ category, subcategory, subsubcategory }) => {
  return (
    <Card
      className="h-[55px] mb-8 mt-3 flex flex-row px-5 w-full justify-between"
      radius="sm"
    >
      <div className="h-full w-[60%]">
        <ul className="flex h-full text-slate-600 font-semibold tracking-wide items-center">
          <li>
            <Link href={"/"}>{category}</Link>
          </li>
          {subcategory && (
            <>
              /
              <li>
                <Link href={`/${subcategory.toLowerCase()}`}>
                  {subcategory}
                </Link>
              </li>
            </>
          )}
          {subsubcategory && (
            <>
              /
              <li>
                <Link
                  href={`/${subcategory.toLowerCase()}/${subsubcategory.toLowerCase()}`}
                >
                  {subsubcategory}
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="w-[25%] pb-1 flex justify-between items-center gap-3">
        {/* <Select
          size="sm"
          variant="underlined"
          label="Select an animal"
          className="max-w-xs"
          radius="sm"
        >
          <SelectItem value="1">Home</SelectItem>
          <SelectItem value="2">About</SelectItem>
          <SelectItem value="3">Contact</SelectItem>
          <SelectItem value="4">Service</SelectItem>
        </Select>
        <Select
          size="sm"
          variant="underlined"
          label="Select an animal"
          className="max-w-xs"
          radius="sm"
        >
          <SelectItem value="1">Home</SelectItem>
          <SelectItem value="2">About</SelectItem>
          <SelectItem value="3">Contact</SelectItem>
          <SelectItem value="4">Service</SelectItem>
        </Select> */}
        <Input
          endContent={<SearchIcon />}
          radius="sm"
          placeholder="Search Images..."
        />
      </div>
    </Card>
  );
};

export default Breadcrumb;
