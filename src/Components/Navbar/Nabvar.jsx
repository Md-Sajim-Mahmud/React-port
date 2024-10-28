import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBarsStaggered } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import './Navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(false); // Boolean type for clarity

  const handleShow = () => {
    setShow(!show); // Toggle boolean state
  };

  return (
    <>
      <nav className='navbar'>
        <div className="container">
          <div className="nav_row flex items-center py-[28px]">
            {/* Left Section: Logo and Hamburger */}
            <div className="nav_left flex items-center gap-16">
              <img src="images/portfolio.png" alt="logo" className="logo w-[150px] mr-10" />
              <FaBarsStaggered className='text-3xl cursor-pointer lg:hidden' onClick={handleShow} />
            </div>

            {/* Small screen navigation */}
            {show && (
              <div className="small_nav">
                <ul className='flex-col  font-inter text-[16px] block lg:hidden font-medium absolute bg-[#77CDFF] w-[155px] text-center right-4 top-20 py-4 px-4 rounded-[12px] shadow-lg'>
                  <li><Link to={'#'}>About Us</Link></li>
                  <li><Link to={'#'}>Services</Link></li>
                  <li><Link to={'#'}>Portfolio</Link></li>
                  <li><Link to={'#'}>Cart (0)</Link></li>
                  <li><Link to={'#'}>React (4)</Link></li>
                  <li><Link to={'#'}>Bootstrap (10)</Link></li>
                  <li><Link to={'#'}>HTML (10)</Link></li>
                </ul>
              </div>
            )}

            {/* Right Section: Navigation Links and Button */}
            <div className="nav_right hidden lg:flex items-center  w-full">
              <ul className='flex gap-[32px] font-inter text-[16px] font-medium'>
                <li><Link to={'#'}>About Us</Link></li>
                <li><Link to={'#'}>Services</Link></li>
                <li><Link to={'#'}>Portfolio</Link></li>
                <li><Link className='flex gap-4 items-center' to={'#'}>Pages<FaAngleDown/>
                {/* =============== togoole two ======================== */}
                <ul className='flex-col gap-5 font-inter text-[16px] block lg:hidden font-medium absolute bg-[#77CDFF] w-[155px] text-center right-4 top-20 py-4 px-4 rounded-[12px] shadow-lg'>
                <li><Link to={'#'}>HTML</Link></li>
                <li><Link to={'#'}>Bootstrap</Link></li>
                <li><Link to={'#'}>React</Link></li>
                <li><Link to={'#'}>E-commerce web</Link></li>
                </ul>
                {/* ================ toggole two end =================== */}
                </Link></li>
                <li><Link to={'#'}>Cart (0)</Link></li>
              </ul>
              <button className='ml-auto active:scale-[1.1] text-[#ffffff] w-[120px] bg-[#078D84] h-[50px] rounded-[10px] font-medium'>
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
