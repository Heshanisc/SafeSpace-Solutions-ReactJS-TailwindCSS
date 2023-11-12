import React from 'react';
import Laptop from '../assets/laptop.jpg';

const About = () => {
  return (
    <div id='about' className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='laptop' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#236483] font-bold'>
            OUR COMMITMENT TO SECURE AND FLEXIBLE STORAGE
          </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            About SafeSpace Solutions
          </h1>
          <p className='py-4'>
            Welcome to SafeSpace Solutions, where we take pride in being your
            trusted partner for secure and flexible storage. Our commitment
            revolves around providing you with peace of mind through
            state-of-the-art facilities and personalized storage options. At
            SafeSpace, safeguarding your belongings is our top priority. We
            understand that each item holds unique value, and that's why we
            offer not just storage solutions, but a promise of convenience and
            reliability for all your storage needs. Whether you're storing
            personal belongings or business assets, SafeSpace Solutions is
            dedicated to delivering a secure and tailored storage experience you
            can depend on.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
