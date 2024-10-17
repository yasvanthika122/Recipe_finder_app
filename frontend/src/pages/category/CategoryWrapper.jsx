import React from 'react'
import { Link } from 'react-router-dom'
function CategoryItem({name,href,backgroundColor,color})
{
    const style={
        backgroundColor:backgroundColor,
        color:color,
        borderColor:color
    }
    return(
        <div>
        <Link to={href} className='rounded-full'>
        <div className='uppercase px-6 py-2 text-center rounded-full' style={style}>{name}</div>
        </Link>
        </div>
    )
}
function CategoryList()
{
    return(
        <>
        <div className='flex flex-wrap items-center justify-center gap-8'>
       <CategoryItem name="maincourse" href="/categories/maincourse" backgroundColor="#f0f5c4" color="#59871f"/>

       <CategoryItem name="breakfast" href="/categories/breakfast" backgroundColor="#efedfa" color="#59871f"/>

       <CategoryItem name="lunch" href="/categories/lunch" backgroundColor="#C5A9CD" color="#59871f"/>

       <CategoryItem name="desserts" href="/categories/desserts" backgroundColor="#31D4DB" color="#59871f"/>

       <CategoryItem name="snacks" href="/categories/snacks" backgroundColor="#F7BEBE" color="#59871f"/>
        </div>
        </>
    )
}
const CategoryWrapper=()=> {
  return (
    <div className='flex flex-wrap items-center justify-center gap-8 mt-5'>
         <CategoryList/>
    </div>
  )
}
export default CategoryWrapper
