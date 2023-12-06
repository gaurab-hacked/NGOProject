"use client";
import React, { useEffect, useRef } from "react";
import Linechart from "./Linechart";
import { useDispatch, useSelector } from "react-redux";
import { getSixMonthDataChartThreeDiff } from "@/redux/slices/statisticsSlice";

const page = () => {
  const dispatch = useDispatch();

  const { sixMonthDataThreeDiff } = useSelector(
    (state) => state.statisticsReducer
  );

  const userRef = useRef(false);

  useEffect(() => {
    if (userRef.current === false) {
      dispatch(getSixMonthDataChartThreeDiff());
    }
    return () => {
      userRef.current = true;
    };
  }, []);
  return (
    <>
      <Linechart data={sixMonthDataThreeDiff} />
    </>
  );
};

export default page;
