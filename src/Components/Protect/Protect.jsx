import React from 'react'

const Protect = () => {
  return (
    <>
    <section className='Protect'>
        <div className="container">
        <div  className=' rotate-[180deg] flex justify-self-'>
            <img src="images/shadow.svg" alt="shadow" />
            </div>
            <div className="Protect_row lg:py-[100px] px-[50px]  bg-[#F6F8FF]">
                <div className="Protect_text">
                 <p className='pb-4 '>My Experience</p>
                 <h2 className='pb-6 lg:w-[600px] w-full font-inter font-medium lg:text-[40px] text-[16px] text-[#1C1C57]'>Protect Your Portfolio with Airfolio's Security Features</h2>
                 <h3 className='pb-9 lg:w-[600px] w-full font-inter font-medium lg:text-[18px] text-[14px] text-[#1C1C57]'>At Airfolio, we prioritize the security of your portfolio. With advanced encryption and secure servers, you can trust that your work is safe with us.</h3>
                </div>
            {/* ================================ for flex ========================================== */}
             <div className='flex justify-between flex-wrap flex-col-reverse lg:flex-row items-center'>
                <div className="web_profile flex flex-wrap gap-5 w-full lg:w-[600px]">
                    {/* ======================== web_profile one ============================*/}
                    <div className='lg:py-4 py-3 px-3 lg:px-4 w-full lg:w-[288px] h-[240px] shadow-lg rounded-[10px]'>
                     <img src="images/Frame 66.png" alt="facebook" />
                     <h2 className='text-[14px] lg:text-[20px] pt-4 w-[200px] lg:w-[256px] font-inter font-medium text-[#1C1C57]'>Webflow developments</h2>
                     <span className='font-inter pb-4 font-medium text-[#1C1C57] text-[10px] lg:text-[16px] '>May 12 2023 Present </span>
                     <p className='w-full lg:w-[256px] font-inter lg:pt-5 pt-3  font-medium text-[#3E3E70] lg:text-[16px] text-[14px]'>All data is encrypted to ensure the confidentiality and integrity of your portfolio.</p>
                    </div>
                {/* ================================= web_profile two ========================== */}
                <div className='lg:py-4 py-3 px-3  lg:px-4 w-full lg:w-[288px]  h-[240px] shadow-lg rounded-[10px]'>
                     <img src="images/Frame 66(1).png" alt="twitter" />
                     <h2 className='lg:text-[20px] text-[14px] lg:pt-4 pt-3 lg:w-[256px] font-inter font-medium text-[#1C1C57]'>UI / UX Designer</h2>
                     <span className='font-inter pb-4 font-medium text-[#1C1C57] text-[10px] lg:text-[16px] '>June 18 2022 -Dec 2023</span>
                     <p className=' w-full lg:w-[256px] font-inter lg:pt-5 pt-4 font-medium text-[#3E3E70] text-[14px] lg:text-[16px]'>All data is encrypted to ensure the confidentiality and integrity of your portfolio.</p>
                    </div>
                    {/* ========================== web profile three ========================= */}
                <div className='lg:py-4 py-3 px-3 lg:px-4 w-full lg:w-[288px]  h-[240px] shadow-lg rounded-[10px]'>
                     <img src="images/Frame 66(2).png" alt="slack" />
                     <h2 className='lg:text-[20px] text-[14px] pt-3 lg:pt-4 w-[200px] lg:w-[256px] font-inter font-medium text-[#1C1C57]'>Head of Product Design</h2>
                     <span className='font-inter pb-4 font-medium text-[#1C1C57] lg:text-[16px] text-[10px] '>June 18 2021 -August 2023</span>
                     <p className='w-full lg:w-[256px] font-inter pt-3 lg:pt-5 font-medium text-[#3E3E70] text-[14px] lg:text-[16px]'>All data is encrypted to ensure the confidentiality and integrity of your portfolio.</p>
                    </div>
                {/* ================================= web_profile four ========================== */}
                <div className='lg:py-4 py-3 px-3 lg:px-4 w-full lg:w-[288px]  h-[240px] shadow-lg rounded-[10px]'>
                     <img src="images/Frame 66(3).png" alt="figma" />
                     <h2 className='text-[14px] lg:text-[20px] pt-4 lg:w-[256px] w-full font-inter font-medium text-[#1C1C57]'>Product Designer</h2>
                     <span className='font-inter pb-4 font-medium text-[#1C1C57] text-[10px] lg:text-[16px] '>June 18 2020 -Dec 2022</span>
                     <p className='w-full lg:w-[256px] font-inter pt-5 font-medium text-[#3E3E70] text-[14px] lg:text-[16px]'>All data is encrypted to ensure the confidentiality and integrity of your portfolio.</p>
                    </div>      
                </div>
                <div className="protect_image">
                    <img className='w-[480px] h-[500px]' src="images/work2.png" alt="working image" />
                </div>
             </div>
            
            </div>
            <img className='t-[5px]' src="images/shadow.svg" alt="shadow" />
                
            
        </div>
    </section>
    
    
    </>
  )
}

export default Protect