import React from 'react';
import AwardCard from './AwardCard';
import { awards } from '../utils/data/Data';

const Awards = () => {
  return (
    <div className='bg-cyan-950 py-8'>
      {/* Header Section */}
      <div className='flex flex-col justify-center items-center px-4'>
        <h1 className='text-green-400 text-lg sm:text-xl p-2'>Our Awards</h1>
        <p className='text-white text-lg sm:text-2xl lg:text-4xl p-2 text-center'>
          Over 1,24,000+ Happy Users Being With Us, and They Still Love Our Services
        </p>
      </div>

      {/* Awards Grid Section */}
      <div className='flex flex-wrap justify-evenly px-6'>
        {awards.map((item, index) => (
          <AwardCard key={index} icon={item.icon} num={item.num} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default Awards;
