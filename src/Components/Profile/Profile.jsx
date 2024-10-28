import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <>
    <section className='Profile_link'>
        <div className="container">
            <div className="profile_row py-6 lg:py-[80px] px-2 lg:px-[80px] bg-[#3E3E70] lg:flex lg:gap-[64px]">
                <div className="profile_text">
                    <h2 className='w-full lg:w-[320px] text-[#ffffff] lg:font-bold'>Trusted by top companies<br/> worldwide</h2>
                </div>
                <div className="profile_icons">
                    <ul className='flex flex-warp gap-3 pt-5 lg:gap-[40px] items-center'>
                        <li><Link to={'#'}> <img src="images/Terra.png" alt="logo" /> </Link></li>
                        <li><Link to={'#'}> <img src="images/Vector.png" alt="logo" /> </Link></li>
                        <li><Link to={'#'}> <img src="images/LinkedIn.png" alt="logo" /> </Link></li>
                        <li><Link to={'#'}> <img src="images/GenZ.png" alt="logo" /> </Link></li>
                        <li><Link to={'#'}> <img src="images/Trace.png" alt="logo" /> </Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Profile