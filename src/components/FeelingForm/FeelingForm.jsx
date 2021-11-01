import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import Button from '@mui/material/Button';
import './FeelingForm.css';


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
        <div className="form">
        <form onSubmit={(event) => handleSubmit(event)}>
        <h2>How are you feeling today?</h2>
        <h3>1 = Not so good...</h3>
        <h3>5 = Couldn't be any better!</h3>

        <div className="flex">
        <div className="center">
        <input
            onChange={(event) => setFeeling(event.target.value)}
            type="number"
            value={feeling}
            min="1"
            max="5"
            required>
        </input>
        </div>
        
        <div>
        <Button
            type="submit" 
            variant="outlined"
            style={{
                width: '20px',
                height: '25px',
            }}
            >→
        </Button>
        </div>
        </div>
        </form>
        </div>

    )


}

export default FeelingForm; 