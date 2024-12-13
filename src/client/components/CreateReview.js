import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Icon0SquareFill, StarFill } from "react-bootstrap-icons";
import Toast from 'react-bootstrap/Toast';
import axios from 'axios';
import '../styles/main.css';

const CreateReview = (props) => {
    const [commentBody, setCommentBody] = useState('');
    const [rating, setRating] = useState(0);
    const [showPost, setShowPost] = useState(false);
    let id = props.id;
    let oldData = props.oldData
    let starColours = ['black', 'black', 'black', 'black', 'black']

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
            document.getElementById('s' + i).style.color = starColours[i];
        }

        setRating(rating);
    }

    // logs form information
    const handleSubmit = (e) => {
        // stops from being fired more than once
        e.preventDefault();

        const comment = {
            rating: rating,
            comment: commentBody
        };

        // creating data body
        oldData.reviews.push(comment);

        // dynamically posts and rendered in the frontend asynchronously
        axios.put('http://localhost:4000/api/recipe/' + id, oldData) /* Pushing data up async */
            .then((res) => {
                console.log(res.data);
                props.reloadDetails();
                toggleShowPost();
                changeRating(0); // reset
                setCommentBody("");
            });
    };

    return (
        <div>
            <Button variant="outline-dark" onClick={toggleShowPost} style={{ width: '100%' }}>
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
                    <div className='star-container'>

                        <Icon0SquareFill className="icon-wrap" size={"2rem"} key={0} onClick={() => changeRating(0)} style={{ color: 'black' }} />
                        <StarFill className="icon-wrap" size={"2rem"} id='s0' style={{ color: starColours[0] }} onClick={() => changeRating(1)} />
                        <StarFill className="icon-wrap" size={"2rem"} id='s1' style={{ color: starColours[1] }} onClick={() => changeRating(2)} />
                        <StarFill className="icon-wrap" size={"2rem"} id='s2' style={{ color: starColours[2] }} onClick={() => changeRating(3)} />
                        <StarFill className="icon-wrap" size={"2rem"} id='s3' style={{ color: starColours[3] }} onClick={() => changeRating(4)} />
                        <StarFill className="icon-wrap" size={"2rem"} id='s4' style={{ color: starColours[4] }} onClick={() => changeRating(5)} />
                    </div>
                </Toast.Header>
                <Toast.Body>
                    <form onSubmit={handleSubmit}>
                        <label><strong>Review:</strong></label>
                        <textarea type="text"
                            className="form-control"
                            value={commentBody}
                            onChange={(e) => { setCommentBody(e.target.value) }}></textarea>

                        <div style={{ padding: '0.5rem' }}>
                            <Button variant="outline-dark" style={{ width: '100%' }} type="submit">Post Review!</Button>
                        </div>
                    </form>
                </Toast.Body>
            </Toast>
        </div>
    );
}

export default CreateReview;