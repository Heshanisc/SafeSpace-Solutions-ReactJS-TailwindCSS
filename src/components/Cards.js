import React from 'react';
import Personal from '../assets/personal.png';
import Business from '../assets/business.png';
import Enterprise from '../assets/enterprise.png';

const cards = [
  {
    img: Personal,
    type: 'Personal Plan',
    price: '$99 per month',
    capacity: '250 GB Storage',
    users: '1 Granted User',
    dataTransferLimit: 'Up to 1 GB per transfer',
  },
  {
    img: Business,
    type: 'Business Plan',
    price: '$249 per month',
    capacity: '1 TB Storage',
    users: '5 Granted Users',
    dataTransferLimit: 'Up to 5 GB per transfer',
  },
  {
    img: Enterprise,
    type: 'Enterprise Plan',
    price: 'Custom Quote',
    capacity: 'Scalable Storage',
    users: 'Custom Granted Users',
    dataTransferLimit: 'Custom Data Transfer Limit',
  },
];

const Cards = () => {
  return (
    <div id='pricing' className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {cards.map((card, index) => (
          <div
            className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'
            key={index}
          >
            <img
              className='w-20 mx-auto mt-[-3rem] bg-white'
              src={card.img}
              alt='Personal'
            />
            <h2 className='text-2xl font-bold text-center py-8 text-[#236483]'>
              {card.type}
            </h2>
            <p className='text-center text-4xl font-bold'>{card.price}</p>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>{card.capacity}</p>
              <p className='py-2 border-b mx-8'>{card.users}</p>
              <p className='py-2 border-b mx-8'>{card.dataTransferLimit}</p>
            </div>
            <button className='bg-[#236483] hover:bg-white border-2 border-[#236483] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white hover:text-[#236483]'>
              Start Trial
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
