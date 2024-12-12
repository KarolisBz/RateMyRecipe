import { Card } from 'react-bootstrap';
import '../styles/main.css';
import StarRating from './StarRating';

const CommentList = (props) => {
    let reviewData = props.reviews;
    console.log(reviewData)

    return (
        reviewData.map((review, index) => {
            return (
            <Card key={index}>
                <Card.Body>
                    <StarRating reviews={[review]}/>
                    <Card.Text>
                       {review.comment}
                    </Card.Text>
                </Card.Body>
            </Card>
            )
        })
    );
};

export default CommentList;