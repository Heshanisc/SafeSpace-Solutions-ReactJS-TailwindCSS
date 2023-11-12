import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div
      id='home'
      className='text-white'
      style={{
        backgroundImage:
          "url('https://www.wallpapertip.com/wmimgs/48-485765_cool-technology-backgrounds-light-tech-background-technology-background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='max-w-[900px] mt-[-96px] w-full h-screen mx-auto px-2  text-center flex flex-col justify-center'>
        <p className='text-[#54ddf2] md:text-xl sm:text-2xl text-md font-bold p-2'>
          EMPOWERING WITH STORAGE SOLUTIONS
        </p>
        <h1 className='md:text-7xl sm:text-5xl text-3xl font-bold md:py-6'>
          Empower your space.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-2xl text-sm font-bold py-4'>
            Adaptable storage solutions for{' '}
          </p>
          <Typed
            className='md:text-4xl sm:text-2xl text-sm font-bold md:pl-4 pl-2'
            strings={['Personal', 'Business', 'Security']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          <p className='md:text-4xl sm:text-2xl text-sm font-bold py-4'>
            &nbsp;needs.
          </p>
        </div>
        <p
          className='md:text-2xl text-md font-bold text-[#b9dfe6]'
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
        >
          Monitor your storage analytics to optimize space usage and enhance
          security for Personal, Business, and Enterprise storage.
        </p>
        <button className='bg-[#54ddf2] hover:bg-[#b9dfe6] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
