import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from "redux-logger";


const example = {
    feeling: "",
    understanding: "",
    support: "",
    comments: ""
}

const formReducer = (state = example, action) => {
    if(action.type === 'ADD_FEELING'){
        return {...state, feeling: action.payload};
    }
    if(action.type === 'ADD_UNDERSTANDING'){
        return {...state, understanding: action.payload};
    }
    if(action.type === 'ADD_SUPPORT'){
        return {...state, support: action.payload};
    }
    if(action.type === 'ADD_COMMENTS'){
        return {...state, comments: action.payload};
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        formReducer
    }),
    applyMiddleware(logger)
);


ReactDOM.render(
<Provider store={storeInstance}> //links up react and redux
    <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
