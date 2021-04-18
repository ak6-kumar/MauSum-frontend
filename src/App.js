import {useState,useEffect, useMemo} from 'react';
import Weather from './components/weather';
import Login from './components/login';
import SignIn from './components/signin';
import Logout from './components/Logout';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Feedback from './components/feedback';


function App() {
  return (
    <div className="App">
        <Switch>
          <Route component={Weather} exact path="/"/>
          <Route component={Feedback} path="/feedback"/>
          <Route component={Login} path="/login"/>
          <Route component={SignIn} path="/signin"/>
          <Route component={Logout} path="/logout"/>
        </Switch>
      </div>
  );
}

export default App;
