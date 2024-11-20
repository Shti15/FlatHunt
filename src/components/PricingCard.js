import React from 'react'

const PricingCard = ({plan,price,ptext,list}) => {
  return (
    <div className=' w-full sm:w-72 md:w-80 lg:w-96 h-auto  justify-evenly m-4 shadow-lg p-3'>
        <div className='flex flex-col justify-center items-center p-3'>
        <h1 className='font-semibold text-2xl'>{plan}</h1>
        <h1 className={plan==="Basic"?" text-green-600 font-semibold text-6xl mt-3":" text-orange-600 font-semibold text-6xl mt-3"}>${price}</h1>
        <p className='font-light text-xl mt-3'>{ptext}</p>
        </div>
     
        {
            list.map((item)=>(
                <li className='m-3'>{item.text}</li>
            ))
        }
        
    </div>
  )
}

export default PricingCard