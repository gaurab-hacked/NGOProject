"use client";
import React, { useEffect, useRef, useState } from "react";
import TableOrder from "./TableOrder";
import { useDispatch, useSelector } from "react-redux";
import {
  postOrder,
  getOrders,
  deleteOrder,
  updateOrderSuccess,
  updateOrdernotify,
} from "@/redux/slices/orderSlice";
import { toast } from "sonner";
import { getproducts } from "@/redux/slices/productSlice";
import { getUsers } from "@/redux/slices/authSlice";
import { getdetail } from "@/redux/slices/userDetailSlice";

const DeliveryProduct = ({ pageFrom }) => {
  const dispatch = useDispatch();
  const userRef = useRef(false);
  const [finalData, setFinalData] = useState([]);
  const { orderData, posts, loading } = useSelector(
    (state) => state.orderReducer
  );
  const { productData } = useSelector((state) => state.productReducer);
  const { allUserData } = useSelector((state) => state.authReducer);
  const { detailData } = useSelector((state) => state.userDetailReducer);

  const joinedData = orderData.map((order) => {
    const matchingProducts = productData.find((e) => e._id === order.productId);
    const matchingUsers = allUserData.find((e) => e._id === order.userId);
    const matchingUsersDetal = detailData.find((e) => e._id === order.detailId);
    return {
      ...order,
      product: matchingProducts,
      user: matchingUsers,
      userDetail: matchingUsersDetal,
    };
  });

  useEffect(() => {
    if (userRef.current === false) {
      dispatch(getOrders());
      dispatch(getproducts());
      dispatch(getUsers());
      dispatch(getdetail());
    }
    return () => {
      userRef.current = true;
    };
  }, []);

  const handelpostOrder = async (data) => {
    try {
      const response = await dispatch(postOrder(data));
      if (response.payload?.success) {
        toast.success("Product ordered successfully");
      } else if (response.payload?.error) {
        toast.error(response.payload?.error);
      } else {
        toast.error("Cannot order product");
      }
    } catch (error) {
      toast.error("Some error occurred");
    }
  };

  const handelDelete = async (data) => {
    try {
      const response = await dispatch(deleteOrder(data));
      if (response.meta?.requestStatus === "fulfilled") {
        toast.warning("Order deleted successfully");
      } else if (response.payload?.error) {
        toast.error(response.payload?.error);
      } else {
        toast.error("Cannot delete order");
      }
    } catch (error) {
      toast.error("Some error occurred");
    }
  };

  const handelUpdate = async (data) => {
    try {
      const response = await dispatch(updateOrderSuccess(data));
      if (response.payload?.data?.orderSuccess === 1) {
        toast.success("Order delivered successfully");
      } else if (response.payload?.data?.orderSuccess === 2) {
        toast.success("Order finished successfully");
      } else if (response.payload?.data?.orderSuccess === 0) {
        toast.warning("Delivery went back to orders");
      } else if (response.payload?.error) {
        toast.error(response.payload?.error);
      } else {
        toast.error("Cannot update banner");
      }
    } catch (error) {
      toast.error("Some error occurred");
    }
  };
  const handelUpdatenotify = async (data) => {
    try {
      const response = await dispatch(updateOrdernotify(data));
      // console.log(response);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const finalPageData =
    pageFrom.toLowerCase() === "order"
      ? joinedData.filter((e) => Number(e.orderSuccess) === 0)
      : pageFrom.toLowerCase() === "delivery"
      ? joinedData.filter((e) => Number(e.orderSuccess) === 1)
      : joinedData.filter((e) => Number(e.orderSuccess) === 2);
  useEffect(() => {
    let finalorderData = finalPageData.map((item, index) => ({
      ...item,
      sn: index + 1,
    }));
    setFinalData(finalorderData);
  }, [
    finalPageData.length > 0,
    allUserData.length > 0,
    detailData.length > 0,
    productData.length > 0,
    orderData,
  ]);

  return (
    <>
      <TableOrder
        orderData={finalData[0]?.sn ? finalData : []}
        handelpostOrder={handelpostOrder}
        handelDelete={handelDelete}
        handelUpdate={handelUpdate}
        categoryDataDropdown={productData}
        pageFrom={pageFrom}
        pageType={true}
      />
    </>
  );
};

export default DeliveryProduct;
