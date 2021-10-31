import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import Button from '@mui/material/Button';

function CommentsForm(){

        const dispatch = useDispatch();
        const history = useHistory();
        const currentComments = useSelector((store) => store.formReducer.comments);
        const [comments, setComments] = useState(currentComments);
    
        const handleSubmit = (event) => {
            event.preventDefault();
            //send feeling data to reducer 
            dispatch({
            type: "ADD_COMMENTS",
            payload: comments
        })
        history.push('/review');
    }
        const toSupport = () => {
            history.push('/support');
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
            <Button onClick={toSupport} variant="outlined" color="error"
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
    
    export default CommentsForm;