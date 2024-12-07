import { CodeSlash, Star, StarFill } from "react-bootstrap-icons";
import '../styles/main.css';

const StarRating = (props) => {
    let reviews = props.reviews;
    let averageRating = 0;

    // getting averageRating
    reviews.forEach(review => {
        averageRating += Number(review[0]);
    });
    averageRating = averageRating / reviews.length;

    // calculating star fills
    let filledStars = Math.floor(averageRating);
    let startFillPercent = averageRating - filledStars;
    let stars = []

    // generating star array
    for (let i = 0; i < filledStars; i++) {
        stars.push(1);
    }

    if (averageRating%1 != 0) {
        // adding star at end
        stars.push(startFillPercent*100);
    }

    // finishing array
    let starsLeft = 5 - Math.ceil(averageRating);
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
            <p style={{textAlign: 'center'}}>{"[" + averageRating + "]"} {reviews.length} reviews</p>
        </div>
    );
};

export default StarRating;