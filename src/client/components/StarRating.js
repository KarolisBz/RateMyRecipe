import { Star, StarFill } from "react-bootstrap-icons";
import '../styles/main.css';

const StarRating = (props) => {
    let rating = props.rating
    let reviews = props.reviews
    // calculating star fills
    let filledStars = Math.floor(rating);
    let startFillPercent = rating - filledStars;
    let stars = []

    // generating star array
    for (let i = 0; i < filledStars; i++) {
        stars.push(1);
    }

    // adding star at end
    // mapping real width% to perceived width%
    stars.push(startFillPercent*100);

    // finishing array
    let starsLeft = 5 - Math.ceil(rating);
    for (let i = 0; i < starsLeft; i++) {
        stars.push(0);
    }
    
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.25rem'}}>
                {stars.map((fillPercent) => {
                    if (fillPercent == 1) {
                        return <StarFill className="icon-wrap" size={"2rem"}/> // star is fully filled, don't need 2x images
                    }
                    else if(fillPercent == 0)
                    {
                        return <Star className="icon-wrap" size={"2rem"}/>
                    }
                    else
                    {
                        return (
                            <div style={{width: '2rem', height: '2rem', position: 'relative'}}>
                                <Star className="icon-wrap" size={"2rem"}/>
                                <div className="star-fill" style={{width: `${fillPercent}%`}}>
                                    <StarFill className="icon-wrap" size={"2rem"}/>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
            <p style={{textAlign: 'center'}}>{"[" + rating + "]"} {reviews} reviews</p>
        </div>
    );
};

export default StarRating;