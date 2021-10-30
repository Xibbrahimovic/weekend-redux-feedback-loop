import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import {useHistory} from 'react-router-dom';



function Review(){

    const [submitStatus, setSubmitStatus] = useState(false);

    const history = useHistory();
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
        setSubmitStatus(true);
    }

    const newForm =() => {
        history.push('/');
    }

    const toComments = () => {
        history.push('/comments');
    }

    const displaySubmitted = (
        <div>
            <h4>Your feedback is greatly appreciated!</h4>
            <button onClick={newForm}>Start a new feedback form!</button>
        </div>
    )

    const notSubmitted = (
        <div>
        <h2>Review your feedback!</h2>
        <p>Feelings: {review.feeling}</p>
        <p>Understanding:{review.understanding} </p>
        <p>Support: {review.support}</p>
        <p>Comments: {review.comments}</p>
        <button onClick={toComments}>BACK</button>
        <button onClick={submitFeedback}>SUBMIT</button>
        </div>
    )

    return(
        <div>
            {submitStatus ? displaySubmitted : notSubmitted}
        </div>

 
    )
}

export default Review;