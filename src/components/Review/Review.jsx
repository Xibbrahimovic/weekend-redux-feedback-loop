import axios from "axios";
import { useSelector, useDispatch } from "react-redux";


function Review(){
    const dispatch = useDispatch();
    const review = useSelector((store) => store.formReducer);

    const submitFeedback = () => {
        axios({
            method: 'POST',
            url: '/review',
            data: review
        })
        .then(response => {
            console.log('POST SUCCESS!', response);
        })
        .catch(error => {
            console.log('Error on post! HELP!' , error);
        })
        dispatch({
            type: 'CLEAR'
        })
    }

    return(
        <div>
        <h2>Review your feedback!</h2>
        <p>Feelings: {review.feeling}</p>
        <p>Understanding:{review.understanding} </p>
        <p>Support: {review.support}</p>
        <p>Comments: {review.comments}</p>
        <button onClick={submitFeedback}>SUBMIT</button>
        </div>
    )
}

export default Review;