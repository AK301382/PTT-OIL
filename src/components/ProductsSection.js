"use client";
import React, { useState } from 'react';

const ProductsSection = () => {
    const [activeTab, setActiveTab] = useState('petrol');

    const productsData = {
        petrol: [
            {
                name: 'PTT Classic',
                image: '/assets/products/image10.jpg',
                description: 'مبلایل معدنی با کیفیت بالا برای خودروهای قدیمی‌تر',
                specs: ['ACEA A3/B3', 'API SL', 'SAE 20W-50'],
            },
            {
                name: 'PTT Eco Plus',
                image: '/assets/products/image10.jpg',
                description: 'مبلایل نیمه سنتتیک با فناوری صرفه‌جویی در مصرف سوخت',
                specs: ['ILSAC GF-6', 'API SP', 'SAE 10W-30'],
            },
            {
                name: 'PTT Premium Gold',
                image: '/assets/products/image10.jpg',
                description: 'مبلایل کاملاً سنتتیک برای موتر های مدرن با عملکرد بالا',
                specs: ['ACEA A3/B4', 'API SN', 'SAE 5W-40'],
            },
        ],
        diesel: [
            {
                name: 'PTT Diesel Power',
                image: '/assets/products/image10.jpg',
                description: 'مبلایل دیزلی پیشرفته برای کارایی بالا',
                specs: ['API CI-4', 'ACEA E7', 'SAE 15W-40'],
            },
            {
                name: 'PTT Diesel Max',
                image: '/assets/products/image10.jpg',
                description: 'محافظت عالی برای موتورهای دیزلی سنگین',
                specs: ['API CH-4', 'SAE 20W-50'],
            },
        ],
        motorcycle: [
            {
                name: 'PTT Challenger Scooter',
                image: '/assets/products/image10.jpg',
                description: 'مبلایل اسکوتر با فناوری پیشرفته',
                specs: ['API SL', 'JASO MB', 'SAE 10W-30'],
            },
            {
                name: 'PTT Hi-Speed 4T',
                image: '/assets/products/image10.jpg',
                description: 'عملکرد بالا برای موتورسیکلت‌های چهار زمانه',
                specs: ['API SN', 'JASO MA2', 'SAE 10W-40'],
            },
        ],
        threeWheeler: [
            {
                name: 'PTT 3 Wheeler Special',
                image: '/assets/products/image8.jpg',
                description: 'مبلایل 1 نیم لیتره مخصوص سه‌چرخه‌ها',
                specs: ['API SF-CD', 'SAE 20W-60'],
            },
        ],
    };

    const tabs = [
        { id: 'petrol', label: 'موتر های پطرولی' },
        { id: 'diesel', label: 'موتر های دیزلی' },
        { id: 'threeWheeler', label: 'سه چرخ' },
        { id: 'motorcycle', label: 'موتورسیکلت' },
    ];

    const displayProducts = productsData[activeTab];

    return (
        <section id="products" className="py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-12 text-gray-800">محصولات مبلایل PTT</h2>

                {/* Tabs */}
                 <div className="mb-10 flex justify-center px-2" dir="rtl">
                 <div className="bg-blue-300 rounded-full p-1 flex flex-wrap justify-center gap-3 sm:gap-4 max-w-full">
                  {tabs.map((tab) => (
                 <button
                  key={tab.id}
                 className={`text-xs sm:text-sm md:text-base px-1 sm:px-7 md:px-10 py-1 sm:py-2 md:py-2 font-medium rounded-full transition-all duration-300 ease-in-out focus:outline-none 
                  ${activeTab === tab.id
                    ? 'bg-white text-gray-800 shadow'
                    : 'bg-transparent text-black hover:bg-black hover:text-white'}`}
                   onClick={() => setActiveTab(tab.id)}
                 >  
                    {tab.label}
                          </button>
                           ))}
                          </div>
                            </div>

                {/* Product Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" dir="rtl">
                    {displayProducts.map((product, index) => (
                        <div
                            key={index}
                            className="bg-blue-300 rounded-2xl shadow-lg text-right overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
                        >
                            {product.image && (
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full aspect-[4/3/5] object-cover"
                                />
                            )}
                            <div className="p-4 flex flex-col flex-grow">
                                <h4 className="text-xl font-bold mb-2 text-bluck">{product.name}</h4>
                                <p className="text-gray-700 mb-4">{product.description}</p>
                                <div className="flex flex-wrap justify-end mt-auto">
                                    {product.specs.map((spec, i) => (
                                        <span
                                            key={i}
                                            className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm font-semibold ml-2 mb-2"
                                        >
                                            {spec}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
