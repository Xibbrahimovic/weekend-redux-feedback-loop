import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import Button from '@mui/material/Button';

function SupportForm(){
    const dispatch = useDispatch();
    const history = useHistory();
    const currentSupport = useSelector((store) => store.formReducer.support);
    const [support, setSupport] = useState(currentSupport);

    const handleSubmit = (event) => {
        event.preventDefault();
        //send feeling data to reducer 
        dispatch({
        type: "ADD_SUPPORT",
        payload: support
    })
    history.push('/comments');
}

    const toUnderstanding = () => {
        history.push('/understanding');
    }
    
    return(
        <div className="form">
        <form onSubmit={(event) => handleSubmit(event)}>
        <h2>How well are you being supported?</h2>
        <h3>1 = I would like more support 🙏</h3>
        <h3>5 = My support system is unmatched 🤲</h3>
        <div>
            <input
            onChange={(event) => setSupport(event.target.value)}
            type="number"
            value={support}
            min="1"
            max="5"
            required>
        </input>
        </div>

        <Button onClick={toUnderstanding} variant="outlined" color="error"
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

export default SupportForm; 