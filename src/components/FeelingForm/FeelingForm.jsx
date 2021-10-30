import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';


function FeelingForm(){
    const dispatch = useDispatch();
    const history = useHistory();



    const addFeeling = (event) => { 
        event.preventDefault();

        dispatch({//send feeling data to reducer 
            type: "ADD_FEELING",
            payload: feelingData
        })
    };//end add feeling function 



    return(
        <form>
            <input
            onChange={(event) => addFeeling(event)}
            type="number"
            value={feelingData}
            placeholder="How are you feeling today?">
        </input>
        
        <button>Next</button>

        </form>

    )


}

export default FeelingForm; 