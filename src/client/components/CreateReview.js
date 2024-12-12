import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Icon0SquareFill, StarFill } from "react-bootstrap-icons";
import Toast from 'react-bootstrap/Toast';
import '../styles/main.css';

const CreateReview = (props) => {
    const [body, setBody] = useState('');
    const [rating, setRating] = useState([]);
    const [showPost, setShowPost] = useState(true);
    let id = props.id;
    let starColours = ['black','black','black','black','black']

    const toggleShowPost = () => setShowPost(!showPost);
    const changeRating = (rating) => {
        // updating star colors
        for (let i = 0; i < rating; i++) {
            starColours[i] = 'gold';
        }
        for (let i = 0; i < 5 - rating; i++) {
            starColours[rating + i] = 'black';
        }
        for (let i = 0; i < 5; i++) {
        }
        //setRating(rating);
    }

    return (
        <div>
            <Button variant="outline-dark" onClick={toggleShowPost} style={{width: '100%'}}>
                <strong>Leave a review!</strong>
            </Button>
            <Toast show={showPost} onClose={toggleShowPost} className='centered-image'>
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Select Rating:</strong>
                    <div className='star-container' key={100}>
                        <Icon0SquareFill className="icon-wrap" size={"2rem"} key={0} onClick={() => changeRating(0)} style={{color: 'black'}}/>
                        <StarFill className="icon-wrap" size={"2rem"} key={1} onClick={() => changeRating(1)} style={{color: starColours[0]}}/>
                        <StarFill className="icon-wrap" size={"2rem"} key={2} onClick={() => changeRating(2)} style={{color: starColours[1]}}/>
                        <StarFill className="icon-wrap" size={"2rem"} key={3} onClick={() => changeRating(3)} style={{color: starColours[2]}}/>
                        <StarFill className="icon-wrap" size={"2rem"} key={4} onClick={() => changeRating(4)} style={{color: starColours[3]}}/>
                        <StarFill className="icon-wrap" size={"2rem"} key={5} onClick={() => changeRating(5)} style={{color: starColours[4]}}/>
                    </div>
                </Toast.Header>
                <Toast.Body>
                    Enter Text
                </Toast.Body>
            </Toast>
        </div>
    );
}

export default CreateReview;