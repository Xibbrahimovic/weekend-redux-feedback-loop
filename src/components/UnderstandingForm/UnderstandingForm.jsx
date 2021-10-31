import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import Button from '@mui/material/Button';


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

        <Button onClick={toFeeling} variant="outlined" color="error"
        style={{
            width: '20px',
            height: '25px',
            paddingLeft: '15px',
            margin: '5px'
           }}>
        ←
        </Button>

        <Button type="submit" variant="outlined"
                style={{
                    width: '20px',
                    height: '25px',
                    paddingLeft: '15px',
                    margin: '5px'
                   }}>→</Button>

        </form>
        </div>

    )


}

export default UnderstandingForm; 