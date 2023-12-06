"use client";
import React from "react";
import Breadcrumb from "../../common/Components/Breadcrumb";
import { Button, Divider } from "@nextui-org/react";
import TablePage from "./Table";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const page = () => {
  return (
    <div className="px-2">
      <Breadcrumb />
      <div className="grid mt-5 grid-cols-12">
        <div className="col-span-8">
          <TablePage />
        </div>
        <div className="col-span-4 mx-10 mt-16">
          <h2 className="text-lg font-semibold text-slate-700 tracking-wide mb-4">
            CART SUMMARY
          </h2>
          <div className="mx-2">
            <div className="flex w-full justify-between mt-2">
              <span>Subtotal</span>
              <span>Rs.150</span>
            </div>
            <div className="flex w-full justify-between mt-2">
              <span>Shipping</span>
              <span>Rs.10</span>
            </div>
            <Divider className="my-2" />
            <div className="flex w-full justify-between mt-2">
              <span>Total</span>
              <span>Rs. 160</span>
            </div>
          </div>
          <Button
            radius="none"
            color="primary"
            className="mt-5 w-full rounded-sm"
          >
            Proceed To Checkout{" "}
            <ArrowForwardIcon className="text-base -ml-1 mt-[2px]" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
