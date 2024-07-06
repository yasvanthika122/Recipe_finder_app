import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import SignUp from './SignUp';
import SignIn from './SignIn';

const Home = ({ setUser }) => {
  return (
    <div className="home">
      <div className="left">
        <img src="https://sp.yimg.com/ib/th?&id=ODL.aff1f246250f6cd77ff1f78530b98fed&w=200&h=107&c=4&dpr=2&rs=1" alt="Food Image" />
      </div>
      <div className="right">
        <h2>Welcome to Recipe Finder</h2>
        <p>Find and share amazing recipes!</p>
        <Link to="/signin"><button>Sign In</button></Link>
        <Link to="/signup"><button>Sign Up</button></Link>
      </div>
    </div>
  );
}

export default Home;
