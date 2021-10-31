import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import Button from '@mui/material/Button';


function FeelingForm(){
    const dispatch = useDispatch();
    const history = useHistory();
    const currentFeeling = useSelector((store) => store.formReducer.feeling);
    const [feeling, setFeeling] = useState(currentFeeling);

    const handleSubmit = (event) => {
        event.preventDefault();
        //send feeling data to reducer 
        dispatch({
        type: "ADD_FEELING",
        payload: feeling
    })
    history.push('/understanding');
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
        
        <Button type="submit" variant="outlined"
        style={{
            width: '20px',
            height: '25px',
            paddingLeft: '15px',
            margin: '5px'
        }}
        >→</Button>

        </form>
        </div>

    )


}

export default FeelingForm; 