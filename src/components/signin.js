import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from './alertSignIn';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function Signin(){
    const [auth,setAuth] = React.useState({});
    const classes = useStyles();
    return(
        <div>
            <h2 className="mt-2">Signin Page</h2>
                <div style={{marginLeft:'560px',marginTop:'50px',backgroundColor:'#f8f8ff',width:'400px',blockSize:'400px'}}>
                    <div className="pt-3" style={{fontSize:'20px'}}>
                        <strong>Enter your details</strong>                        
                    </div>
                    <Link style={{color:'black',textDecoration:'none'}} to="/"><div style={{position:'absolute',left:'30px',top:'10px',backgroundColor:'rgb(144,233,144)',opacity:'0.9',borderRadius:'10px',blockSize:'30px',width:'100px'}}>Home</div></Link>
                    <div style={{marginTop:'50px'}}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField onChange={(e)=>setAuth({...auth,email:e.target.value})} id="outlined-basic" type="email" label="Email" variant="outlined" />
                        <TextField onChange={(e)=>setAuth({...auth,password:e.target.value})} id="outlined-basic" type="password" label="Password" size="medium" variant="outlined" />
                    </form>
                        <Alert props={auth}/>
                    </div>
                </div>
        </div>
    )
}