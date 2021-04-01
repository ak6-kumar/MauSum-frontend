import {useState,useEffect} from 'react';
import Weather from './components/weather';
import './App.css';
const axios = require('axios');


function App() {
  return (
    <div className="App">
        <Weather/>
      </div>
  );
}

export default App;
