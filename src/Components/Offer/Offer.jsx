import React from 'react'

const Offer = () => {
  return (
    <>
    <section className='Offer'>
     <div className="container">
        <div className="offer_row lg:py-[80px] px-[20px] bg-[#F6F8FF]">
            <div className="offer_text flex lg:justify-between flex-wrap items-center">
                <div className='text1'>
                    <h3 className='font-inter font-medium text-[14px] lg:text-[16px] pb-4 text-black'>Our Services</h3>
                    <h2 className='font-inter font-medium text-[18px] lg:text-[40px] pb-4 text-[#1C1C57] w-full lg:w-[600px]'>Take a look at the variety of services I offer.</h2>
                </div>
                <div className="text2">
                    <h2 className='font-inter font-medium text-[14px] lg:text-[18px] text-black w-full lg:w-[600px] pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero </h2>
                </div>
            </div>
        </div>
        <div className="row2">
            <div className="cart_row bg-[#F6F8FF] px-5 flex flex-wrap gap-5 justify-between ">
            {/* ================================= cart one ========================================= */}
                <div className='cart1 w-full lg:w-[280px] shadow-md bg-[#ffffff] py-[32px] px-[24px] rounded-[16px]'>
                <img src="images/1.png" alt="logo" />
                <h2 className=' font-inter font-medium text-[16px] lg:text-[24px] text-[#333333] pt-6'>UIUX Design</h2>
                <p className='font-inter font-medium text-[14px] lg:text-[16px] text-[#3E3E70] w-full lg:w-[248px] pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
            {/* ================================= cart two ========================================= */}
                <div className='cart2 w-full lg:w-[280px] shadow-md bg-[#ffffff] py-[32px] px-[24px] rounded-[16px]'>
                <img src="images/2.png" alt="logo" />
                <h2 className=' font-inter font-medium text-[16px] lg:text-[24px] text-[#333333] pt-6'>Webflow devlopment</h2>
                <p className='font-inter font-medium text-[14px] lg:text-[16px] text-[#3E3E70] w-full lg:w-[248px] pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
            {/* ================================= cart three =======================================*/}
                <div className='cart3 w-full lg:w-[280px] shadow-md bg-[#ffffff] py-[32px] px-[24px] rounded-[16px]'>
                <img src="images/3.png" alt="logo" />
                <h2 className=' font-inter font-medium text-[16px] lg:text-[24px] text-[#333333] pt-6'>Marketing</h2>
                <p className='font-inter font-medium text-[14px] lg:text-[16px] text-[#3E3E70] w-full lg:w-[248px] pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
            {/* ================================= cart four =========================================*/}
                <div className='cart4 w-full lg:w-[280px] shadow-md bg-[#ffffff] py-[32px] px-[24px] rounded-[16px]'>
                <img src="images/4.png" alt="logo" />
                <h2 className=' font-inter font-medium text-[16px] lg:text-[24px] text-[#333333] pt-6'>Branding</h2>
                <p className='font-inter font-medium text-[14px] lg:text-[16px] text-[#3E3E70] w-[248px] pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
            </div>
            <div className="buttons bg-[#F6F8FF] justify-center pb-[80px] flex gap-4 pt-[48px]">
            <button className='active:scale-[1.1] text-[#ffffff] w-[100px] bg-[#078D84] h-[50px] rounded-[10px] font-medium '>Hire Me</button>
            <button className=' active:scale-[1.1] text-[#078D84] border-[#078D84] border-[1px] w-[100px] h-[50px] rounded-[10px] font-medium '>Portfolio</button>
            </div>
            <img src="images/shadow.svg" alt="shadow" />
        </div>
     </div>
    </section>
    
    
    </>
  )
}

export default Offer