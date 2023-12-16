"use client";
import React, { useEffect, useRef, useState } from "react";
import TablePage from "./Table";
import { useDispatch, useSelector } from "react-redux";
import {
  postblog,
  getblogs,
  deleteblog,
  updateblog,
} from "@/redux/slices/blogSlice";
import { getsubcategorys } from "@/redux/slices/subCategorySlice";
import { toast } from "sonner";
import { getCategorys } from "@/redux/slices/categorySlice";
import {
  // percentCompletedValue,
  setOnProgressChangeCallback,
} from "@/redux/slices/blogSlice";

const page = () => {
  const [postUpload, setPostUpload] = useState(0);
  const dispatch = useDispatch();
  const userRef = useRef(false);
  const [finalData, setFinalData] = useState([]);
  const { data } = useSelector((state) => state.categoryReducer);
  const { subcatData } = useSelector((state) => state.subcategoryReducer);
  const { blogData, posts, loading } = useSelector(
    (state) => state.blogReducer
  );

  const joinedData = finalData.map((blog) => {
    const matchingCategory = data.find(
      (category) => category._id === blog.categoryId
    );
    const matchingSubcategory = subcatData.find(
      (subcategory) => subcategory._id === blog.subcategoryId
    );
    return {
      ...blog,
      category: matchingCategory,
      subcategory: matchingSubcategory,
    };
  });

  useEffect(() => {
    if (userRef.current === false) {
      dispatch(getsubcategorys());
      dispatch(getCategorys());
      dispatch(getblogs());
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
    let finalsubcategoryData = blogData.map((item, index) => ({
      ...item,
      sn: index + 1,
    }));
    setFinalData(finalsubcategoryData);
  }, [blogData]);

  const handelpostblog = async (data) => {
    try {
      const response = await dispatch(postblog(data));
      if (response.payload?.success) {
        toast.success("blog added successfully");
      } else if (response.payload?.error) {
        toast.error(response.payload?.error);
      } else {
        toast.error("Cannot add blog");
      }
    } catch (error) {
      toast.error("Some error occurred");
    }
  };

  const handelDelete = async (data) => {
    try {
      const response = await dispatch(deleteblog(data));
      if (response.meta?.requestStatus === "fulfilled") {
        toast.warning("blog deleted successfully");
      } else if (response.payload?.error) {
        toast.error(response.payload?.error);
      } else {
        toast.error("Cannot delete blog");
      }
    } catch (error) {
      toast.error("Some error occurred");
    }
  };

  const handelUpdate = async (data) => {
    try {
      const response = await dispatch(updateblog(data));
      if (response.payload?.success) {
        toast.success("blog updated successfully");
      } else if (response.payload?.error) {
        toast.error(response.payload?.error);
      } else {
        toast.error("Cannot update blog");
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
        blogData={joinedData[0]?.sn ? joinedData : []}
        handelpostblog={handelpostblog}
        handelDelete={handelDelete}
        handelUpdate={handelUpdate}
        categoryDataDropdown={data}
        subcategoryDataDropdown={subcatData}
        postUpload={postUpload}
      />
    </>
  );
};

export default page;
