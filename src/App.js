import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddRecipe from './components/AddRecipe';
import DisplayRecipes from './components/DisplayRecipes';
import './components/styles.css';
import Home from './components/Home';
function App() {
  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    if (storedUser) setUser(storedUser);
    setRecipes(storedRecipes);
  }, []);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  return (
    <div>
      <Home/>
      
    </div>
  );
}

export default App;
