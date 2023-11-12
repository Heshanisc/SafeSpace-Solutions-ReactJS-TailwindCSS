import React from 'react';

const Newsletter = () => {
  return (
    <div id='newsletter' className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Get Storage Tips & Tricks!
          </h1>
          <p>
            Unlock valuable tips and tricks to optimize your storage space
            efficiently.
          </p>
          <p>Sign up for our newsletter and stay in the know.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-[#54ddf2] hover:bg-[#b9dfe6] w-[200px] rounded-md font-medium my-6 ml-4 px-6 py-3 text-black'>
              Notify Me
            </button>
          </div>
          <p>
            We prioritize the protection of your storage data. Take a moment to
            review our <span className='text-[#54ddf2]'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
