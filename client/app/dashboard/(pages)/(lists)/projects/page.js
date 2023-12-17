"use client";
import React, { useEffect, useRef, useState } from "react";
import TablePage from "./Table";
import { useDispatch, useSelector } from "react-redux";
import {
  postproject,
  getprojects,
  deleteproject,
  updateproject,
} from "@/redux/slices/projectSlice";
import {
  // percentCompletedValue,
  setOnProgressChangeCallback,
} from "@/redux/slices/projectSlice";
import { toast } from "sonner";

const page = () => {
  const [postUpload, setPostUpload] = useState(0);
  const dispatch = useDispatch();
  const userRef = useRef(false);
  const [finalData, setFinalData] = useState([]);
  const { carData, posts, loading } = useSelector(
    (state) => state.projectReducer
  );

  useEffect(() => {
    if (userRef.current === false) {
      dispatch(getprojects());
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

  const handelpostproject = async (data) => {
    try {
      const response = await dispatch(postproject(data));
      if (response.payload?.success) {
        toast.success("Project added successfully");
      } else if (response.payload?.error) {
        toast.error(response.payload?.error);
      } else {
        toast.error("Cannot add project");
      }
    } catch (error) {
      toast.error("Some error occurred");
    }
  };

  const handelDelete = async (data) => {
    try {
      const response = await dispatch(deleteproject(data));
      if (response.meta?.requestStatus === "fulfilled") {
        toast.warning("Project deleted successfully");
      } else if (response.payload?.error) {
        toast.error(response.payload?.error);
      } else {
        toast.error("Cannot delete project");
      }
    } catch (error) {
      toast.error("Some error occurred");
    }
  };

  const handelUpdate = async (data) => {
    try {
      const response = await dispatch(updateproject(data));
      if (response.payload?.success) {
        toast.success("Project updated successfully");
      } else if (response.payload?.error) {
        toast.error(response.payload?.error);
      } else {
        toast.error("Cannot update project");
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
        handelPost={handelpostproject}
        handelDelete={handelDelete}
        handelUpdate={handelUpdate}
        postUpload={postUpload}
      />
    </>
  );
};

export default page;
