"use client";
import React, { useEffect, useRef, useState } from "react";
import TablePage from "./Table";
import { useDispatch, useSelector } from "react-redux";
import {
  postcarousel,
  getcarousels,
  deletecarousel,
  updatecarousel,
} from "@/redux/slices/carouselSlice";
import {
  // percentCompletedValue,
  setOnProgressChangeCallback,
} from "@/redux/slices/carouselSlice";
import { toast } from "sonner";

const page = () => {
  const [postUpload, setPostUpload] = useState(0);
  const dispatch = useDispatch();
  const userRef = useRef(false);
  const [finalData, setFinalData] = useState([]);
  const { carData, posts, loading } = useSelector(
    (state) => state.carouselReducer
  );

  useEffect(() => {
    if (userRef.current === false) {
      dispatch(getcarousels());
    }
    return () => {
      userRef.current = true;
    };
  }, []);
  useEffect(() => {
    if (postUpload >= 100) {
      setTimeout(() => {
        setPostUpload(0);
      }, 1000);
    }
  }, [postUpload]);

  useEffect(() => {
    let finalCategoryData = carData.map((item, index) => ({
      ...item,
      sn: index + 1,
    }));
    setFinalData(finalCategoryData);
  }, [carData]);

  const handelpostcarousel = async (data) => {
    try {
      const response = await dispatch(postcarousel(data));
      if (response.payload?.success) {
        toast.success("Banner added successfully");
      } else if (response.payload?.error) {
        toast.error(response.payload?.error);
      } else {
        toast.error("Cannot add banner");
      }
    } catch (error) {
      toast.error("Some error occurred");
    }
  };

  const handelDelete = async (data) => {
    try {
      const response = await dispatch(deletecarousel(data));
      if (response.meta?.requestStatus === "fulfilled") {
        toast.warning("Banner deleted successfully");
      } else if (response.payload?.error) {
        toast.error(response.payload?.error);
      } else {
        toast.error("Cannot delete banner");
      }
    } catch (error) {
      toast.error("Some error occurred");
    }
  };

  const handelUpdate = async (data) => {
    try {
      const response = await dispatch(updatecarousel(data));
      if (response.payload?.success) {
        toast.success("Banner updated successfully");
      } else if (response.payload?.error) {
        toast.error(response.payload?.error);
      } else {
        toast.error("Cannot update banner");
      }
    } catch (error) {
      toast.error("Some error occurred");
    }
  };
  setOnProgressChangeCallback((newValue) => {
    setPostUpload(newValue);
  });

  return (
    <>
      <TablePage
        catouselData={finalData[0]?.sn ? finalData : []}
        handelPost={handelpostcarousel}
        handelDelete={handelDelete}
        handelUpdate={handelUpdate}
        postUpload={postUpload}
      />
    </>
  );
};

export default page;
