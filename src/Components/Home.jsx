import React from 'react';
import HeroSection from './HeroSection';
import Homedata from '../Pages/Homedata';
import { useLoaderData } from 'react-router';

const Home = () => {
    const datas = useLoaderData();
    return (
        <div>
            <HeroSection />
            <Homedata datas={datas}></Homedata>
        </div>
    );
};

export default Home;