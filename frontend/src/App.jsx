import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
export default function App() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Header/>

      <Outlet/>
      </div>
  )
}
