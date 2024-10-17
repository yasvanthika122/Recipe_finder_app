import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock } from "react-icons/fa";

const categoryStyles = {
  maincourse: { backgroundColor: "#f0f5c4", color: "#59871f" },
  breakfast: { backgroundColor: "#efedfa", color: "#3c3a8f" },
  lunch: { backgroundColor: "#e5f7f3", color: "#1f8787" },
  desserts: { backgroundColor: "#e8f5fa", color: "#397a9e" },
  snacks: { backgroundColor: "#feefc9", color: "#d16400" },
  default: { backgroundColor: "#f0f5c4", color: "#59871f" }
};

const getCategoryStyle = (category) => {
  return categoryStyles[category.toLowerCase()] || categoryStyles.default;
};

const Card = ({ item }) => {
  const categoryStyle = getCategoryStyle(item?.category);

  return (
    <div className='container mx-auto flex justify-center md:justify-start'>
      <div className='max-w-sm w-full'>
        <div className='bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg overflow-hidden'>
          <img src={item?.thumbnail_image} alt="thumbnail_image" className='w-full h-48 object-cover' />
          <div className='py-6 px-5 bg-white'>
            <Link to={`/items/${item._id}`}>
              <h1 className="text-gray-700 font-bold text-2xl mb-8 hover:text-gray-900 hover:cursor-pointer">
                {item?.name}
              </h1>
            </Link>
            <div className='flex justify-between items-center flex-wrap'>
              <button className='mt-6 py-2 px-4 font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300' style={categoryStyle}>
                {item?.category}
              </button>
              <div className='flex items-center py-2 mt-6'>
                <FaClock />
                <span className='ml-1'>{item?.more[0]?.prep_time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
