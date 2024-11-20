import React from 'react'
import heroimg from '../utils/images/hero.jpg'
const Hero = () => {
  return (
    <div className='relative'>
    <img className='w-full h-[60vh] sm:h-[100vh] md:h-screen object-cover' alt='hero img' src={heroimg}/>
    
    <div className='absolute inset-0 flex items-center justify-center'>
      
      <div className='bg-slate-50 w-11/12 md:w-3/4 lg:w-1/2 p-4 rounded-md flex flex-wrap justify-between items-center gap-4'>
      <div>
        <h1>City/Street</h1>
      <input type='text' placeholder='Location' className=' w-full sm:w-auto flex-1 p-2 rounded-md mt-1' />
      </div>
      <div>
        <h1>Property Type</h1>
      <input type='text' placeholder='Property Type'  className='w-full sm:w-auto flex-1 p-2 rounded-md mt-1' />
      </div>
      <div>
        <h1>Price Range</h1>
      <input type='text' placeholder='Price Range'  className='w-full sm:w-auto flex-1 p-2 rounded-md mt-1' />
      </div>
      <button className='bg-green-600 p-4 rounded-md text-white'>Search</button>
        
        </div>
       
    </div>
  </div>
  )
}

export default Hero