import React from 'react'
import FeatureCard from './FeatureCard'
import { featured } from '../utils/data/Data'
const Featured = () => {
  return (
    <div className='bg-slate-100 p-12'>
    <div className='flex flex-col justify-center items-center p-2 '>
    <h1 className='text-4xl text-cyan-950 font-semibold '>Featured Property Types</h1>
    <p className='p-2 mt-3 text-gray-500'>Find All Type of Property.</p>
    </div>
    <div className="flex flex-col gap-4 md:grid md:grid-cols-3 lg:flex lg:flex-row">
    {
        featured.map((item)=>(
            <FeatureCard cover={item.cover} name={item.name} total={item.total}/>
        ))
    }
    </div>
    
    </div>
  )
}

export default Featured