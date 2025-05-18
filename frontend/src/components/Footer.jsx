



import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* Left Section */}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
         <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias incidunt, sint magni voluptas distinctio sed officia at soluta vitae autem minima delectus fuga a. Consectetur possimus nemo reiciendis illo. Doloribus odio suscipit omnis, at consectetur natus voluptate dicta eligendi repellendus rem voluptatem exercitationem placeat, et, ratione veritatis repudiandae iste doloremque.</p>
        </div>

        {/* Center Section */}

        <div >
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* Right Section */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>8965326589</li>
            <li>Skteam@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center' >&copy;  2024 ZEE MEDICAL INSTITUTE All Rights Reserved.</p>
      </div>
   </div>
  );
};

export default Footer;


