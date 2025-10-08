import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroSection from './HeroSection';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
       <>
         <Navbar></Navbar>
         <div className='w-full md:min-h-[600px]'>
          <Outlet></Outlet>
         </div>
         <Footer></Footer>
       </>
    );
};

export default Layout;