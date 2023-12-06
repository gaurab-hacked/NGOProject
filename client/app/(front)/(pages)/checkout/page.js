"use client";
import React from "react";
import Breadcrumb from "../../common/Components/Breadcrumb";
import { Button, Checkbox, Input } from "@nextui-org/react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const page = () => {
  return (
    <>
      <div className="px-2 min-h-[70vh]">
        <Breadcrumb />
        <div className="grid grid-cols-12">
          <div className="col-span-8 mx-5">
            <h2 className="text-lg font-semibold text-slate-700 tracking-wide mb-4">
              Billing Address
            </h2>
            <div className="mx-2 flex flex-col gap-5">
              <div className="flex gap-4">
                <Input
                  type="text"
                  label="First Name"
                  radius="none"
                  className="rounded-sm"
                  size="sm"
                />
                <Input
                  type="text"
                  label="Last Name"
                  radius="none"
                  className="rounded-sm"
                  size="sm"
                />
              </div>
              <div className="flex gap-4">
                <Input
                  type="email"
                  label="Email"
                  radius="none"
                  className="rounded-sm"
                  size="sm"
                />
                <Input
                  type="number"
                  label="Mobile Number"
                  radius="none"
                  className="rounded-sm"
                  size="sm"
                />
              </div>
              <div className="flex gap-4">
                <Input
                  type="text"
                  label="Address Line 1"
                  radius="none"
                  className="rounded-sm"
                  size="sm"
                />
                <Input
                  type="text"
                  label="Address Line 2"
                  radius="none"
                  className="rounded-sm"
                  size="sm"
                />
              </div>
              <div className="flex gap-4">
                <Input
                  type="text"
                  label="State"
                  radius="none"
                  className="rounded-sm"
                  size="sm"
                />
                <Input
                  type="number"
                  label="ZIP Code"
                  radius="none"
                  className="rounded-sm"
                  size="sm"
                />
              </div>
              <Checkbox>Create an account</Checkbox>
            </div>
          </div>
          <div className="col-span-4">
            <div className="col-span-4 mx-10">
              <h2 className="text-lg uppercase font-semibold text-slate-700 tracking-wide mb-2">
                CART SUMMARY
              </h2>
              <div className="mx-2">
                <div className="flex w-full justify-between">
                  <span>Product Name 1</span>
                  <span>Rs.150</span>
                </div>
                <div className="flex w-full justify-between">
                  <span>Product Name 2</span>
                  <span>Rs.150</span>
                </div>
                <div className="flex w-full justify-between">
                  <span>Product Name 3</span>
                  <span>Rs.150</span>
                </div>
                <div className="flex w-full justify-between">
                  <span>Product Name 4</span>
                  <span>Rs.150</span>
                </div>
                <hr />
                <div className="mt-1">
                  <div className="flex w-full justify-between">
                    <span>Subtotal</span>
                    <span>Rs.150</span>
                  </div>
                  <div className="flex w-full justify-between">
                    <span>Shipping</span>
                    <span>Rs.150</span>
                  </div>
                </div>
                <hr />
                <div className="flex w-full justify-between mt-1">
                  <span>Total</span>
                  <span>Rs.150</span>
                </div>
              </div>
            </div>
            <div className="col-span-4 mx-10 mt-4">
              <h2 className="text-lg uppercase font-semibold text-slate-700 tracking-wide mb-2">
                Payment method
              </h2>
              <div className="flex px-2 gap-2 flex-col">
                <Checkbox>E-Sewa</Checkbox>
                <Checkbox>Khalti</Checkbox>
              </div>
              <Button
                radius="none"
                color="primary"
                className="mt-5 w-full rounded-sm"
              >
                Place Order
                <ShoppingCartCheckoutIcon className="text-xl -ml-1 mt-[2px]" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
