// class fields
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';

// Read content to be imported
const CreateRecipe = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [calories, setCalories] = useState('');
  const [fat, setFat] = useState('');
  const [protein, setProtein] = useState('');
  const [salt, setSalt] = useState('');
  const [reviews, setReviews] = useState([]);
  const [category, setCategory] = useState("1");
  let datePosted = new Date();


  // logs form information
  const handleSubmit = (e) => {
    e.preventDefault();

    if (category == "1") {
      alert("Select a valid category!")
    }
    else {
      const recipe = {
        title: title,
        description: description,
        postDate: datePosted,
        thumbnail: thumbnail,
        calories: calories,
        fat: fat,
        protein: protein,
        salt: salt,
        reviews: reviews,
        category: category
      };

      console.log(recipe)

      // dynamically posts and rendered in the frontend asynchronously
      axios.post('http://localhost:4000/api/recipe', recipe)
        .then((res) => {
          console.log(res.data);
          navigate('/recipes/All')
        })
        .catch((err) => console.log(err.data));
    }
  };

  return (
    <div style={{ padding: '2vh', width: '50vw', margin: 'auto', marginTop: '0.5rem' }} className="greyLevel3">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label><strong>Title</strong></Form.Label>
          <Form.Control type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Label><strong>Category</strong></Form.Label>
        <Form.Group className="mb-3" controlId="category">
          <Form.Select aria-label="Category:" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="1" disabled>Choose an option</option> {/*default is main if not choosen */}
            <option value="Mains">Mains</option>
            <option value="Desserts">Desserts</option>
            <option value="Soups">Soups</option>
            <option value="Salads">Salads</option>
            <option value="Appetizers">Appetizers</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="date">
          <Form.Label><strong>Date Posted:</strong></Form.Label>
          <Form.Control type="text"
            required
            disabled
            readOnly
            value={datePosted.toLocaleDateString('en-GB', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="calories">
          <Form.Label><strong>Calories:</strong></Form.Label>
          <Form.Control type="text"
            required
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="fat">
          <Form.Label><strong>Fat:</strong></Form.Label>
          <Form.Control type="text"
            required
            value={fat}
            onChange={(e) => setFat(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="protein">
          <Form.Label><strong>Protein:</strong></Form.Label>
          <Form.Control type="text"
            required
            value={protein}
            onChange={(e) => setProtein(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="salt">
          <Form.Label><strong>Salt:</strong></Form.Label>
          <Form.Control type="text"
            required
            value={salt}
            onChange={(e) => setSalt(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="thumbnail">
          <Form.Label><strong>Thumbnail:</strong></Form.Label>
          <Form.Control type="text"
            required
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label><strong>Description</strong></Form.Label>
          <Form.Control as="textarea"
            rows={3}
            style={{ minHeight: '10vh' }}
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="outline-success" style={{ width: '100%' }}>Submit form</Button>
      </Form>
    </div >
  );
}

// exporting module to be used in app.js
export default CreateRecipe;