"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "./assets/CarouselStyles.css";
import { Autoplay, Pagination } from "swiper/modules";
import EachPage from "../../common/Components/EachPage";

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
                <SwiperSlide>
                  <EachPage />
                </SwiperSlide>
                <SwiperSlide>
                  <EachPage />
                </SwiperSlide>
                <SwiperSlide>
                  <EachPage />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
