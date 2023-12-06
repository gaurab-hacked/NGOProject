"use client";
import React from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import UserDetails from "./UserDetails";
import ProductDetails from "./ProductDetails";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ModalFun(props) {
  const { btnRef, viewDetal, pageFrom, handelUpdate, pageType } = props;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const metal = [
    { id: 1, name: "Gold" },
    { id: 2, name: "Silver" },
    { id: 3, name: "Panchadhatu" },
  ];

  function getMetalName(id) {
    const metalItem = metal.find((item) => String(item.id) === String(id));
    return metalItem ? metalItem.name : "";
  }

  function dateConverter(isoDate) {
    const date = new Date(isoDate);
    return date.toLocaleString();
  }
  const updateData = (data) => {
    handelUpdate(data);
  };

  return (
    <>
      <Button onPress={onOpen} ref={btnRef} className="hidden">
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"3xl"}>
        <ModalContent className="!w-[900px] !rounded-sm">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col capitalize gap-1 py-0 pt-3">
                Order From {viewDetal.userName}
              </ModalHeader>
              <ModalBody className="!flex !gap-5 !flex-row -mt-2">
                <div className="flex w-full pt-1 relative !text-sm ">
                  <div className="w-1/2">
                    <div className="flex gap-3 mt-2 mb-1 items-center">
                      <div className="flex gap-1">
                        <span className="capitalize">Name:</span>
                        <span className="capitalize">
                          {viewDetal.user?.name}
                        </span>
                      </div>
                      <div>
                        <UserDetails
                          data={{ ...viewDetal.user, ...viewDetal.userDetail }}
                        />
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <span className="capitalize">Email:</span>
                      <span className="capitalize">
                        {viewDetal.user?.email}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <span className="capitalize">Address:</span>
                      <span className="capitalize">
                        {viewDetal.userDetail?.address}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <span className="capitalize">City:</span>
                      <span className="capitalize">
                        {viewDetal.userDetail?.city}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <span className="capitalize">Area:</span>
                      <span className="capitalize">
                        {viewDetal.userDetail?.area}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <span className="capitalize">Landmark:</span>
                      <span className="capitalize">
                        {viewDetal.userDetail?.landmark}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <span className="capitalize">Mobile Number:</span>
                      <span className="capitalize">
                        {viewDetal.userDetail?.mobileNumber}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <span className="capitalize">Order Quntity:</span>
                      <span className="capitalize">{viewDetal.quntity}</span>
                    </div>
                    {pageType ? (
                      <Link
                        className="text-blue-600"
                        size="sm"
                        href={`user/${viewDetal.user._id}`}
                      >
                        Visit user for more detail
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="w-[0.01rem] h-full top-0 mx-2 bg-slate-300"></div>
                  <div className="w-1/2">
                    <div className="flex gap-3 mt-2 mb-1 items-center">
                      <div className="flex gap-1">
                        <span className="capitalize">Name:</span>
                        <span className="capitalize">
                          {viewDetal.product.description.slice(0, 20)}
                        </span>
                      </div>
                      <div>
                        <ProductDetails
                          data={{
                            ...viewDetal.product,
                            total: viewDetal.prize,
                            quntity: viewDetal.quntity,
                          }}
                        />
                      </div>
                    </div>
                    <div className="text-justify">
                      <span className="capitalize mr-1">Description:</span>
                      <div className="capitalize !text-justify">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: viewDetal.product.description.slice(0, 50),
                          }}
                        />
                      </div>
                    </div>
                    {/* <div className="flex gap-1">
                      <span className="capitalize">Category:</span>
                      <span className="capitalize">Ring</span>
                    </div>
                    <div className="flex gap-1">
                      <span className="capitalize">Subcategory:</span>
                      <span className="capitalize">Gold Ring</span>
                    </div> */}
                    <div className="w-full flex gap-5">
                      <div className="flex gap-1 w-[40%]">
                        <span className="capitalize">Weight:</span>
                        <span className="capitalize">
                          {viewDetal.product.weight} tola
                        </span>
                      </div>
                      <div className="flex gap-1">
                        <span className="capitalize">Westage:</span>
                        <span className="capitalize">
                          {viewDetal.product.westage} tola
                        </span>
                      </div>
                    </div>
                    <div className="w-full flex gap-5">
                      <div className="flex gap-1 w-[40%]">
                        <span className="capitalize">Metal:</span>
                        <span className="capitalize">
                          {getMetalName(viewDetal.product.metal)}
                        </span>
                      </div>
                      <div className="flex gap-1">
                        <span className="capitalize">Discount:</span>
                        <span className="capitalize">
                          {viewDetal.product.discount}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full flex gap-5">
                      <div className="flex gap-1 w-[40%]">
                        <span className="capitalize">Price:</span>
                        <span className="capitalize">Rs.{viewDetal.prize}</span>
                      </div>
                      <div className="flex gap-1">
                        <span className="capitalize">Quntity:</span>
                        <span className="capitalize">{viewDetal.quntity}</span>
                      </div>
                    </div>
                    <div className="w-full flex gap-5">
                      <div className="flex gap-1 w-[40%]">
                        <span className="capitalize">Gold Price:</span>
                        <span className="capitalize">
                          Rs.{viewDetal.goldRate}
                        </span>
                      </div>
                      <div className="flex gap-1">
                        <span className="capitalize">Silver Price:</span>
                        <span className="capitalize">
                          Rs.{viewDetal.silverRate}
                        </span>
                      </div>
                    </div>
                    {pageType ? (
                      <Link
                        className="text-blue-600"
                        size="sm"
                        href={`user/${viewDetal.product._id}`}
                      >
                        Visit product for more detail
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </ModalBody>
              <div className="w-full h-[0.01rem] bg-slate-200 mt-1 -mb-1"></div>
              <ModalFooter className="flex justify-between items-center ">
                <span className="capitalize text-sm">
                  Order Date: {dateConverter(viewDetal.date)}
                </span>
                <div className="flex gap-5">
                  <Button
                    color="danger"
                    variant="ghost"
                    className="rounded-sm !uppercase !tracking-wide"
                    size="sm"
                    onPress={onClose}
                  >
                    Close
                  </Button>
                  {pageType ? (
                    <>
                      {pageFrom.toLowerCase() === "order" ? (
                        <>
                          <Button
                            color="success"
                            variant="solid"
                            className="rounded-sm !uppercase !tracking-wide"
                            size="sm"
                            onPress={onClose}
                            endContent={
                              <ArrowForwardIcon className="text-sm -ml-[.4rem] mt-[2px]" />
                            }
                            onClick={() =>
                              updateData({ successRate: 1, id: viewDetal._id })
                            }
                          >
                            Deliver
                          </Button>
                        </>
                      ) : pageFrom.toLowerCase() === "delivery" ? (
                        <>
                          <Button
                            color="warning"
                            variant="ghost"
                            className="rounded-sm !uppercase !tracking-wide"
                            size="sm"
                            onPress={onClose}
                            startContent={
                              <ArrowForwardIcon className="text-sm -mr-[.4rem] rotate-180 mt-[2px]" />
                            }
                            onClick={() =>
                              updateData({ successRate: 0, id: viewDetal._id })
                            }
                          >
                            Back to Order
                          </Button>
                          <Button
                            color="success"
                            variant="solid"
                            className="rounded-sm !uppercase !tracking-wide"
                            size="sm"
                            onPress={onClose}
                            endContent={
                              <ArrowForwardIcon className="text-sm -ml-[.4rem] mt-[2px]" />
                            }
                            onClick={() =>
                              updateData({ successRate: 2, id: viewDetal._id })
                            }
                          >
                            Finish
                          </Button>
                        </>
                      ) : (
                        <Button
                          color="warning"
                          variant="ghost"
                          className="rounded-sm !uppercase !tracking-wide"
                          size="sm"
                          onPress={onClose}
                          startContent={
                            <ArrowForwardIcon className="text-sm -mr-[.4rem] rotate-180 mt-[2px]" />
                          }
                          onClick={() =>
                            updateData({ successRate: 1, id: viewDetal._id })
                          }
                        >
                          Back to Deliver
                        </Button>
                      )}
                    </>
                  ) : (
                    <>
                      {Number(viewDetal.orderSuccess) === 0 ? (
                        <>
                          <Button
                            color="success"
                            variant="solid"
                            className="rounded-sm !uppercase !tracking-wide"
                            size="sm"
                            onPress={onClose}
                            endContent={
                              <ArrowForwardIcon className="text-sm -ml-[.4rem] mt-[2px]" />
                            }
                            onClick={() =>
                              updateData({ successRate: 1, id: viewDetal._id })
                            }
                          >
                            Deliver
                          </Button>
                        </>
                      ) : Number(viewDetal.orderSuccess) === 1 ? (
                        <>
                          <Button
                            color="warning"
                            variant="ghost"
                            className="rounded-sm !uppercase !tracking-wide"
                            size="sm"
                            onPress={onClose}
                            startContent={
                              <ArrowForwardIcon className="text-sm -mr-[.4rem] rotate-180 mt-[2px]" />
                            }
                            onClick={() =>
                              updateData({ successRate: 0, id: viewDetal._id })
                            }
                          >
                            Back to Order
                          </Button>
                          <Button
                            color="success"
                            variant="solid"
                            className="rounded-sm !uppercase !tracking-wide"
                            size="sm"
                            onPress={onClose}
                            endContent={
                              <ArrowForwardIcon className="text-sm -ml-[.4rem] mt-[2px]" />
                            }
                            onClick={() =>
                              updateData({ successRate: 2, id: viewDetal._id })
                            }
                          >
                            Finish
                          </Button>
                        </>
                      ) : (
                        <Button
                          color="warning"
                          variant="ghost"
                          className="rounded-sm !uppercase !tracking-wide"
                          size="sm"
                          onPress={onClose}
                          startContent={
                            <ArrowForwardIcon className="text-sm -mr-[.4rem] rotate-180 mt-[2px]" />
                          }
                          onClick={() =>
                            updateData({ successRate: 1, id: viewDetal._id })
                          }
                        >
                          Back to Deliver
                        </Button>
                      )}
                    </>
                  )}
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
