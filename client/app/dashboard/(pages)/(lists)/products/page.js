"use client";
import React, { useEffect, useRef, useState } from "react";
import TablePage from "./Table";
import { useDispatch, useSelector } from "react-redux";
import {
  postproduct,
  getproducts,
  deleteproduct,
  updateproduct,
} from "@/redux/slices/productSlice";
import { getsubcategorys } from "@/redux/slices/subCategorySlice";
import { toast } from "sonner";
import { getCategorys } from "@/redux/slices/categorySlice";
import {
  // percentCompletedValue,
  setOnProgressChangeCallback,
} from "@/redux/slices/productSlice";

const page = () => {
  const [postUpload, setPostUpload] = useState(0);
  const dispatch = useDispatch();
  const userRef = useRef(false);
  const [finalData, setFinalData] = useState([]);
  const { data } = useSelector((state) => state.categoryReducer);
  const { subcatData } = useSelector((state) => state.subcategoryReducer);
  const { productData, posts, loading } = useSelector(
    (state) => state.productReducer
  );

  const joinedData = finalData.map((product) => {
    const matchingCategory = data.find(
      (category) => category._id === product.categoryId
    );
    const matchingSubcategory = subcatData.find(
      (subcategory) => subcategory._id === product.subcategoryId
    );
    return {
      ...product,
      category: matchingCategory,
      subcategory: matchingSubcategory,
    };
  });

  useEffect(() => {
    if (userRef.current === false) {
      dispatch(getsubcategorys());
      dispatch(getCategorys());
      dispatch(getproducts());
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
    let finalsubcategoryData = productData.map((item, index) => ({
      ...item,
      sn: index + 1,
    }));
    setFinalData(finalsubcategoryData);
  }, [productData]);

  const handelpostproduct = async (data) => {
    try {
      const response = await dispatch(postproduct(data));
      if (response.payload?.success) {
        toast.success("Product added successfully");
      } else if (response.payload?.error) {
        toast.error(response.payload?.error);
      } else {
        toast.error("Cannot add product");
      }
    } catch (error) {
      toast.error("Some error occurred");
    }
  };

  const handelDelete = async (data) => {
    try {
      const response = await dispatch(deleteproduct(data));
      if (response.meta?.requestStatus === "fulfilled") {
        toast.warning("Product deleted successfully");
      } else if (response.payload?.error) {
        toast.error(response.payload?.error);
      } else {
        toast.error("Cannot delete product");
      }
    } catch (error) {
      toast.error("Some error occurred");
    }
  };

  const handelUpdate = async (data) => {
    try {
      const response = await dispatch(updateproduct(data));
      if (response.payload?.success) {
        toast.success("Product updated successfully");
      } else if (response.payload?.error) {
        toast.error(response.payload?.error);
      } else {
        toast.error("Cannot update product");
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
        productData={joinedData[0]?.sn ? joinedData : []}
        handelpostproduct={handelpostproduct}
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
