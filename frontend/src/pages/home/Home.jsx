import React from 'react'
import Hero from '../../components/Hero'
import CategoryWrapper from '../category/CategoryWrapper'
import FeaturedSection from './FeaturedSection'
import LatestRecipe from './LatestRecipe'

import CompanyLogo from './CompanyLogo'
import Footer from '../../components/Footer'
import Subscription from './Subscription'
export default function Home() {
  return (
    <div className='container mx-auto'>
        <div className='flex flex-col justify-center items-center w-full py-20'>
        <Hero/>
        <CategoryWrapper/>
        </div>
        <FeaturedSection/>
        <LatestRecipe/>
        <Subscription/>
        <CompanyLogo/>
        <Footer/>
    </div>
  )
}
