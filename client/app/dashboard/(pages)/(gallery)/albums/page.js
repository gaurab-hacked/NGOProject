"use client";
import React, { useEffect, useRef, useState } from "react";
import TablePage from "./Table";
import { useDispatch, useSelector } from "react-redux";
import {
  postalbum,
  getalbums,
  deletealbum,
  updatealbum,
} from "@/redux/slices/albumSlice";
import {
  // percentCompletedValue,
  setOnProgressChangeCallback,
} from "@/redux/slices/albumSlice";
import { toast } from "sonner";

const Page = () => {
  const [postUpload, setPostUpload] = useState(0);
  const dispatch = useDispatch();
  const userRef = useRef(false);
  const [finalData, setFinalData] = useState([]);
  const { data, posts, loading } = useSelector((state) => state.albumReducer);

  useEffect(() => {
    if (userRef.current === false) {
      dispatch(getalbums());
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
    let finalalbumData = data.map((item, index) => ({
      ...item,
      sn: index + 1,
    }));
    setFinalData(finalalbumData);
  }, [data]);

  const handelPostalbum = async (data) => {
    try {
      const response = await dispatch(postalbum(data));
      if (response.payload?.success) {
        toast.success("Album added successfully");
      } else if (response.payload?.error) {
        toast.error(response.payload?.error);
      } else {
        toast.error("Cannot add album");
      }
    } catch (error) {
      toast.error("Some error occurred");
    }
  };

  const handelDelete = async (data) => {
    try {
      const response = await dispatch(deletealbum(data));
      if (response.meta?.requestStatus === "fulfilled") {
        toast.warning("Album deleted successfully");
      } else if (response.payload?.error) {
        toast.error(response.payload?.error);
      } else {
        toast.error("Cannot delete album");
      }
    } catch (error) {
      toast.error("Some error occurred");
    }
  };

  const handelUpdate = async (data) => {
    try {
      const response = await dispatch(updatealbum(data));
      if (response.payload?.success) {
        toast.success("Album updated successfully");
      } else if (response.payload?.error) {
        toast.error(response.payload?.error);
      } else {
        toast.error("Cannot update album");
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
        albumData={finalData[0]?.sn ? finalData : []}
        handelPostalbum={handelPostalbum}
        handelDelete={handelDelete}
        handelUpdate={handelUpdate}
        postUpload={postUpload}
      />
    </>
  );
};

export default Page;
