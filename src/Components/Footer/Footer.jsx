import React from 'react'
import { BiLogoGmail } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <footer>
        <div className="container">
            <div className="footer_row pt-[50px] bg-red-600 pb-[60px] flex justify-center flex-wrap lg:flex-col">
                <div className="footer_text text-2xl text-[#ffffff]  lg:flex lg:justify-between">
                    <ul className='px-10 flex gap-3 items-center'>
                        <li><Link to={'#'}><BiLogoGmail/></Link></li>
                        <li><Link to={'#'}>Gmail</Link></li>
                    </ul>
                    <ul className='px-10 flex gap-3 items-center pt-5'>
                        <li><Link to={'#'}><FaGithub/></Link></li>
                        <li><Link to={'#'}>Github</Link></li>
                    </ul>
                    <ul className='px-10 flex gap-3 items-center pt-5'>
                        <li><Link to={'#'}><FaFacebook/></Link></li>
                        <li><Link to={'#'}>Facebook</Link></li>
                    </ul>
                    <ul className='px-10 flex gap-3 items-center pt-5'>
                        <li><Link to={'#'}><FaLinkedinIn/></Link></li>
                        <li><Link to={'#'}>LinkedinIn</Link></li>
                    </ul>
                </div>
                <div className='pt-5 text-[#ffffff] text-lg text-center lg:pt-7'>
                    <p>@cpoy right 2024</p>
                </div>

            </div>
        </div>
    </footer>
    
    </>
  )
}

export default Footer