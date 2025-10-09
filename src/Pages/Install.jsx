import { ArrowDown, Download, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import NotFound from "./NotFound";
import {toast, ToastContainer} from "react-toastify";

const Install = () => {
  const data = useLoaderData();
  const [installData, setinstallData] = useState([]);

  useEffect(() => {
    const saveIds = JSON.parse(localStorage.getItem("app")) || [];
    const filtered = data.filter((item) => saveIds.includes(item.id));
    setinstallData(filtered);
  }, [data]);

  const highLow = () => {
    const sorted = [...installData].sort((a, b) => b.downloads - a.downloads);
    setinstallData(sorted);
  };

  const lowhigh=()=>{
    const sorted =[...installData].sort((a,b)=>a.downloads-b.downloads);
    setinstallData(sorted);
  }

 const uninstall = (id) => {
  const filtered = installData.filter((item) => item.id !== id);
  setinstallData(filtered);
  const remainingIds = filtered.map(item => item.id);
  localStorage.setItem('app', JSON.stringify(remainingIds));
  toast("Uninstall Succesfully")
  
};



  return (
    <div className="bg-[#f5f5f5] py-5">
      <h1 className="text-2xl font-bold text-center">Your Installed Apps</h1>
      <p className="opacity-90 text-center mb-4">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="flex justify-between items-center container mx-auto mb-2">
        <div>
          <h1 className="text-xl font-bold">
            ({installData.length}) Apps Found
          </h1>
        </div>
        <div>
          {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
          {/* For TSX uncomment the commented types below */}
          <button
            className="btn"
            popoverTarget="popover-1"
            style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
          >
            Sort By Downloads: <ArrowDown />
          </button>

          <ul
            className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
            popover="auto"
            id="popover-1"
            style={
              { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
            }
          >
            <li onClick={highLow}>
              <a>High-Low</a>
            </li>
            <li onClick={lowhigh}>
              <a>Low-High</a>
            </li>
          </ul>
        </div>
      </div>
      {installData.length === 0 ? (
        <NotFound></NotFound>
      ) : (
        installData.map((item) => (
          <div
            key={item.id}
            className="container mx-auto h-[120px] bg-white p-5 rounded-xl mt-2"
          >
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <div>
                  <img className="h-[80px] w-[80px]" src={item.image} alt="" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">{item.title}</h1>
                  <div className="flex items-center gap-4 text-sm text-gray-700 mt-1">
                    <p className="flex items-center gap-1">
                      <Download className="w-4 h-4 text-gray-500" />
                      {item.downloads}M
                    </p>

                    <p className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      {item.ratingAvg}
                    </p>

                    <p className="flex items-center gap-1">
                      <span className="w-4 h-4"></span>{" "}
                      {/* Optional empty space if needed */}
                      {item.size}MB
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <button onClick={()=>uninstall(item.id)} className="btn bg-[#00d390] text-white">
                  Uninstall
                </button>
              </div>
            </div>
          </div>
        ))
      )}
        <ToastContainer />
    </div>
  );
};

export default Install;
