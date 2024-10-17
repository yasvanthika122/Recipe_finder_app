import React from 'react';

const FeaturedSection = () => {
  return (
    <div className='overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-20 gap-12 px-5 lg:px-10'>
      <div className='relative'>
        <img src="/OIP.jpg" alt="Featured" className='w-full h-auto rounded-lg' />
      </div>
      <div className='text-start sm:w-1/2'>
        <h2 className='text-3xl font-semibold text-secondary sm:text-5xl sm:leading-relaxed'>Pineapple & Smoked Jackfruit Pizza</h2>
        <p className="text-xl mt-4 text-[#5c5c5c]">
          Discover the perfect blend of sweet and smoky with our Pineapple & Smoked Jackfruit Pizza. 
          This unique recipe combines the tropical sweetness of pineapple with the rich, meaty texture 
          of smoked jackfruit, all atop a crispy, homemade pizza crust.
        </p>
        <p className="text-xl mt-4 text-[#5c5c5c]">
          Topped with a tangy barbecue sauce, fresh cilantro, and a sprinkle of red chili flakes for 
          a kick, this pizza is a must-try for those who love to explore new and exciting flavors. 
          It's not just a meal, it's an experience!
        </p>
        <div className='mt-12 inline-flex'>
          <button className='py-4 px-8 hover:bg-btnColor text-secondary hover:text-white w-full transition ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none rounded-lg'>View Recipe</button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedSection;
