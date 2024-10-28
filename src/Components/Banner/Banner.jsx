import React from 'react'

const Banner = () => {
  return (
    <>
    <section className='Banner'>
     <div className="container">
    
        <div className="banner_row bg-[#F6F8FF]">
        <div className='flex justify-between pt-[24px] lg:pt-[56px] px-3 lg:px-7 '>
        <img className='lg:w-[22px] lg:h-[29px] w-4 h-4' src="images/dot.png" alt="dot" />
        <img className='lg:w-[22px] lg:h-[29px] w-4 h-4' src="images/38.png" alt="square" />
        </div>
        <div className="banner_row2 pt-[22px] px-5 lg:px-20 flex flex-wrap flex-col-reverse lg:flex-row-reverse gap-10 lg:gap-[80px]">

            <div className="banner_text">
                <p className=' text-sm w-[250px] font-medium lg:text-[16px] font-inter text-[#3E3E70] pb-6'>Hi there,My name is Sajim Mahmud Juboraj</p>
                <h1 className='w-[250px] lg:w-[584px] pb-6 text-[#1C1C57] font-meduim lg:text-[56px] font-inter'>Do Your Work with a Creative Front-end Developer</h1>
                <h2 className='text-[#3E3E70] font-medium text-[18px] w-full lg:text-lg lg:w-[584px] font-inter'>Create stunning portfolios and websites with Font-end web developer and React developer.</h2>
                <div className='flex flex-wrap gap-4 text-[16px] font-medium font-inter pt-10 pb-[75px]'>
            <button className= 'ml-5 lg:ml-0 active:scale-[1.1] text-[#ffffff] w-[80px] lg:w-[100px] bg-[#078D84] h-[50px] rounded-[10px] font-medium '>Hire Me</button>
            <button className='ml-5 lg:ml-0 active:scale-[1.1] text-[#078D84] border-[#078D84] border-[1px] w-[80px] lg:w-[100px] h-[50px] rounded-[10px] font-medium '>Portfolio</button>
                </div>
            </div>
            <div className="banner_image">
              <img className='hidden lg:block' src="images/Fill.png" alt="fill" />
              
              <img className=' rounded-[12px] pt-2 -center' src="images/sajim.png" alt="my picture" />
            </div>
        </div>
        </div>
     </div>
    </section>
    </>
  )
}

export default Banner