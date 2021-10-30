import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';


function SupportForm(){
    const dispatch = useDispatch();
    const history = useHistory();
    const [support, setSupport] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        //send feeling data to reducer 
        dispatch({
        type: "ADD_SUPPORT",
        payload: support
    })
}
    return(
        <div>
        <form onSubmit={(event) => handleSubmit(event)}>
        <h2>How well are you being supported?</h2>
            <input
            onChange={(event) => setSupport(event.target.value)}
            type="number"
            value={support}
            min="1"
            max="5"
            required>
        </input>
        
        <button type="submit">Next</button>

        </form>
        </div>

    )


}

export default SupportForm; 