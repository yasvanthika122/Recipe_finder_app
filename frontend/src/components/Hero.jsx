import React from 'react'
import { IoSearch } from "react-icons/io5";

export default function Hero() {
  return (
    <div>
      <h1 className='font-bold capitalize mt-4 mb-10 text-3xl xl:text-6xl text-center'>
        Welcome to Food Recipe <span className='font-bold capitalize text-btnColor'>App</span>
      </h1>
      
      <form action="/search" className="relative flex items-center">
        <IoSearch className='absolute left-3 w-5 h-5 text-neutral-300'/>
        <input 
          name='query'
          type='search'
          placeholder='Search here...'
          id="search"
          required
          className="pl-10 border border-neutral-300 p-2 rounded-md outline-none w-96 items-center"
        />
      </form>
      
    </div>
  )
}
