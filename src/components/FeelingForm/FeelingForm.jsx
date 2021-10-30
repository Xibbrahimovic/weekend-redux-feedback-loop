import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';


function FeelingForm(){
    const dispatch = useDispatch();
    const history = useHistory();
    const [feeling, setFeeling] = useState({feeling: "" });



    const handleChangeFor = (event) => { 
        event.preventDefault();
        setFeeling(event.target.value)
        
    }; //end add feeling function 

    const handleSubmit = (event) => {

    dispatch({//send feeling data to reducer 
        type: "ADD_FEELING",
        payload: feeling
    })
}



    return(
        <form onSubmit={(event) => handleSubmit(event)}>
            <input
            onChange={(event) => handleChangeFor(event)}
            type="number"
            value=""
            min="1"
            max="5"
            required>
        </input>
        
        <button type="submit">Next</button>

        </form>

    )


}

export default FeelingForm; 