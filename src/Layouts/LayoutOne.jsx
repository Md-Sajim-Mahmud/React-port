import React from 'react'
import Nabvar from '../Components/Navbar/Nabvar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'

const LayoutOne = () => {
  return (
    <>
    <Nabvar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default LayoutOne