import { useSelector } from "react-redux";

function Feedback(){
    const feedback = useSelector((store) => store.formReducer);

    return(
        <div>
        <h2>Review your feedback!</h2>
        <p>Feelings: {feedback.feeling}</p>
        <p>Understanding:{feedback.understanding} </p>
        <p>Support: {feedback.support}</p>
        <p>Comments: {feedback.comments}</p>
        <button type="submit">SUBMIT</button>
        </div>
    )
}

export default Feedback;