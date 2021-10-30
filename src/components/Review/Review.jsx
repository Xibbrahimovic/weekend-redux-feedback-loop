import { useSelector } from "react-redux";

function Review(){
    const review = useSelector((store) => store.formReducer);

    return(
        <div>
        <h2>Review your feedback!</h2>
        <p>Feelings: {review.feeling}</p>
        <p>Understanding:{review.understanding} </p>
        <p>Support: {review.support}</p>
        <p>Comments: {review.comments}</p>
        <button type="submit">SUBMIT</button>
        </div>
    )
}

export default Review;