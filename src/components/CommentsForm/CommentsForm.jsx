import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import Button from '@mui/material/Button';
import './CommentsForm.css';

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
            <div className="form">
            <form onSubmit={(event) => handleSubmit(event)}>
            <h2>Any comments you want to leave?</h2>
            <h4>Optional</h4>
            <div>
            <input
                className="input"
                onChange={(event) => setComments(event.target.value)}
                type="text"
                value={comments}
                >
            </input>
            </div>

            <div className="flex">

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
                       </div>
    
            </form>
            </div>
    
        )
    
    
    }
    
    export default CommentsForm;