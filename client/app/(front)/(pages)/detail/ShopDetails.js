"use client";
import { Rating } from "@mui/material";
import { useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { AiFillFacebook } from "react-icons/ai";
import {
  FaInstagramSquare,
  FaPinterestSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Button, Card } from "@nextui-org/react";
import contentImage from "@/public/profile.jpg";
import Image from "next/image";

const ShopDetails = () => {
  const [contentValue, setcontentValue] = useState(0);
  const handelSizeChange = () => {};

  return (
    <div className="container-fluid pb-5">
      <div className="grid-cols-11 gap-8 grid px-xl-5">
        <div className="col-span-4 mb-30 mx-5">
          <div className=" h-[450px] flex flex-col gap-2">
            <Card
              shadow="none"
              radius="none"
              className="flex justify-center items-center rounded-sm h-[400px] "
            >
              <Image
                className="max-h-[400px] min-h-[200px] object-contain max-w-full min-w-[200px]"
                src={contentImage}
                alt="Product"
                width="full"
                height="full"
              />
            </Card>
            <Card
              radius="none"
              className="!rounded-sm w-full flex !flex-row item-center gap-1 h-[50px]"
            >
              <Image
                className="m-[1px] hover:scale-105 duration-100 object-cover rounded-sm cursor-pointer"
                src={contentImage}
                alt="Product"
                width={50}
                height={50}
              />
              <Image
                className="m-[1px] hover:scale-105 duration-100 object-cover rounded-sm cursor-pointer"
                src={contentImage}
                alt="Product"
                width={50}
                height={50}
              />
              <Image
                className="m-[1px] hover:scale-105 duration-100 object-cover rounded-sm cursor-pointer"
                src={contentImage}
                alt="Product"
                width={50}
                height={50}
              />
            </Card>
          </div>
        </div>

        <div className="col-span-7 h-auto mb-30">
          <div className="h-100 bg-light p-30">
            <h3 className="text-2xl font-semibold text-slate-700">
              Product Name Goes Here
            </h3>
            <div className="d-flex mb-3 flex items-center gap-2">
              <Rating
                name="simple-controlled"
                className="mt-1"
                value={contentValue}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <small className="font-semibold text-sm">(99 Reviews)</small>
            </div>
            <h3 className="font-semibold text-2xl">$150.00</h3>
            <del className="font-semibold !text-red-500">$160.00</del>
            <p className="mb-4 mt-4 lg:w-[90%] w-full">
              Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat
              diam stet sit clita ea. Sanc ipsum et, labore clita lorem magna
              duo dolor no sea Nonumy . Sanc ipsum et, labore clita lorem magna
              duo dolor no sea Nonumy Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Molestiae, repudiandae?
            </p>
            <div className="d-flex mb-3">
              <strong className="text-dark mr-3">Sizes:</strong>
              <FormControl className="-mt-2 scale-90">
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="XS"
                  name="radio-buttons-group"
                  className="flex !flex-row gap-3 -ml-3"
                  onChange={handelSizeChange}
                >
                  <FormControlLabel value="XS" control={<Radio />} label="XS" />
                  <FormControlLabel value="S" control={<Radio />} label="S" />
                  <FormControlLabel value="M" control={<Radio />} label="M" />
                  <FormControlLabel value="L" control={<Radio />} label="L" />
                  <FormControlLabel value="XL" control={<Radio />} label="XL" />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="flex items-center gap-6 mb-4 justify-start h-[60px]">
              <div className="input-group quantity flex item-center justify-start max-w-[150px]">
                <div className="bg-slate-100 flex justify-center items-center">
                  <Button
                    isIconOnly
                    radius="none"
                    className="!bg-transparent text-xl"
                    aria-label="Like"
                  >
                    +
                  </Button>
                  <input
                    type="text"
                    className="form-control form-control-sm bg-transparent border-0 text-center !w-[50px]"
                  />
                  <Button
                    isIconOnly
                    radius="none"
                    className="!bg-transparent  text-3xl"
                    aria-label="Like"
                  >
                    -
                  </Button>
                </div>
              </div>
              <Button className="px-4 bg-[#00468F] py-2 items-center justify-center flex gap-2 text-white hover:bg-[#10263c] rounded-sm">
                <i className="fa fa-shopping-cart mr-1"></i> Add To Cart{" "}
                <BsFillCartPlusFill className="text-lg" />
              </Button>
            </div>
            <div className="d-flex pt-2 flex-col">
              <strong className="text-dark mr-2">Share on:</strong>
              <div className=" flex gap-3 mt-2 ml-2">
                <AiFillFacebook className="text-2xl text-blue-900 scale-110 hover:text-slate-900 cursor-pointer" />
                <FaInstagramSquare className="text-2xl text-blue-900 scale-110 hover:text-slate-900 cursor-pointer" />
                <FaPinterestSquare className="text-2xl text-blue-900 scale-110 hover:text-slate-900 cursor-pointer" />
                <FaLinkedin className="text-2xl text-blue-900 scale-110 hover:text-slate-900 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
