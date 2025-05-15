"use client";

import React, { useState } from 'react';

const FaqSection = () => {
    const faqData = [
        {
            question: 'هر چند وقت یکبار باید مبلایل را تعویض کنم؟',
            answer: 'توصیه می‌شود به نوع وسیله نقلیه خود نگاه کنید، البته فواصل تعویض روغن بسته به نوع وسیله نقلیه، نوع روغن و شرایط رانندگی متفاوت است. به طور کلی، برای مبلایل های معدنی هر ۵۰۰۰ تا ۷۰۰۰ کیلومتر و برای مبلایل های سنتتیک هر ۱۰۰۰۰ تا ۱۵۰۰۰ کیلومتر یا هر ۶ تا ۱۲ ماه یکبار توصیه می‌شود.'
        },
        {
            question: 'تفاوت مبلایل سنتتیک و معدنی چیست؟',
            answer: 'روغن موتور معدنی از نفت خام تصفیه شده تولید می‌شود، در حالی که روغن سنتتیک در آزمایشگاه و با استفاده از فرآیندهای شیمیایی پیشرفته ساخته می‌شود. روغن‌های سنتتیک معمولاً عملکرد بهتری در دماهای بسیار بالا و پایین دارند، پایداری اکسیداسیون بهتری داشته و فواصل تعویض طولانی‌تری را ارائه می‌دهند.'
        },
        {
            question: 'آیا می‌توانم مبلایل (روغن ها) با گرید مختلف را با هم مخلوط کنم؟',
            answer: 'به طور کلی توصیه نمی‌شود روغن‌های با گرید یا برندهای مختلف را با هم مخلوط نکنید، زیرا ممکن است افزودنی‌های آن‌ها با یکدیگر سازگار نباشند و عملکرد روغن کاهش یابد. همیشه از یک نوع و گرید روغن برای وسیله نقلیه خود استفاده کنید.'
        },
        {
            question: 'چرا مبلایل موتر کم می‌شود؟',
            answer: 'کاهش سطح روغن موتور می‌تواند به دلایل مختلفی از جمله نشتی روغن از واشرها یا درزگیرها، سوختن روغن در محفظه احتراق به دلیل فرسودگی رینگ‌های پیستون یا سوپاپ‌ها، و یا تبخیر طبیعی روغن در دماهای بالا رخ دهد. بررسی منظم سطح روغن و رفع هرگونه نشتی ضروری است.'
        },
        {
            question: 'آیا مبلایل  PTT برای موتر های هیبریدی مناسب است؟',
            answer: 'بله، PTT طیف وسیعی از  مبلایل ها را ارائه می‌دهد که برای انواع مختلف موتر ها، موتور سیکلت ها , و سه چرخ ها که مخصوص به خود وسیله نقلیه فرموله شده‌اند. ارائه میدهد برای انتخاب مبلایل مناسب برای وسیله خود، به توصیه‌های سازنده وسیله و یا راهنمای انتخاب محصول PTT مراجعه کنید.'
        }
    ];

    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <section id="faq" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main container with light green background and rounded corners */}
                <div className="bg-blue-300 text-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
                    <h2 className="text-3xl font-bold mb-12 text-center">سوالات متداول</h2>
                    <div className="space-y-6">
                        {faqData.map((faq, index) => (
                            <div
                                key={index}
                                className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out 
                            ${index % 2 === 0 ? 'bg-white' : 'bg-blue-200/100'}`}
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex justify-between items-center p-5 sm:p-6 focus:outline-none text-right"
                                >
                                    <span className={`text-lg font-semibold ${index % 2 === 0 ? 'text-bluck-500' : 'text-bluck-600'}`}>{faq.question}</span>
                                    <svg
                                        className={`w-6 h-6 text-bluck-500 transform transition-transform duration-300 ${openAccordion === index ? 'rotate-180' : ''}`}
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>
                                {openAccordion === index && (
                                    <div className={`p-5 sm:p-6 border-t ${index % 2 === 0 ? 'border-gray-200' : 'border-emerald-200/80'}`}>
                                        <p className={`text-gray-700 text-base leading-relaxed`}>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FaqSection;

