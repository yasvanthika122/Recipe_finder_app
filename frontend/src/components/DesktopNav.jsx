import React from 'react'
import { Link } from 'react-router-dom'
export default function DesktopNav({menuItems,logo}) {
  return (
    <div className='h-16 flex justify-between items-center px-6 lg:px-12'>
        <a href='/' className='flex items-center'>
             <img src={logo} alt="image"  className='h-10 w-10'></img>
        </a>
        <ul className='flex gap-7'>  {          
                menuItems?.map((menu,index) => 
                (
                       <li key={index}>
                        <Link to='/' className='font-medium capitalize text-secondary'>{menu}</Link>
                       </li>
                 ))
                }
        </ul>
        <ul className='flex items-center gap-4 font-medium'>
             <li>
              <button className='text-Secondary px-4 py-2 rounded'>Log In</button>
             </li>
             <li>
              <button className='text-Secondary px-4 py-2 rounded'>Sign Up</button>
             </li>
        </ul>
    </div>
  )
}
