"use client";

import React, { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            <a href="#" className="flex items-center py-4 px-2">
                                <img src="/assets/ptt_logo_blue_bg.jpg" alt="Logo" className="h-8 w-8 mr-2" />
                                <span className="font-semibold text-gray-500 text-lg">PTT Lubricants</span>
                            </a>
                        </div>
                        <div className="hidden md:flex items-center space-x-1">
                            <a href="#home" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-400 transition duration-300">خانه</a>
                            <a href="#products" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-400 transition duration-300">محصولات</a>
                            <a href="#advantages" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-400 transition duration-300">مزایا</a>
                            <a href="#selection-guide" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-400 transition duration-300">راهنمای انتخاب</a>
                            <a href="#contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-400 transition duration-300">تماس با ما</a>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="outline-none mobile-menu-button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <svg className="w-6 h-6 text-gray-500 hover:text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isMobileMenuOpen ? '' : 'hidden'} mobile-menu`}>
                <ul className="">
                    <li><a href="#home" className="block text-sm px-2 py-4 text-gray-700 hover:bg-green-500 hover:text-white transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>خانه</a></li>
                    <li><a href="#products" className="block text-sm px-2 py-4 text-gray-700 hover:bg-green-500 hover:text-white transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>محصولات</a></li>
                    <li><a href="#advantages" className="block text-sm px-2 py-4 text-gray-700 hover:bg-green-500 hover:text-white transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>مزایا</a></li>
                    <li><a href="#selection-guide" className="block text-sm px-2 py-4 text-gray-700 hover:bg-green-500 hover:text-white transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>راهنمای انتخاب</a></li>
                    <li><a href="#contact" className="block text-sm px-2 py-4 text-gray-700 hover:bg-green-500 hover:text-white transition duration-300" onClick={() => setIsMobileMenuOpen(false)}>تماس با ما</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
