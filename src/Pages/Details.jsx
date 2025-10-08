import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { Download, Star, MessageSquare } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



const setlocal = (rdata) => {
    const data = JSON.parse(localStorage.getItem('app')) || [];
    if (!data.some(item => item === rdata)) {
        data.push(rdata);
        localStorage.setItem('app', JSON.stringify(data));
    }
}



const Details = () => {
  const [active,setactive]= useState(false);
  const data = useLoaderData();
  const { id } = useParams();
  const finalData = data.find((p) => p.id == id);

  
  const ratingData = finalData.ratings.map((r) => ({
    rating: r.name,
    users: r.count,
  }));

  return (
    <div className="bg-[#f5f5f5] py-5">
      <div className="container mx-auto">
        {/* App Card */}
        <div className="max-w-full bg-white rounded-lg shadow p-8">
          {/* Top Section */}
          <div className="flex items-center gap-6">
            <img
              src={finalData.image}
              alt={finalData.title}
              className="w-24 h-24 object-contain"
            />
            <div>
              <h1 className="md:text-3xl font-semibold text-gray-800">
                {finalData.title}
              </h1>
              <p className="text-sm text-gray-500">
                Developed by{" "}
                <span className="text-indigo-600 cursor-pointer hover:underline">
                  {finalData.companyName}
                </span>
              </p>
            </div>
          </div>

          <hr className="my-6" />

          {/* Stats + Button */}
          <div className="flex flex-start items-center flex-wrap gap-15">
            <div className="flex flex-col items-center">
              <Download size={22} className="text-green-600 mb-1" />
              <span className="text-lg font-semibold text-gray-800">
                {finalData.downloads}M
              </span>
              <span className="text-sm text-gray-500">Downloads</span>
            </div>
            <div className="flex flex-col items-center">
              <Star size={22} className="text-yellow-500 mb-1" />
              <span className="text-lg font-semibold text-gray-800">
                {finalData.ratingAvg}
              </span>
              <span className="text-sm text-gray-500">Average Ratings</span>
            </div>
            <div className="flex flex-col items-center">
              <MessageSquare size={22} className="text-purple-600 mb-1" />
              <span className="text-lg font-semibold text-gray-800">
                {(finalData.reviews / 1000).toFixed(0)}K
              </span>
              <span className="text-sm text-gray-500">Total Reviews</span>
            </div>
            <button disabled={active}  onClick={()=>{setlocal(finalData.id);setactive(true);}}  className="bg-green-500 text-white px-6 py-2 rounded-md font-medium hover:bg-green-600 transition">
              {active?'Installed':'Install Now'} ({finalData.size} MB)
            </button>
          </div>
        </div>

       
        <div className="mt-10"></div>

       
        <div className="max-w-full bg-white rounded-lg shadow p-8 mt-10">
          <h2 className="text-lg font-semibold mb-4">User Ratings</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={ratingData}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              barGap={20}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                type="number"
                tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`} 
              />
              <YAxis
                type="category"
                dataKey="rating"
                reversed 
              />
              <Tooltip
                formatter={(value) => `${(value / 1000000).toFixed(1)}M`}
              />
              <Bar dataKey="users" fill="#ff8811" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="max-w-full bg-white rounded-lg shadow p-8 mt-10">
          <h1 className="text-xl font-bold mb-2">Description</h1>
          <p>
            {finalData.description}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            reiciendis vitae, fuga, accusamus perferendis id ea libero, harum
            beatae odio odit delectus at sed. Sequi, doloribus quod tempora,
            ullam ad ut itaque sint beatae mollitia nostrum omnis, molestiae
            commodi enim!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
