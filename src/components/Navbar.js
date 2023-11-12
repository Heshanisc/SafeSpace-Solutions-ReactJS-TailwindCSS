import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link as ScrollLink } from 'react-scroll';

const navLinks = [
  {
    link: 'Home',
    id: 'home',
  },
  {
    link: 'About',
    id: 'about',
  },
  {
    link: 'Newsletter',
    id: 'newsletter',
  },
  {
    link: 'Pricing',
    id: 'pricing',
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1
        className='w-full md:text-3xl sm:text-xl text-lg font-bold text-[#54ddf2]'
        style={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.8)' }}
      >
        SafeSpace Solutions
      </h1>
      <ul
        className='hidden md:flex text-lg'
        style={{ textShadow: '4px 4px 4px rgba(0, 0, 0, 0.8)' }}
      >
        {navLinks.map((link, index) => (
          <ScrollLink
            key={index}
            to={link.id}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li className='p-4 hover:cursor-pointer'>{link.link}</li>
          </ScrollLink>
        ))}
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? 'fixed top-0 left-0 w-[60%] h-full border-r border-r-[#236483] bg-[#236483] ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <h1 className='w-full text-lg font-bold text-white m-4'>
          {' '}
          SafeSpace <br />
          Solutions
        </h1>
        <ul className='uppercase'>
          {navLinks.map((link, index) => (
            <ScrollLink
              key={index}
              to={link.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <li className='p-4 border-b border-b-white' onClick={handleNav}>
                {link.link}
              </li>
            </ScrollLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
