import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import Button from '@mui/material/Button';
import './UnderstandingForm.css';


function UnderstandingForm(){
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUnderstanding = useSelector((store) => store.formReducer.understanding);
    const [understanding, setUnderstanding] = useState(currentUnderstanding);

    const handleSubmit = (event) => {
        event.preventDefault();
        //send feeling data to reducer 
        dispatch({
        type: "ADD_UNDERSTANDING",
        payload: understanding
    })
    history.push('/support');
}
    const toFeeling = () => {
        history.push('/');
    }

    return(
        <div className="form">
        <form onSubmit={(event) => handleSubmit(event)}>
        <h2>How well are you understanding the content?</h2>
        <h3>1 = Not so well ☹️</h3>
        <h3>5 = I feel like an expert! 🧠</h3>
        <div className="center">
        <input 
            onChange={(event) => setUnderstanding(event.target.value)}
            type="number"
            value={understanding}
            min="1"
            max="5"
            required
            >
        </input>
        </div>

        <div className="flex">
        <Button 
        onClick={toFeeling} 
        variant="outlined" 
        color="error"
        style={{
            width: '20px',
            height: '25px',
            paddingLeft: '15px',
            margin: '5px'
        }}>
        ←
        </Button>

        <Button 
        type="submit" 
        variant="outlined"
        style={{
            width: '20px',
            height: '25px',
            paddingLeft: '15px',
            margin: '5px'
        }}>→</Button>
        </div>

        </form>
        </div>
    )
}

export default UnderstandingForm; 