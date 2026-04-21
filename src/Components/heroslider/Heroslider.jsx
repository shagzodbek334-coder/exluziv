import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./stiyel.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { TbBrandApple } from "react-icons/tb";
import { FaChevronRight } from "react-icons/fa6";

export default function App() {
    return (

        <div className="fll">


            <div className="sortirovka">
                <ul>
                    <li>Woman’s Fashion <FaChevronRight /></li>
                    <li>Men’s Fashion <FaChevronRight /></li>
                    <li>Electronics</li>
                    <li>Home & Lifestyle</li>
                    <li>Medicine</li>
                    <li>Sports & Outdoor</li>
                    <li>Baby’s & Toys</li>
                    <li>Groceries & Pets</li>
                    <li>Health & Beauty</li>
                </ul>

            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide><div className="fl">

                    <div className="info">
                        <div className="apple">
                            <span><TbBrandApple /></span>
                            <h3>
                                iPhone 14 Seriesy
                            </h3>
                        </div>

                        <h1>
                            Up to 10% off Voucher
                        </h1>

                    </div>
                    <img src="/imgs/salom.png" alt="" />

                </div></SwiperSlide> <SwiperSlide><div className="fl">

                    <div className="info">
                        <div className="apple">
                            <span><TbBrandApple /></span>
                            <h3>
                                iPhone 14 Seriesy
                            </h3>
                        </div>

                        <h1>
                            Up to 10% off Voucher
                        </h1>

                    </div>
                    <img src="/imgs/salom.png" alt="" />

                </div></SwiperSlide> <SwiperSlide><div className="fl">

                    <div className="info">
                        <div className="apple">
                            <span><TbBrandApple /></span>
                            <h3>
                                iPhone 14 Seriesy
                            </h3>
                        </div>

                        <h1>
                            Up to 10% off Voucher
                        </h1>

                    </div>
                    <img src="/imgs/salom.png" alt="" />

                </div></SwiperSlide> <SwiperSlide><div className="fl">

                    <div className="info">
                        <div className="apple">
                            <span><TbBrandApple /></span>
                            <h3>
                                iPhone 14 Seriesy
                            </h3>
                        </div>

                        <h1>
                            Up to 10% off Voucher
                        </h1>

                    </div>
                    <img src="/imgs/salom.png" alt="" />

                </div></SwiperSlide> <SwiperSlide><div className="fl">

                    <div className="info">
                        <div className="apple">
                            <span><TbBrandApple /></span>
                            <h3>
                                iPhone 14 Seriesy
                            </h3>
                        </div>

                        <h1>
                            Up to 10% off Voucher
                        </h1>

                    </div>
                    <img src="/imgs/salom.png" alt="" />

                </div></SwiperSlide> <SwiperSlide><div className="fl">

                    <div className="info">
                        <div className="apple">
                            <span><TbBrandApple /></span>
                            <h3>
                                iPhone 14 Seriesy
                            </h3>
                        </div>

                        <h1>
                            Up to 10% off Voucher
                        </h1>

                    </div>
                    <img src="/imgs/salom.png" alt="" />

                </div></SwiperSlide>
                <SwiperSlide><div className="fl">

                    <div className="info">
                        <div className="apple">
                            <span><TbBrandApple /></span>
                            <h3>
                                iPhone 14 Seriesy
                            </h3>
                        </div>

                        <h1>
                            Up to 10% off Voucher
                        </h1>

                    </div>
                    <img src="/imgs/salom.png" alt="" />

                </div></SwiperSlide>
            </Swiper>
        </div>

    );
}