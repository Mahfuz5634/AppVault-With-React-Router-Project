import React from 'react';
import download from '../assets/icon-downloads.png'
import rating from '../assets/icon-ratings.png'
import { NavLink } from 'react-router';

const Homedata = ({datas}) => {
    return (
        <div className='bg-[#f5f5f5]'>
            <h1 className='text-center text-2xl md:text-4xl font-bold pt-7'>Trending Apps</h1>
            <p className='text-center  text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-y-5 p-15 md:p-5 container mx-auto'>
            {
                datas.map(data=>(
                  <NavLink to={`/details/${data.id}`}>
                    <div className='hover:scale-105 shadow-sm w-[280px] h-[300px] bg-white p-10 rounded-2xl'>
                       <div className='flex flex-col items-center justify-center bg-gray-200 p-1 rounded-xl'>
                        <img className='h-[140px] w-[160px] rounded-2xl' src={data.image} alt="" />
                        </div>
                       <h1 className='text-center mt-1 font-semibold'>{data.title}</h1>
                       <div className='flex justify-between items-center mt-6'>
                         <button>
                            <div className='flex justify-center items-center gap-1 bg-[#f1f5e8] p-2 rounded-sm'>
                                <img className='h-[20px] w-[20px]' src={download} alt="" />
                                <h1 className='font-semibold text-[#00d390] text-[13px]'>{data.downloads}M</h1>
                            </div>
                         </button>
                         <button>
                            <div className='flex justify-center items-center gap-1 bg-[#fff0e1] p-2 rounded-sm'>
                                <img className='h-[20px] w-[20px]' src={rating} alt="" />
                                <h1 className='font-semibold text-[#ff8811]  text-[13px]'>{data.ratingAvg}M</h1>
                            </div>
                         </button>
                       </div>
                       
                    </div>
                  </NavLink>
                ))
            }
        </div>
         <div className='container mx-auto flex justify-center items-center py-4'>
            <NavLink to='/apps'> <button className='btn bg-gradient-to-r from-[#703ae6d6] to-[#9257ef] text-white'>Show All</button></NavLink>
         </div>
        </div>
    );
};

export default Homedata;