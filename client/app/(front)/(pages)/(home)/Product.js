import React from "react";
import EachProduct from "../../common/Components/EachProduct";

const Product = () => {
  return (
    <div className="container-fluid mt-5 mb-6">
      <div className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <div className="pr-3 !text-2xl">Featured Products</div>
      </div>
      <div className="grid-containerCard xl:mx-1 mx-1">
        <EachProduct />
        <EachProduct />
        <EachProduct />
        <EachProduct />
        <EachProduct />
        <EachProduct />
        <EachProduct />
        <EachProduct />
        <EachProduct />
        <EachProduct />
      </div>
    </div>
  );
};

export default Product;
