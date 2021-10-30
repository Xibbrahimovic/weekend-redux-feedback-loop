import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from "redux-logger";


const feedbackInfo = {
    feeling: "",
    understanding: "",
    support: "",
    comments: ""
}

const formReducer = (state = feedbackInfo, action) => {
    if(action.type === 'ADD_FEELING'){
        return {...state, feeling: action.payload};
    }
    else if(action.type === 'ADD_UNDERSTANDING'){
        return {...state, understanding: action.payload};
    }
    else if(action.type === 'ADD_SUPPORT'){
        return {...state, support: action.payload};
    }
    else if(action.type === 'ADD_COMMENTS'){
        return {...state, comments: action.payload};
    }
    else if(action.type === 'CLEAR'){
        return feedbackInfo;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        formReducer
    }),
    applyMiddleware(logger)
);

//links up react and redux
ReactDOM.render(
<Provider store={storeInstance}> 
    <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
