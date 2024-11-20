import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

const AwardCard = ({icon,num,name}) => {
  return (
    <div className='p-5 mx-4 my-16'>
         <FontAwesomeIcon icon={icon} className='text-white h-14'/>
        <h1 className='text-white text-4xl font-bold'>{num}</h1>
        <h1 className='text-gray-400'>{name}</h1>
    </div>
  )
}

export default AwardCard