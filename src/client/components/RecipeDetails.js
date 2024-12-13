// Component Fields
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Card, ListGroup } from "react-bootstrap";
import StarRating from './StarRating';
import CommentList from './CommentList';
import CreateReview from './CreateReview';
import Stack from 'react-bootstrap/Stack';
import { Button } from 'react-bootstrap';

const RecipeDetails = () => {
    const [recipe, setRecipe] = useState([]);
    let { id } = useParams();
    let datePosted = new Date(recipe.postDate)
    const navigate = useNavigate();

    const reload = () => {
        axios.get('http://localhost:4000/api/recipe/' + id)
            .then((response) => {
                setRecipe(response.data)
            }) // callback function exectured when fullfilled or an error is thrown
            .catch((error) => {
                console.log(error)
            });
    }

    // hooks event, updates information when component mounts or updates
    useEffect(() => {
        reload();
    }, []);

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/recipe/' + id)
            .then(() => {
                navigate('/recipes/All');
            })
            .catch((error) => {
                console.error("Error deleting recipe:", error);
            });
    };

    return (
        <div style={{ padding: '2vh' }}>
            <Card style={{ width: '50vw', margin: 'auto' }} className="greyLevel3">
                <Card.Title className="center-text">{recipe.title}</Card.Title>
                <div style={{ background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(230,255,240,1) 37%, rgba(0,212,255,1) 100%)' }}>
                    <Card.Img
                        variant="top"
                        className="centered-image"
                        style={{
                            height: '20vw',
                            width: '20vw',
                        }}
                        src={recipe.thumbnail}
                    />
                </div>
                <div style={{ marginTop: '0.5rem' }} />
                {recipe.reviews != undefined && <StarRating reviews={recipe.reviews} aggrigate={true} />}
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><h4 className="title-inline">Category: </h4><h6 className="title-inline">{recipe.category}</h6></ListGroup.Item>
                    <ListGroup.Item>
                        <h4 className="title-inline">Date Posted: </h4>
                        <h6 className="title-inline">
                            {datePosted.toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric',
                            })}
                        </h6>
                    </ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <h4>Description: </h4>
                    <textarea type="text"
                        className="form-control"
                        value={recipe.description}
                    />
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><h4 className="title-inline">Calories: </h4><h6 className="title-inline">{recipe.calories}kcal</h6></ListGroup.Item>
                    <ListGroup.Item><h4 className="title-inline">Fat: </h4><h6 className="title-inline">{recipe.fat}g</h6></ListGroup.Item>
                    <ListGroup.Item><h4 className="title-inline">Protein: </h4><h6 className="title-inline">{recipe.protein}g</h6></ListGroup.Item>
                    <ListGroup.Item><h4 className="title-inline">Salt: </h4><h6 className="title-inline">{recipe.salt}g</h6></ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Button onClick={() => { navigate('/EditRecipe/' + id) }} variant="outline-success" style={{ width: '100%' }}>
                        <strong>Edit Recipie</strong>
                    </Button>
                    <Button onClick={handleDelete} variant="outline-danger" style={{ width: '100%' }}>
                        <strong>Delete Recipie</strong>
                    </Button>
                    <CreateReview id={id} oldData={recipe} reloadDetails={reload} />
                    <Stack gap={3} className="mt-4">
                        {recipe.reviews != undefined && <CommentList reviews={recipe.reviews} aggrigate={false} />}
                    </Stack>
                </Card.Body>
            </Card>
        </div >
    );
}

export default RecipeDetails;