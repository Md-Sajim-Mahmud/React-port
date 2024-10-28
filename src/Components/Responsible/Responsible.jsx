import React from 'react'
import CountUp from 'react-countup';
const Responsible = () => {
  return (
    <>
    <section className='Responsible'>
        <div className="container">
            <div className="Responsible_row lg:py-[80px] lg:px-8 flex flex-wrap lg:flex-nowrap px-5 py-10 justify-center lg:gap-12">
                <div className="Responsible_image">
                    <img src="images/work.png" alt="working image" />
                </div>
                <div className="Responsible_text">
                    <p className='font-inter font-semibold text-center pt-4 text-[16px] text-[#1C1C57] pb-4'>About me</p>
                    <h2 className='font-inter font-medium w-full lg:w-[600px] lg:text-start text-center text-[12px] lg:text-[40px] text-[#1C1C57] pb-6'>Who is responsible for all of this impressive effort?</h2>
                    <h3 className='font-inter font-medium w-[295px] lg:w-[616px] text-[12px] lg:text-[18px] text-[#1C1C57] pb-[32px] m-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</h3>

                    <div className='flex gap-5 lg:gap-[50px]'>
                        {/* ========================== counter one ========================== */}
                        <div className='w-[] lg:w-[165px] py-[12px] px-[12px] shadow-md rounded-[10px]'>
                            <h2 className='font-inter font-medium text-[15px] lg:text-[36px] text-[#f06262] text-center'><CountUp end={100} /> <span>{'+'}</span></h2>
                            <p className='font-inter font-medium text-[10px] lg:text-[16px] text-[#1C1C57] pt-2 text-center'>Project completed</p>
                        </div>
                        {/* ========================== counter two ========================== */}
                        <div className='lg:w-[165px] py-[12px] px-[12px] shadow-md rounded-[10px]'>
                            <h2 className='font-inter font-medium lg:text-[36px] text-[#e65b5b] text-center'><CountUp end={99} /> <span>{'%'}</span></h2>
                            <p className='font-inter font-medium text-[10px] lg:text-[16px] text-[#1C1C57] pt-2 text-center'>Client satisfied </p>
                        </div>
                        {/* ========================== counter three ========================== */}
                         <div className='lg:w-[165px] py-[12px] px-[12px] shadow-md rounded-[10px]'>
                            <h2 className='font-inter font-medium lg:text-[36px] text-[#ec5c5c] text-center'><CountUp end={95} /> <span>{'%'}</span></h2>
                            <p className='font-inter font-medium text-[10px] lg:text-[16px] text-[#1C1C57] pt-2 text-center'>Design Project</p>
                        </div>               
                    </div>
                    <div className='buttons pt-[56px] lg:pb-[120px] flex justify-center'>
                    <button className='active:scale-[1.1] text-[#ffffff] bg-[#078D84] shadow-md w-[100px] h-[50px] rounded-[10px] font-medium '>About me</button>
                    </div>
                    </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Responsible