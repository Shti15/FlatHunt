import React from 'react';
import { list } from '../utils/data/Data';
import PptyCard from './PptyCard';

const RecentPptyList = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center p-8'>
        <h1 className='text-3xl sm:text-4xl text-cyan-950 font-semibold text-center'>
          Recent Property Listed
        </h1>
        <p className='p-2 mt-3 text-gray-500 text-sm sm:text-base'>
          Find All Type of Property.
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
        {list.map((item, index) => (
          <PptyCard
            key={index}
            cover={item.cover}
            name={item.name}
            location={item.location}
            category={item.category}
            price={item.price}
            type={item.type}
          />
        ))}
      </div>
    </>
  );
};

export default RecentPptyList;
