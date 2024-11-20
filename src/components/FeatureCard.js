import React from 'react'
import { featured } from '../utils/data/Data'
import image1 from '../utils/images/h1.jpg'
const FeatureCard = ({name,total,cover}) => {
  return (
    <div className='shadow-lg h-44 w-full p-3 flex flex-col justify-center items-center m-5 bg-white hover:scale-110 transform transition duration-300 '>
        <img className='h-14 w-14 rounded-xl' src={cover}/>
        <h1>{name}</h1>
        <h1>{total}</h1>
    </div>
  )
}

export default FeatureCard