import React, { useState } from 'react'
import Navsidebar from './Navsidebar'
const Navbar = () => {
    const [toggleNav,setToggleNav]=useState(true)
    const toggleNavbarHandler=()=>{
        setToggleNav(!toggleNav)
    }
  return (
    <>
    <div className='md:hidden cursor-pointer'>
        <img className='w-12 h-12 ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN7DHy1QxOQjG-80V3URdqd_CNIzCPwfd5eQ&s' onClick={toggleNavbarHandler}/>
        {toggleNav?<Navsidebar mobileview={true}/>:null}
    </div>
    
    <div className='hidden md:block '>
            <div className='flex shadow-md justify-between sticky top-0 w-full z-10 bg-white'>
            <img className='w-20 h-20' src='https://img.freepik.com/premium-vector/house-real-estate-logo_7169-95.jpg'/>
    
            <Navsidebar mobileview={false}/>
            <div className='mr-5 align-middle'>
            <button className='px-4 py-1 text-white rounded bg-green-600 h-8 mt-4'>Sign In</button>
            </div>
            </div>
       
    </div>
    </>
  )
}

export default Navbar