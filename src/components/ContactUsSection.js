"use client";

import React from 'react';

const ContactUsSection = () => {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main container with light green background and rounded corners */}
                <div className="bg-blue-300 text-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
                    <h2 className="text-3xl font-bold mb-12 text-center">تماس با ما</h2>
                    {/* Inner container for contact details, now with updated rounded corners */}
                    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg text-right">
                        <div className="mb-6">
                            <h4 className="text-xl font-semibold text-bluck mb-2">اطلاعات تماس</h4>
                            <p className="text-gray-600 mb-1"><span className="font-semibold">تلفن:</span> 0700700378 - 0783874050 - 079620020 </p>
                            <p className="text-gray-600 mb-1"><span className="font-semibold">ایمیل:</span> info@pttoil.ir</p>
                            <p className="text-gray-600"><span className="font-semibold">آدرس:</span>افغانستان , هرات , شهرنو , نمیندگی مبلایل پی تی تی </p>
                        </div>
                        <div className="mb-6">
                            <h4 className="text-xl font-semibold text-bluck mb-2">ساعات کاری</h4>
                            <p className="text-gray-600">شنبه تا پنجشنبه: ۸ صبح تا ۵ بعدازظهر</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-bluck mb-2">ما را در شبکه‌های اجتماعی دنبال کنید</h4>
                            <div className="flex justify-start space-x-4 space-x-reverse">
                                {/* Facebook Link Updated */}
                                <a href="https://www.facebook.com/pttlubricantsafghanistan?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                </a>
                                {/* Telegram Link Added */}
                                <a href="https://t.me/+z4ZvpVHyM6E2MjZl" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-700 transition-colors duration-300">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0011.944 0zm5.642 8.246l-1.104 5.132c-.107.524-.454.655-.872.408l-2.484-1.82c-.28-.204-.532-.332-.85-.108L10.5 13.428c-.31.302-.564.4-.996.12L7.02 12.21c-.516-.216-.528-.72.12-.948l7.968-3.084c.42-.168.804.096.66.666z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUsSection;

