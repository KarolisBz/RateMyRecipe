// Importing React
import React from 'react';
import '../styles/colorTheme.css';
import '../styles/main.css';
import CoverImg from "../assests/homeCoverImg.jpg"
import { Carousel } from 'react-bootstrap';

// Content arrow function returns us the 'Content' for the Home component
const Home = () => {
  return (
    <div>
      <Carousel className="window-width">
        <Carousel.Item>
          <img src={CoverImg} alt="Image of food" className="window-width" />
          <Carousel.Caption>
            <h1>Recipe Categories</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={CoverImg} alt="Image of food" className="window-width" />
          <Carousel.Caption>
            <h1>Recipe Categories</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={CoverImg} alt="Image of food" className="window-width" />
          <Carousel.Caption>
            <h1>Recipe Categories</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

// exporting module to be used in app.js
export default Home;