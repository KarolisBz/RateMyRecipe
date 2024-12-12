// class fields
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Card, ListGroup } from "react-bootstrap";
import { Form } from 'react-bootstrap';

// Read content to be imported
const CreateRecipe = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [postDate, setPostDate] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [calories, setCalories] = useState('');
  const [fat, setFat] = useState('');
  const [protein, setProtein] = useState('');
  const [salt, setSalt] = useState('');
  const [reviews, setReviews] = useState([]);
  const [category, setCategory] = useState('');


  // logs form information
  const handleSubmit = (e) => {
    e.preventDefault();

    const recipe = {
      title: title,
      description: description,
      postDate: postDate,
      thumbnail: thumbnail,
      calories: calories,
      fat: fat,
      protein: protein,
      salt: salt,
      reviews: reviews,
      title: title,
      category: category
    };

    // dynamically posts and rendered in the frontend asynchronously
    axios.post('http://localhost:4000/api/recipe', recipe)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.data));
  };

  return (
    <div style={{ padding: '2vh', width: '50vw', minHeight: '80vh', margin: 'auto', marginTop: '0.5rem'}} className="greyLevel3">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </div >
  );
}

// exporting module to be used in app.js
export default CreateRecipe;