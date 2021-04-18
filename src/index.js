import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
    const authToken = localStorage.getItem('AuthToken');
    axios.defaults.baseURL = 'http://localhost:4000';
    axios.defaults.headers.common['Authorization'] = authToken;
    axios.defaults.headers.common['Content-Type'] = 'application/json';

    axios.interceptors.request.use(request => {
        // Edit request config
        return request;
    }, error => {
        console.log(error);
        return Promise.reject(error);
    });

ReactDOM.render(
  <React.StrictMode>
   <link rel="preconnect" href="https://fonts.gstatic.com"></link>
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet"></link>
<link rel="preconnect" href="https://fonts.gstatic.com"></link>
<link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"></link>
<link rel="preconnect" href="https://fonts.gstatic.com"></link>
<link href="https://fonts.googleapis.com/css2?family=Acme&display=swap" rel="stylesheet"></link>
<link rel="preconnect" href="https://fonts.gstatic.com"></link>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
    <Router>
      <App/> 
      </Router>
  </React.StrictMode>
  ,document.getElementById('root')
);

reportWebVitals();
