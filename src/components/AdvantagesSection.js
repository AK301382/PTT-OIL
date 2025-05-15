"use client";

import React from 'react';

const AdvantagesSection = () => {
    const advantages = [
        {
            title: 'محافظت برتر از موتور',
            description: 'فرمولاسیون پیشرفته با افزودنی‌های ضد سایش که از قطعات موتور در برابر فرسایش محافظت می‌کند و عمر موتور را افزایش می‌دهد.',
        },
        {
            title: 'کاهش مصرف سوخت',
            description: 'روان‌کاری بهینه قطعات موتور باعث کاهش اصطکاک و در نتیجه کاهش مصرف سوخت و آلایندگی می‌شود.',
        },
        {
            title: 'پاکیزگی موتور',
            description: 'افزودنی‌های شوینده و پاک‌کننده قوی که رسوبات و لجن را از بین می‌برد و موتور را تمیز نگه می‌دارند.',
        },
        {
            title: 'عملکرد در دماهای مختلف',
            description: 'حفظ خواص روان‌کنندگی در دماهای بسیار پایین و بالا، تضمین استارت آسان در زمستان و محافظت کامل در تابستان.',
        },
        {
            title: 'فواصل تعویض طولانی‌تر',
            description: 'پایداری حرارتی و اکسیداسیون بالا که باعث می‌شود روغن خواص خود را برای مدت طولانی‌تری حفظ کند.',
        },
        {
            title: 'سازگاری با سیستم‌های کنترل آلایندگی',
            description: 'فرمولاسیون سازگار با کاتالیست‌ها و فیلترهای ذرات دیزل (DPF) که عملکرد سیستم‌های کنترل آلایندگی را حفظ می‌کند.',
        },
    ];

    return (
        <section id="advantages" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-blue-300 text-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
                    <h2 className="text-3xl font-bold mb-12 text-center">مزایای استفاده از  مبلایل PTT</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-right">
                        {advantages.map((advantage, index) => (
                            <div key={index} className="p-6 bg-white rounded-xl shadow-lg flex flex-col">
                                <div className="flex items-center mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3 text-blue-500  flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <h4 className="text-xl font-semibold text-bluck">{advantage.title}</h4>
                                </div>
                                <p className="text-gray-600 text-base leading-relaxed flex-grow">{advantage.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AdvantagesSection;

