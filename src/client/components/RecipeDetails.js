
// imports
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Card, ListGroup } from "react-bootstrap";

export default function RecipeDetails(props) {
    const [recipe, setRecipe] = useState([]);
    let { id } = useParams();
    const navigate = useNavigate();

    // hooks event, updates information when component mounts or updates
    useEffect(() => {
        axios.get('http://localhost:4000/api/recipe/' + id)
            .then((response) => {
                setRecipe(response.data)
                console.log(response.data);
            }) // callback function exectured when fullfilled or an error is thrown
            .catch((error) => {
                console.log(error)
            });
    }, [id]);

    return (
        <div style={{padding: '2vh'}}>
            <Card style={{ width: '50vw', height: '80vh', margin: 'auto' }} className="greyLevel3">
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
                
                <ListGroup className="list-group-flush">
                        <ListGroup.Item>Category: {recipe.category}</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div >
    );
}