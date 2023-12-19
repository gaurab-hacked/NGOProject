"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "./assets/CarouselStyles.css";
import { Autoplay, Pagination } from "swiper/modules";
import EachPage from "../../common/Components/EachPage";
import image2 from "@/public/hero/image2.jpg";
import image3 from "@/public/hero/image3.jpg";
import image4 from "@/public/hero/image4.jpg";

const data = [
  {
    _id: 2,
    title: "Empower Through Tech",
    description:
      "Welcome to DES, where tech bridges gaps. Join us for a future of digital inclusion.",
    image: image2,
  },
  {
    _id: 3,
    title: "Inclusive Tech Vision",
    description:
      "Thrive in a digital age. We connect communities, inspiring growth for all.",
    image: image3,
  },
  {
    _id: 4,
    title: "Join Us, Empower Change",
    description:
      "Click by click, build a brighter future. Invest with us for global empowerment.",
    image: image4,
  },
];

const Carousel = () => {
  return (
    <>
      <div className="container-fluid mb-3">
        <div className="col-lg-12">
          <div
            id="header-carousel"
            className="carousel slide carousel-fade mb-30 mb-lg-0"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
              >
                {data.map((e) => {
                  return (
                    <SwiperSlide key={e._id}>
                      <EachPage data={e} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
