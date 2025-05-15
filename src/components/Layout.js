"use client";

import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar.js is in the same directory

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            {/* You can add a Footer component here if needed */}
        </>
    );
};

export default Layout;
