import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Redirect } from 'react-router';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function Feedback(){
    const classes = useStyles();
    const [feedback,setFeedback] = useState({});
    const data = localStorage.getItem('AuthToken');
    const AddFeedback = (e) =>{
        axios.post('/feedback',{feedback})
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            alert("Feedback couldn't be added user not logged in!")
            console.log(err);
        })
        document.querySelectorAll('#outlined-basic')[0].value='';
        document.querySelectorAll('#outlined-basic')[1].value='';
        document.querySelectorAll('#outlined-basic')[2].value='';
    }
    // console.log(feedback);
    return(
        <>
        {data?
        <div>
                <h2 className="mt-2">Feedback Page</h2>
                <div style={{marginLeft:'560px',marginTop:'50px',backgroundColor:'#f8f8ff',width:'400px',blockSize:'450px'}}>
                    <div className="pt-3" style={{fontSize:'20px'}}>
                        <strong>Give us your feedback</strong>                        
                    </div>
                    <div style={{marginTop:'50px'}}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField onChange={(event)=>{
                            setFeedback({...feedback,name:event.target.value});
                        }} id="outlined-basic" label="Name" variant="outlined" />
                        <TextField onChange={(event)=>{
                            setFeedback({...feedback,email:event.target.value});
                        }} id="outlined-basic" label="Email" variant="outlined" />
                        <TextField onChange={(event)=>{
                            setFeedback({...feedback,feedback:event.target.value});
                        }} id="outlined-basic" label="Feedback" multiline rows="4" size="medium" variant="outlined" />
                    </form>
                    <Button onClick={AddFeedback} className="mt-2" variant="contained" color="primary">
                        Submit
                    </Button>
                    </div>
                </div>
        </div>:<Redirect to="/"/>
}
        </>
    )
}