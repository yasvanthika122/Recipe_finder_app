import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ user, setUser }) {
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <nav className="nav">
      <h1>Recipe Finder</h1>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <div>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
