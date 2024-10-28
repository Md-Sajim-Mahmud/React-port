import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <>
    <section className='Success'>
        <div className="container">
            <div className="text">
                <p className='font-inter font-medium text-[16px] text-[#333333] text-center pt-[100px] '>Projects</p>
            </div>
            <h2 className='font-bold font-inter text-xl lg:text-[48px] pb-6 pt-4 text-center'>Discover Our Success Stories</h2>
            <h3 className='lg:text-lg text-[16px] font-inter font-medium text-[#333333] text-center pb-[60px]'>Explore our curated collection of successful projects.</h3>

            <div className="Success_row px-6 flex flex-wrap gap-6 justify-center">
             {/* =============================== cart one ================================== */}
             <div className="cart_one w-[540px] shadow-lg className=' rounded-[30px]'">
              <img src="images/pro13.png" alt="website pic" />
              <h2 className='pt-3 font-inter font-bold text-[24px] text-[#333333] px-6'>Furniture Based figma Web Project</h2>
              <p className='font-inter font-medium text-[16px] text-[#333333] px-6 pb-[40px] pt-5'>A modern furniture website designed with HTML, showcasing stylish and functional pieces for home and office. The site features a clean layout with easy navigation for browsing furniture collections.
              </p>
              <div className='flex'>
                <ul className='w-[35px] font-bold font-inter text-[14px] flex gap-3 px-6 py-6'>
                    <li><Link to={'#'}>Html</Link></li>
                    <li><Link to={'#'}>css</Link></li>
                    <li><Link to={'#'}>JS</Link></li>
                </ul>
              </div>
              <div className='justify-center flex pb-7'>
                <Link to={'https://furniture-html.netlify.app/#'} target='_blank'>
              <button className='active:scale-[1.1] text-[#ffffff] w-[100px] bg-[#078D84] h-[40px] rounded-[10px] font-medium  '>Veiw project</button>
                </Link>
              </div>
             </div>
             {/* ================================ cart two =================================== */}
             <div className="cart_one w-[540px] shadow-lg  className=' rounded-[30px]'   ">
              <img src="images/zero2.png" alt="website pic"/>
              <h2 className='pt-5 font-inter font-bold text-[16px] lg:text-[24px] text-[#333333] px-6'>React based Figma Web Project </h2>
              <p className='font-inter font-medium text-[16px] text-[#333333] px-6 pb-[40px] pt-7'>A modern Mcap  website designed with HTML, React , Tailwind css showcasing stylish and functional pieces for home and office. The site features a clean layout with easy navigation for browsing furniture collections.</p>
              <div className='flex'>
                <ul className='font-bold font-inter text-[14px] flex gap-6 px-6 py-6'>
                    <li><Link to={'#'}>React</Link></li>
                    <li><Link to={'#'}>Tailwind css</Link></li>
                    <li><Link to={'#'}>Html</Link></li>
                </ul>
              </div>
              <div className='justify-center flex pb-7'>
                <Link to={'https://neast.netlify.app/'}>
              <button className='active:scale-[1.1] text-[#ffffff] w-[100px] bg-[#078D84] h-[40px] rounded-[10px] font-medium  '>Veiw project</button>
                </Link>
              </div>
             </div>
                  {/* ================================ cart three =================================== */}
                  <div className="cart_one w-[540px] shadow-lg  className=' rounded-[30px]'  ">
              <img src="images/zero1.png" alt="website pic"/>
              <h2 className='pt-3 font-inter font-bold text-[24px] text-[#333333] px-6 '> Html & css based Figma Web Project </h2>
              <p className='font-inter font-medium text-[16px] text-[#333333] px-6 pb-[40px] pt-7'>A modern Macp figma website designed with HTML, React , Tailwind css showcasing stylish and functional pieces for home and office. The site features a clean layout with easy navigation for browsing furniture collections.</p>
              <div className='flex'>
                <ul className=' font-bold font-inter text-[14px] flex gap-6 px-6 py-6'>
                    <li><Link to={'#'}>React</Link></li>
                    <li><Link to={'#'}>Tailwind css</Link></li>
                    <li><Link to={'#'}>Html</Link></li>
                </ul>
              </div>
              <div className='justify-center flex pb-7'>
                <Link to={'https://fashion-html.netlify.app/'}>
              <button className='active:scale-[1.1] text-[#ffffff] w-[100px] bg-[#078D84] h-[40px] rounded-[10px] font-medium  '>Veiw project</button>
                </Link>
              </div>
             </div>
                  {/* ================================ cart four =================================== */}
                  <div className="cart_one w-[540px] shadow-lg  className=' rounded-[30px]'  ">
            <img src="images/Etan.png" alt="website pic" />
              <h2 className='pt-3 font-inter font-bold text-[24px] text-[#333333] px-6'>React based Figma Web Project </h2>
              <p className='font-inter font-medium text-[16px] text-[#333333] px-6 pb-[40px] pt-7'>A modern fashion website designed with HTML, showcasing stylish and functional pieces for home and office. The site features a clean layout with easy navigation for browsing furniture collections.</p>
              <div className='flex'>
                <ul className='w-[35px] font-bold font-inter text-[14px] flex gap-6 px-6 py-6'>
                    <li><Link to={'#'}>HTml</Link></li>
                    <li><Link to={'#'}>css</Link></li>
                    <li><Link to={'#'}>JS</Link></li>
                </ul>
              </div>
              <div className='justify-center flex pb-7'>
                <Link to={'#'}>
              <button className='active:scale-[1.1] text-[#ffffff] w-[100px] bg-[#078D84] h-[40px] rounded-[10px] font-medium  '>Veiw project</button>
                </Link>
              </div>
             </div>
            </div>
            
            <div className='justify-center flex pt-[64px] pb-[100px]'>
                <Link to={'https://etan-react.netlify.app/'}>
              <button className='active:scale-[1.1] text-[#ffffff] w-[221px] bg-[#078D84] h-[50px] rounded-[10px] font-medium'>Check the full Portfolio</button>
                </Link>
              </div> 
        </div>
    </section>
    </>
  )
}

export default Success