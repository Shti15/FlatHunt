import React from 'react'
import { price } from '../utils/data/Data'
import PricingCard from './PricingCard'
const Pricing = () => {
  return (
    <>
    <h1 className='text-4xl flex justify-center p-4 mt-6 font-bold text-cyan-950'>Select Your Package</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
        {price.map((item)=>(
          <PricingCard price={item.price} plan={item.plan} ptext={item.ptext} list={item.list}/>
        ))}
        
    </div>
    </>
  )
}

export default Pricing