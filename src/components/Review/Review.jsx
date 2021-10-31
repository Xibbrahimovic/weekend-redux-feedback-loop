import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import {useHistory} from 'react-router-dom';
import Button from '@mui/material/Button';



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
      //success page!
    const displaySubmitted = (
        <div>
            <h4>Your feedback is greatly appreciated!</h4>
            <button onClick={newForm}>Start a new feedback form!</button>
        </div>
    )
    
    //initial render
    const notSubmitted = (
        <div>
        <h2>Review your feedback!</h2>
        <p>Feelings: {review.feeling}</p>
        <p>Understanding:{review.understanding} </p>
        <p>Support: {review.support}</p>
        <p>Comments: {review.comments}</p>
        <Button onClick={toComments} variant="outlined" color="error"
        style={{
            width: '20px',
            height: '25px',
            paddingLeft: '15px',
            margin: '5px'
           }}>
        ←
        </Button>
        <div className="submit-button">
        <Button onClick={submitFeedback} variant="contained" color="success">
            SUBMIT
        </Button>
        </div>
        </div>
    )

    return(
        <div>
            {submitStatus ? displaySubmitted : notSubmitted}
        </div>

 
    )
}

export default Review;