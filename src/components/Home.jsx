import React from 'react';
import './Home.css';
import SignUp from './SignUp';

const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <img src="https://images3.alphacoders.com/807/thumb-1920-807704.jpg" alt="Food Image" />
      </div>
      <div className="right">
        <h2>Welcome to Recipe Finder</h2>
        <p>Find and share amazing recipes!</p>
        <SignUp />
      </div>
    </div>
  );
};

export default Home;
