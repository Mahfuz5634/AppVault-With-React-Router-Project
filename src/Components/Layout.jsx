import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroSection from './HeroSection';

const Layout = () => {
    return (
       <>
         <Navbar></Navbar>
         <HeroSection></HeroSection>
         <Footer></Footer>
       </>
    );
};

export default Layout;