"use client";
import React, { useEffect, useRef, useState } from "react";
import TablePage from "./Table";
import { useDispatch, useSelector } from "react-redux";
import {
  postimage,
  getimages,
  deleteimage,
  updateimage,
} from "@/redux/slices/imageSlice";
import { toast } from "sonner";
import { getalbums } from "@/redux/slices/albumSlice";
import { setOnProgressChangeCallback } from "@/redux/slices/imageSlice";

const page = () => {
  const [postUpload, setPostUpload] = useState(0);
  const dispatch = useDispatch();
  const userRef = useRef(false);
  const [finalData, setFinalData] = useState([]);
  const { data } = useSelector((state) => state.albumReducer);
  const { imageData, posts, loading } = useSelector(
    (state) => state.imageReducer
  );

  const joinedData = finalData.map((image) => {
    const matchingCategory = data.find(
      (category) => category._id === image.categoryId
    );
    return {
      ...image,
      category: matchingCategory,
    };
  });

  useEffect(() => {
    if (userRef.current === false) {
      dispatch(getalbums());
      dispatch(getimages());
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
    let finalsubcategoryData = imageData.map((item, index) => ({
      ...item,
      sn: index + 1,
    }));
    setFinalData(finalsubcategoryData);
  }, [imageData]);

  const handelpostimage = async (data) => {
    try {
      const response = await dispatch(postimage(data));
      if (response.payload?.success) {
        toast.success("Image added successfully");
      } else if (response.payload?.error) {
        toast.error(response.payload?.error);
      } else {
        toast.error("Cannot add image");
      }
    } catch (error) {
      toast.error("Some error occurred");
    }
  };

  const handelDelete = async (data) => {
    try {
      const response = await dispatch(deleteimage(data));
      if (response.meta?.requestStatus === "fulfilled") {
        toast.warning("Image deleted successfully");
      } else if (response.payload?.error) {
        toast.error(response.payload?.error);
      } else {
        toast.error("Cannot delete image");
      }
    } catch (error) {
      toast.error("Some error occurred");
    }
  };

  const handelUpdate = async (data) => {
    try {
      const response = await dispatch(updateimage(data));
      if (response.payload?.success) {
        toast.success("Image updated successfully");
      } else if (response.payload?.error) {
        toast.error(response.payload?.error);
      } else {
        toast.error("Cannot update image");
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
        imageData={joinedData[0]?.sn ? joinedData : []}
        handelpostimage={handelpostimage}
        handelDelete={handelDelete}
        handelUpdate={handelUpdate}
        categoryDataDropdown={data}
        postUpload={postUpload}
      />
    </>
  );
};

export default page;
