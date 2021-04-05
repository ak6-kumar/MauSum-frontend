import {useState,useEffect} from 'react';
import Weather from './components/weather';
import Login from './components/login'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Feedback from './components/feedback';
const axios = require('axios');


function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/" exact component={Weather}/>
          <Route component={Feedback} path="/feedback"/>
          <Route component={Login} path="/login"/>
        </Switch>
      </div>
  );
}

export default App;
