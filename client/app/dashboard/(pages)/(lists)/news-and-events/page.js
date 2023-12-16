"use client";
import React, { useEffect, useRef, useState } from "react";
import TablePage from "./Table";
import { useDispatch, useSelector } from "react-redux";
import {
  postnewsEvents,
  getnewsEventss,
  deletenewsEvents,
  updatenewsEvents,
} from "@/redux/slices/newsEventsSlice";
import {
  // percentCompletedValue,
  setOnProgressChangeCallback,
} from "@/redux/slices/newsEventsSlice";
import { toast } from "sonner";

const page = () => {
  const [postUpload, setPostUpload] = useState(0);
  const dispatch = useDispatch();
  const userRef = useRef(false);
  const [finalData, setFinalData] = useState([]);
  const { carData, posts, loading } = useSelector(
    (state) => state.newsEventsReducer
  );

  useEffect(() => {
    if (userRef.current === false) {
      dispatch(getnewsEventss());
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

  const handelpostnewsEvents = async (data) => {
    try {
      const response = await dispatch(postnewsEvents(data));
      if (response.payload?.success) {
        toast.success("newsEvents added successfully");
      } else if (response.payload?.error) {
        toast.error(response.payload?.error);
      } else {
        toast.error("Cannot add newsEvents");
      }
    } catch (error) {
      toast.error("Some error occurred");
    }
  };

  const handelDelete = async (data) => {
    try {
      const response = await dispatch(deletenewsEvents(data));
      if (response.meta?.requestStatus === "fulfilled") {
        toast.warning("newsEvents deleted successfully");
      } else if (response.payload?.error) {
        toast.error(response.payload?.error);
      } else {
        toast.error("Cannot delete newsEvents");
      }
    } catch (error) {
      toast.error("Some error occurred");
    }
  };

  const handelUpdate = async (data) => {
    try {
      const response = await dispatch(updatenewsEvents(data));
      if (response.payload?.success) {
        toast.success("newsEvents updated successfully");
      } else if (response.payload?.error) {
        toast.error(response.payload?.error);
      } else {
        toast.error("Cannot update newsEvents");
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
        handelPost={handelpostnewsEvents}
        handelDelete={handelDelete}
        handelUpdate={handelUpdate}
        postUpload={postUpload}
      />
    </>
  );
};

export default page;
