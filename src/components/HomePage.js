"use client";

import React from 'react';
import Slider from "react-slick";

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
    // Sample data for the slider - REPLACE WITH YOUR ACTUAL DATA
    const sliderData = [
        {
            image: "/assets/slider/image5.jpg", // Example path, replace with your image
        },
        {
            image: "/assets/slider/image4.jpg", // Example path, replace with your image
        },
        {
            image: "/assets/slider/image3.jpg", // Example path, replace with your image
        },
        {
            image: "/assets/slider/image2.jpg", // Example path, replace with your image
        },
        {
            image: "/assets/slider/image1.jpg", // Example path, replace with your image
        },

    ];

    const settings = {
        dots: true, // Show dot indicators for navigation
        infinite: true,
        speed: 700, // Transition speed
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500, // Change slide every 3.5 seconds
        rtl: true, // Enable Right-to-Left
        fade: false,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', // Smoother fade transition
        pauseOnHover: true,
    };

    return (
        <>
            {/* Advanced Image Slider Section */}
            <div className="w-full mb-10 relative min-h-[300px] sm:min-h-[500px] md:min-h-[600px]" dir="rtl">
                <Slider {...settings}>
                    {sliderData.map((slide, index) => (
                        <div key={index} className="relative aspect-square sm:h-[500px] sm:aspect-auto md:h-[600px] md:aspect-auto">
                            <img src={slide.image} alt={slide.productName} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-4 sm:p-10">
                                <h2 className="text-white text-lg sm:text-3xl font-bold mb-1 sm:mb-2">{slide.brand}</h2>
                                <p className="text-white text-base sm:text-xl">{slide.productName}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Original Home Page Content (below the slider) - Styled with light green background and rounded corners */}
            <section id="home-content" className="py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-blue-300 text-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold mb-2 text-gray-800">مبلایل پی تی تی PTT Lubricants</h2>
                            <h3 className="text-2xl mb-8 text-gray-600">
                                محافظت کامل از موتر، سه چرخ و موتور با فرمولاسیون پیشرفته و کیفیت جهانی
                            </h3>
                            <div className="mb-16">
                                <a
                                    href="#selection-guide"
                                    className="bg-gray-800 text-white font-bold py-4 px-8 rounded-2xl hover:bg-gray-800 transition duration-300 mx-2 mb-2 sm:mb-0 inline-block"
                                >
                                    راهنمایی انتخاب
                                </a>
                                <a
                                    href="#products"
                                    className="bg-gray-800 text-white font-bold py-4 px-6 rounded-2xl hover:bg-gray-800 transition duration-300 mx-2 inline-block"
                                >
                                    مشاهده محصولات
                                </a>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                                <h4 className="text-xl font-bold mb-2 text-bluck">صرفه اقتصادی</h4>
                                <p className="text-gray-600">
                                    افزایش طول عمر موتور، کاهش مصرف سوخت و تعویض طولانی‌تر
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                                <h4 className="text-xl font-bold mb-2 text-bluck">استاندارد جهانی</h4>
                                <p className="text-gray-600">
                                    ساخت مشهورترین کمپنی‌های کشور تایلند با بیش از ۴۰ سال سابقه حضور در بازارهای جهانی
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                                <h4 className="text-xl font-bold mb-2 text-bluck">عملکرد برتر</h4>
                                <p className="text-gray-600">
                                    فرمولاسیون پیشرفته برای محافظت از موتور در سخت‌ترین شرایط کاری و دمایی
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;

