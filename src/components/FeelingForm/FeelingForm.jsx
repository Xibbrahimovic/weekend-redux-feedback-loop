import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';


function FeelingForm(){
    const dispatch = useDispatch();
    const history = useHistory();
    const [feeling, setFeeling] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        //send feeling data to reducer 
        dispatch({
        type: "ADD_FEELING",
        payload: feeling
    })
}
    return(
        <div>
        <form onSubmit={(event) => handleSubmit(event)}>
        <h2>How are you feeling today?</h2>
            <input
            onChange={(event) => setFeeling(event.target.value)}
            type="number"
            value={feeling}
            min="1"
            max="5"
            required>
        </input>
        
        <button type="submit">Next</button>

        </form>
        </div>

    )


}

export default FeelingForm; 