import React from 'react';
import { FaBars } from 'react-icons/fa'; // Import the specific icon from 'react-icons/fa'
import { MdOutlineClose } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function MobileNav({ menuItems, logo, hideLeft, onClose, onOpen }) {
  return (
    <div className='h-16 flex justify-between items-center px-6 lg:px-12'>
      <a href='/'>
        <img src={logo} alt='Logo' className='h-10 w-10' />
      </a>
      <button onClick={onOpen} className='border border-primary rounded'>
        <FaBars className='h-7 w-7' />
      </button>
      <div className={`transition-all w-full h-full fixed bg-primary z-50 top-0 ${hideLeft} flex justify-center items-center`}>
        <button onClick={onClose} className='absolute right-8 top-32'>
          <MdOutlineClose className='h-7 w-7' />
        </button>
        <div>
          <ul className='flex flex-col gap-5'>
            {
              menuItems?.map((menu, index) => (
                <li key={index}>
                  <Link to={menu} className='font-medium capitalize text-secondary text-2xl'>{menu}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      
        <div>
        <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>  <br/>
        <ul className='flex items-left gap-4 font-medium mt-10'>
          <li>
            <button className='text-secondary items-left  px-2 py-2 rounded border'>Log In</button>
          </li>
          <li>
            <button className='text-secondary   px-2 py-2 rounded border'>Sign Up</button>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
}
