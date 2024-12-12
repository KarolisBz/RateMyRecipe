
// imports
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

    return (
        <div style={{ padding: '2vh' }}>
            <Card style={{ width: '50vw', minHeight: '80vh', margin: 'auto' }} className="greyLevel3">
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
                {recipe.reviews != undefined && <StarRating reviews={recipe.reviews} aggrigate={true} />}
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><h4 className="title-inline">Category: </h4><h6 className="title-inline">{recipe.category}</h6></ListGroup.Item>
                    <ListGroup.Item>
                        <h4 className="title-inline">Date Posted: </h4>
                        <h6 className="title-inline">
                            {datePosted.toLocaleTimeString('en-GB', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric',
                            })}
                        </h6>
                    </ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Text>{recipe.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><h4 className="title-inline">Calories: </h4><h6 className="title-inline">{recipe.calories}</h6></ListGroup.Item>
                    <ListGroup.Item><h4 className="title-inline">Fat: </h4><h6 className="title-inline">{recipe.calories}</h6></ListGroup.Item>
                    <ListGroup.Item><h4 className="title-inline">Protein: </h4><h6 className="title-inline">{recipe.calories}</h6></ListGroup.Item>
                    <ListGroup.Item><h4 className="title-inline">Salt: </h4><h6 className="title-inline">{recipe.calories}</h6></ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <CreateReview id={id} oldData={recipe} reloadDetails={reload}/>
                    <Stack gap={3} className="mt-4">
                        {recipe.reviews != undefined && <CommentList reviews={recipe.reviews} aggrigate={false} />}
                    </Stack>
                </Card.Body>
            </Card>
        </div >
    );
}

export default RecipeDetails;