import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroSection from './HeroSection';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
    return (
       <>
        <div className='min-h-screen flex flex-col'>
           <Navbar></Navbar>
         <div className='flex-1'>
          <Outlet></Outlet>
         </div>
         <Footer></Footer>
         
        </div>
       </>
    );
};
 <ToastContainer />
export default Layout;