import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

function CommentsForm(){

        const dispatch = useDispatch();
        const history = useHistory();
        const [comments, setComments] = useState('');
    
        const handleSubmit = (event) => {
            event.preventDefault();
            //send feeling data to reducer 
            dispatch({
            type: "ADD_COMMENTS",
            payload: comments
        })
        history.push('/review');
    }
        return(
            <div>
            <form onSubmit={(event) => handleSubmit(event)}>
            <h2>Any comments you want to leave?</h2>
                <input
                onChange={(event) => setComments(event.target.value)}
                type="text"
                value={comments}
                >
            </input>
            
            <button type="submit">Next</button>
    
            </form>
            </div>
    
        )
    
    
    }
    
    export default CommentsForm;