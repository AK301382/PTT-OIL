"use client";

import React from 'react';

const SelectionGuideSection = () => {
    const selectionSteps = [
        { title: 'به دفترچه راهنمای وسیله ای خود مراجعه کنید', description: 'سازنده وسیله نقلیه بهترین توصیه‌ها را برای گرید و استاندارد مبلایل مناسب وسیله شما ارائه می‌دهد.' },
        { title: 'گرید ویسکوزیته مناسب را انتخاب کنید', description: 'گرید ویسکوزیته (مانند 5W-30) نشان‌دهنده غلظت روغن در دماهای مختلف است. عدد اول (مثلاً 5W) نشان‌دهنده روانی در دمای پایین و عدد دوم (مثلاً 30) نشان‌دهنده غلظت در دمای کارکرد موتور است.' },
        { title: 'به استانداردهای کیفیت توجه کنید', description: 'استانداردهایی مانند API (آمریکا)، ACEA (اروپا) و ILSAC نشان‌دهنده سطح کیفیت و عملکرد روغن موتور هستند. هرچه حرف آخر الفبا در این استانداردها بالاتر باشد، روغن جدیدتر و پیشرفته‌تر است.' },
        { title: 'شرایط کارکرد وسیله را در نظر بگیرید', description: 'برای رانندگی در شرایط سخت (دمای بالا، بار سنگین، ترافیک شهری) روغن‌های با کیفیت بالاتر و مقاوم‌تر در برابر حرارت مناسب‌تر هستند.' },
        { title: 'سن و کارکرد وسیله را لحاظ کنید', description: 'موترهای قدیمی‌تر ممکن است به روغن‌های با ویسکوزیته بالاتر نیاز داشته باشند، در حالی که موتر جدید معمولاً با روغن‌های سنتتیک با ویسکوزیته پایین‌تر بهتر کار می‌کنند.' },
    ];

    const quickSelectionTable = [
        { vehicleType: 'موترهای سواری پطرولی جدید', conditions: 'معتدل تا گرم', recommendation: 'PTT Premium Gold 5W-40', features: 'سنتتیک کامل، محافظت عالی، عملکرد بالا' },
        { vehicleType: 'موترهای سواری پطرولی', conditions: 'سرد تا معتدل', recommendation: 'PTT Eco Plus 10W-30', features: 'نیمه سنتتیک، صرفه‌جویی در مصرف سوخت' },
        { vehicleType: 'موترهای قدیمی‌تر', conditions: 'گرم', recommendation: 'PTT Classic 20W-50', features: 'معدنی، مناسب موتورهای با کارکرد بالا' },
        { vehicleType: 'موترهای دیزلی سبک', conditions: 'متنوع', recommendation: 'PTT Diesel Max 5W-30', features: 'سنتتیک، سازگار با DPF، محافظت از توربوشارژر' },
        { vehicleType: 'موترهای سنگین', conditions: 'متنوع', recommendation: 'PTT Turbo Power 15W-40', features: 'مقاومت حرارتی بالا، محافظت از موتور تحت بار' },
        { vehicleType: 'موتورسیکلت‌های ', conditions: 'متنوع', recommendation: 'PTT Moto Sport 10W-50', features: 'سنتتیک، مناسب دورهای بالا، محافظت از گیربکس' },
        { vehicleType: 'سه چرخه ها ', conditions: 'متنوع', recommendation: 'PTT D3-HV 1/5Litres 20W-60', features: 'سنتتیک، محافظت عالی، عملکرد بالا،صرفه‌جویی در مصرف سوخت' },
    ];

    return (
        <section id="selection-guide" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-blue-300 text-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
                    <h2 className="text-3xl font-bold mb-12 text-center">راهنمای انتخاب مبلایل مناسب</h2>

                    <div className="mb-16">
                        <h3 className="text-2xl font-semibold mb-8 text-gray-700 text-center">چگونه مبلایل مناسب را انتخاب کنیم؟</h3>
                        <div className="space-y-8">
                            {selectionSteps.map((step, index) => (
                                <div key={index} className="p-6 bg-white rounded-xl shadow-lg flex items-start">
                                    <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center ml-4 font-bold flex-shrink-0 text-lg">{index + 1}</div>
                                    <div className="flex-grow">
                                        <h4 className="text-xl font-semibold text-bluck mb-2">{step.title}</h4>
                                        <p className="text-gray-600 text-base leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* جدول سریع انتخاب مبلایل */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-8 text-center text-gray-700">جدول راهنمای سریع انتخاب مبلایل </h3>
                        <div className="overflow-x-auto bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                            <table className="min-w-full text-sm sm:text-base">
                                <thead className="border-b-2 border-gray-200">
                                    <tr>
                                        <th className="py-2 sm:py-3 px-2 sm:px-4 text-right font-semibold text-gray-600 whitespace-nowrap">نوع وسیله نقلیه</th>
                                        <th className="py-2 sm:py-3 px-2 sm:px-4 text-right font-semibold text-gray-600 whitespace-nowrap">شرایط آب و هوایی</th>
                                        <th className="py-2 sm:py-3 px-2 sm:px-4 text-right font-semibold text-gray-600 whitespace-nowrap">توصیه مبلایل PTT</th>
                                        <th className="py-2 sm:py-3 px-2 sm:px-4 text-right font-semibold text-gray-600 whitespace-nowrap">ویژگی‌ها</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {quickSelectionTable.map((row, index) => (
                                        <tr key={index} className={`${index % 2 === 0 ? 'bg-blue-100/50' : 'bg-white'} hover:bg-blue-200/100 transition-colors duration-200`}>
                                            <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-700 border-b border-gray-200">{row.vehicleType}</td>
                                            <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-700 border-b border-gray-200">{row.conditions}</td>
                                            <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-700 border-b border-gray-200">{row.recommendation}</td>
                                            <td className="py-2 sm:py-3 px-2 sm:px-4 text-gray-700 border-b border-gray-200">{row.features}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SelectionGuideSection;
