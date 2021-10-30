import React {useEffect, useState} from 'react';
import axios from 'axios';
import {Route, HashRouter as Router, Link} from "react-router-dom";

import FeelingForm from '../FeelingForm/FeelingForm';

// import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
// import SupportForm from '../SupportForm/SupportForm';
// import CommentsForm from '../CommentsForm/CommentsForm';

import {useDispatch} from 'react-redux';

import './App.css';
import { useEffect } from 'react';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
  );
}

export default App;
