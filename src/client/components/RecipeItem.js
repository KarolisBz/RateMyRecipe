// Component imports
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom'; // navigate to a new route without refreshing the page
import Badge from 'react-bootstrap/Badge';
import '../styles/main.css';
import StarRating from "./StarRating";

const RecipeItem = (props) => {
    // hooks event, logs props to the console whenever the component mounts or updates
    useEffect(() => {
    }, [props.recipe]);

    return (
        <div className="col-auto mb-3" style={{ width: '18rem'}}>
            <Link to={"/RecipeDetails/" + props.recipe._id} as={NavLink} className="no-decore">
                <Card bg="light" text="black">
                    <Card.Title className="center-text">{props.recipe.title}</Card.Title>
                    <Card.Img className="centered-image" src={props.recipe.thumbnail} alt={props.recipe.title} style={{width: '16rem', height: '16rem', objectFit: 'fill'}}/>
                    <Card.Body>
                        <Card.Text className="eclipsed-text" style={{ maxHeight: '3rem'}}>
                            {props.recipe.description}
                        </Card.Text>
                        <StarRating reviews={props.recipe.reviews} aggrigate={true}/>
                        <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.25rem'}}>
                            <Badge bg="dark">Calories: {props.recipe.calories}kcal</Badge>
                            <Badge bg="dark">Fat: {props.recipe.fat}g</Badge>
                            <Badge bg="dark">Protein: {props.recipe.protein}g</Badge>
                            <Badge bg="dark">Salt: {props.recipe.salt}g</Badge>
                        </div>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
}

// exporting module to be used in app.js
export default RecipeItem;