import React from "react";
import Carousel from "./Carousel";
import Category from "./Category";
import PopularProducts from "./PopularProducts";
import Product from "./Product";
import Reatured from "./Reatured";
import CardCollection from "./CardsCollection";

const Home = () => {
  return (
    <div className="mx-2">
      <Carousel />
      <Category />
      <hr />
      <PopularProducts />
      <hr />
      <Product />
      <hr />
      <Reatured />
      <hr />
      <Product />
      <hr />
      <CardCollection />
      <hr />
      <Product />
    </div>
  );
};

export default Home;
