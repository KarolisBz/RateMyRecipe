// Component imports
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom'; // navigate to a new route without refreshing the page
import axios from "axios"; // importing axios for async operations
import Button from 'react-bootstrap/Button'; // imports btn

// MovieItem gets "props" data which contains 1 movie data 
// from parent Movies
const RecipeItem = (props) => {
    // hooks event, logs props to the console whenever the component mounts or updates
    useEffect(() => {
        console.log("recipe:", props.recipe);
    }, [props.recipe]); // added dependacy arary as myMobies so it only runs if myMovies changes

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/recipe/' + props.recipe._id)
            .then(() => {
                props.Reload(); // Refresh the movie list after deletion from function passed down in props
            })
            .catch((error) => {
                console.error("Error deleting movie:", error);
            });
    };

    return (
        <div class="col-auto mb-3">
            <Card style={{ width: '18rem', height: '18rem'}}>
                <Card.Img variant="top" src={props.recipe.thumnail} alt={props.recipe.title} style={{width: '18rem', height: '18rem'}}/>
                <Card.Body>
                    <Card.Title>{props.recipe.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

// exporting module to be used in app.js
export default RecipeItem;