// Importing React
import React from 'react';
import '../styles/colorTheme.css';
import '../styles/main.css';
import CoverImg from "../assests/HomeCover1.jpg"
import CoverImg2 from "../assests/HomeCover2.jpg"
import CoverImg3 from "../assests/HomeCover3.jpg"
import { Carousel } from 'react-bootstrap';

// Content arrow function returns us the 'Content' for the Home component
const Home = () => {
  return (
    <div>
      <Carousel className="window-span">
        <Carousel.Item>
          <img src={CoverImg} alt="Image of food" className="window-span" />
          <Carousel.Caption className='semi-night'>
            <h1>Browse Recipes!</h1>
            <h6>Find a recipe for you from our large selection of categories</h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={CoverImg2} alt="Image of food" className="window-span" />
          <Carousel.Caption className='semi-night'>
            <h1>Create Recipes!</h1>
            <h6>Publish Your own recipe for other people to review</h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={CoverImg3} alt="Image of food" className="window-span" />
          <Carousel.Caption className='semi-night'>
            <h1>Rate recipes!</h1>
            <h6>Comment and Review community recipes</h6>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

// exporting module to be used in app.js
export default Home;