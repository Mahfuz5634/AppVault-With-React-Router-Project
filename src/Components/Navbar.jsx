import React from 'react';
import logo from '../assets/logo.png'
import { FaGithub } from "react-icons/fa";
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100  container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li className='font-semibold'></li>
        <li className='font-semibold'><a>Apps</a></li>
      <li className='font-semibold'><a>Installation</a></li>
      </ul>
    </div>
   <div className='flex justify-center items-center'>
     <img className='h-[40px] w-[40px] ' src={logo} alt="" />
    <a href='/' className="md:text-xl font-bold bg-gradient-to-r from-[#25194eb0] to-[#9257ef] bg-clip-text text-transparent">
  APP-VAULT
</a>

   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-2">
     <li className="font-semibold">
    <NavLink 
      to="/" 
      className={({ isActive }) => 
        isActive ? "border-2 border-black-500 " : ""
      }
    >
      Home
    </NavLink>
  </li>
  
  <li className="font-semibold">
    <NavLink 
      to="/apps" 
      className={({ isActive }) => 
        isActive ? "border-2 border-black-500 " : ""
      }
    >
      Apps
    </NavLink>
  </li>
  
  <li className="font-semibold">
    <NavLink 
      to="/installation" 
     className={({ isActive }) => 
        isActive ? "border-2 border-black-500 " : ""
      }
    >
      Installation
    </NavLink>
  </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://github.com/Mahfuz5634' className="btn bg-gradient-to-r from-[#7941e8] to-[#9257ef] text-white"><span><FaGithub /></span>Contribute</a>
  </div>
</div>
    );
};

export default Navbar;