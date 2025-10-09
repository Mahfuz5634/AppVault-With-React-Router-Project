import React from 'react';
import error from '../assets/error-404.png'
import { NavLink } from 'react-router';
const Error = () => {
    return (
        <div className='container mx-auto flex flex-col justify-center items-center mb-4'>
          <img className='w-[400px] h-[400px]' src={error} alt="" />
          <h1 className='text-3xl font-bold'>Oops, page not found!</h1>
          <p className='opacity-90'>The page you are looking for is not available.</p>
         <NavLink to={'/'}> <button className='hover:scale-105 btn mt-2 bg-gradient-to-r from-[#7941e8] to-[#9257ef] text-white'>Go Home</button></NavLink>
        </div>
    );
};

export default Error;