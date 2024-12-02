// Importing React
import React from 'react';
import '../styles/colorTheme.css';
import '../styles/imageScales.css';
import CoverImg from "../assests/homeCoverImg.jpg"

// Content arrow function returns us the 'Content' for the Home component
const Home = () => {
  return (
    <div>
        <img src={CoverImg} alt="Image of food" className="window-width"/>
        <h1 className="text-center">Recipe Categories</h1>
    </div>
  );
}

// exporting module to be used in app.js
export default Home;