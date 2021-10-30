import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';


function UnderstandingForm(){
    const dispatch = useDispatch();
    const history = useHistory();
    const [understanding, setUnderstanding] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        //send feeling data to reducer 
        dispatch({
        type: "ADD_UNDERSTANDING",
        payload: understanding
    })
    history.push('/support');
}
    return(
        <div>
        <form onSubmit={(event) => handleSubmit(event)}>
        <h2>How well are you understanding the content?</h2>
            <input
            onChange={(event) => setUnderstanding(event.target.value)}
            type="number"
            value={understanding}
            min="1"
            max="5"
            required
            >
        </input>
        
        <button type="submit">Next</button>

        </form>
        </div>

    )


}

export default UnderstandingForm; 