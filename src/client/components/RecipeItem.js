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
        <div>
            <Card>
                {/*Creating Movie Image Card with bootstrap*/}
                <Card.Header>{props.recipe.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.recipe.poster} alt={props.recipe.title} />
                        <footer>{props.recipe.year}</footer>
                    </blockquote>
                </Card.Body>
                {/* Links user to page for movie via their passed movie ID and path*/}
                <Link to={"/edit/" + props.recipe._id} className="btn btn-primary">Edit</Link>

                {/* Delete movie btn that fires handle Delete*/}
                <Button variant="danger" onClick={handleDelete}>Delete</Button>
            </Card>
        </div>
    );
}

// exporting module to be used in app.js
export default RecipeItem;