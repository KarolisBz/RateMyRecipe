// Component imports
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom'; // navigate to a new route without refreshing the page
import axios from "axios"; // importing axios for async operations
import Badge from 'react-bootstrap/Badge'; // imports btn
import '../styles/main.css';
import { StarFill } from "react-bootstrap-icons";

// RecipeItem gets "props" data which contains 1 recipe data from parent Movies
const RecipeItem = (props) => {
    // hooks event, logs props to the console whenever the component mounts or updates
    useEffect(() => {
        console.log("recipe:", props.recipe);
    }, [props.recipe]); // added dependacy array as recipe so it only runs if recipe changes

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
        <div className="col-auto mb-3" style={{ width: '18rem'}}>
            <Link to={"/home"} className="no-decore">
                <Card bg="light" text="black">
                    <Card.Title style={{textAlign: 'center'}}>{props.recipe.title}</Card.Title>
                    <Card.Img className="centered-image" src={props.recipe.thumbnail} alt={props.recipe.title} style={{width: '16rem', height: '16rem', objectFit: 'fill'}}/>
                    <Card.Body>
                        <Card.Text className="eclipsed-text" style={{ maxHeight: '3rem'}}>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.25rem'}}>
                            <StarFill className="icon-wrap" size={"2rem"}/>
                            <StarFill className="icon-wrap" size={"2rem"}/>
                            <StarFill className="icon-wrap" size={"2rem"}/>
                            <StarFill className="icon-wrap" size={"2rem"}/>
                            <StarFill className="icon-wrap" size={"2rem"}/>
                        </div>
                        <p style={{textAlign: 'center'}}>0 reviews</p>
                        <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.25rem'}}>
                            <Badge bg="dark">Calories: 1300kcal</Badge>
                            <Badge bg="dark">Fat: 16.6g</Badge>
                            <Badge bg="dark">Protein: 13.8g</Badge>
                            <Badge bg="dark">Salt: 1.92g</Badge>
                        </div>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
}

// exporting module to be used in app.js
export default RecipeItem;