import React from 'react';
import { useLoaderData } from 'react-router';
import download from '../assets/icon-downloads.png'
import rating from '../assets/icon-ratings.png'

const Homedata = () => {
    const datas=useLoaderData();
    return (
        <div className='bg-[#f5f5f5]'>
            <h1 className='text-center text-4xl font-bold pt-7'>Trending Apps</h1>\
            <p className='text-center  text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid grid-cols-4 gap-y-5 p-5 container mx-auto'>
            {
                datas.map(data=>(
                    <div className='hover:scale-105 shadow-sm w-[280px] h-[300px] bg-white p-10 rounded-2xl'>
                       <div className='flex flex-col items-center justify-center bg-gray-200 p-1 rounded-xl'>
                        <img className='h-[140px] w-[160px] rounded-2xl' src={data.image} alt="" />
                        </div>
                       <h1 className='text-center mt-1 font-semibold'>{data.title}</h1>
                       <div className='flex justify-between items-center mt-8'>
                         <button>
                            <div className='flex justify-center items-center gap-1'>
                                <img className='h-[20px] w-[20px]' src={download} alt="" />
                                <h1 className='font-semibold'>{data.downloads}M</h1>
                            </div>
                         </button>
                         <button>
                            <div className='flex justify-center items-center gap-1'>
                                <img className='h-[20px] w-[20px]' src={rating} alt="" />
                                <h1 className='font-semibold'>{data.ratingAvg}M</h1>
                            </div>
                         </button>
                       </div>
                    </div>
                ))
            }
        </div>
        </div>
    );
};

export default Homedata;