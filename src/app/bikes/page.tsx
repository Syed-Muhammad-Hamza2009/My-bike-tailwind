
import Image from 'next/image';
import React from 'react'

const page = () => {
  const bikeData =[
    { id: 1, name: 'BMW-NINE T', price: 1500000, description: 'Luxry Bike', image: '/bmw-ninet.png' },
    { id: 2, name: 'BMW', price: 800000, description: 'Luxry Bike', image: '/bmw.png' },
    { id: 3, name: 'DUKE', price: 110000, description: 'Luxry Bike', image: '/duke.png' },
    { id: 4, name: 'HARLEY DAVIDSON', price: 50000, description: 'Affordable and reliable', image: '/harleydavidson.png' },
    { id: 5, name: 'HERITAGE CLASSIC', price: 70000, description: 'Sporty and stylish', image: '/heritage.png' },
    { id: 6, name: 'KAWASAKI NINJA H2r', price: 60000, description: 'Sports bike', image: '/kawasaki.png' },
  ];

  return (
    <div className='bikes grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10'>
      {bikeData.map(bike => (
        <div key={bike.id} className='watch-card bg-white p-5 rounded-md shadow-md text-center'>
          <Image src={bike.image} alt={bike.name} className='w-full rounded-md transition-transform duration-300 transform hover:scale-110 '></Image>
          <h3 className='mt-4 text-2xl font-bold'>{bike.name}</h3>
          <p className='text-gray-500'>{bike.description}</p>
          <div className='price text-blue-500 text-xl font-semibold mt-2'>${bike.price}</div>
          <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded:md'>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default page;