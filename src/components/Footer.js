import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from 'react-icons/fa';

const links = [
  {
    main: 'Services',
    sub: [
      'Personal Storage',
      'Business Storage',
      'Climate-Controlled Units',
      'Security Features',
    ],
  },
  {
    main: 'Support',
    sub: ['Pricing', 'Docs', 'Guides', 'API status'],
  },
  {
    main: 'About Us',
    sub: ['Our Story', 'Mission and Values', 'Testimonials', 'Blog'],
  },
  {
    main: 'Legal and Policies',
    sub: [
      'Terms of Service',
      'Privacy Policy',
      'Refund Policy',
      'Accessibility',
    ],
  },
];

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-[#b9dfe6]'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#54ddf2]'>
          SafeSpace Solutions
        </h1>
        <p className='py-4 text-white'>
          Your Trusted Partner for Secure and Flexible Storage. Providing peace
          of mind with state-of-the-art facilities and personalized storage
          options. Safeguarding your belongings, we offer convenience and
          reliability for all your storage needs.
        </p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        {links.map((link, index) => (
          <div key={index}>
            <h6 className='text-medium text-white'>{link.main}</h6>
            <ul>
              {link.sub.map((sublink, index) => (
                <li className='py-2 text-sm' key={index}>
                  {sublink}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
