import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroSection from './HeroSection';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
       <>
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
       </>
    );
};

export default Layout;