import React from 'react'

const PptyCard = ({ cover, name, location, category, price, type }) => {
  return (
    <div className='w-full sm:w-72 md:w-80 lg:w-96 h-auto  justify-center m-4 shadow-lg '>
      <img className='w-full h-40 sm:h-48 md:h-56 object-cover' src={cover} alt={name} />
      <div className='p-3'>
        <span
          className={
            category === "For Rent"
              ? 'bg-red-200 text-red-600 font-medium px-2 py-1 rounded-sm'
              : 'bg-green-200 text-green-700 font-medium px-2 py-1 rounded-sm'
          }
        >
          {category}
        </span>
        <h1 className='font-semibold mt-2 text-lg sm:text-xl'>{name}</h1>
        <div>
          {/* <img /> */}
          <h1 className='text-gray-500 font-medium text-sm sm:text-base'>{location}</h1>
        </div>
      </div>
      <div className='flex flex-row p-3 justify-between items-center'>
        <button className='bg-green-500 px-4 py-2 rounded-md text-white font-bold text-sm sm:text-base'>
          {price} / sqft
        </button>
        <h1 className='font-normal mx-2 text-sm sm:text-base'>{type}</h1>
      </div>
    </div>
  );
};

export default PptyCard;
