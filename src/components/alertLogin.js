import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import {Redirect} from 'react-router-dom'



export default function SimpleSnackbar({props}) {
  const [open, setOpen] = React.useState(false);
  const [state,setState] = React.useState();
  const [name,setName] = React.useState("");
  const messages ={
    loginSuccessful : `You've successfully logged in ${state?.user?.name}!`,
    dupEmail: "This is email is already registered!",
    defaultErrorMsg : "Something went wrong please trys again later!",
    passwordError : 'The password is too small!',
  }
  
  var msg = messages.loginSuccessful;

    // console.log(props);
  const handleClick = () => {
    if(document.querySelectorAll('#outlined-basic')[2].value.length<6){
      document.querySelectorAll('#outlined-basic')[2].value='';
      alert("Your Password is too small try again with a new password of more than 6 characters")
      return;
    }
    axios.post('/login',{props})
    .then((res)=>{
      console.log(res);
        setState(res.data);
        setName(res.data.user.name)
        localStorage.setItem('AuthToken',res.data.user.token);
        localStorage.setItem('UserName',res.data.user.name);
        if(res.data.success) {
          msg=messages.loginSuccessful;
          setOpen(true);
        }
        else {
          if(res.data.error.keyPattern.email) {
            document.querySelectorAll('#outlined-basic')[1].value = '';
            alert("This email is already registered try again with a different email");
          }
          else alert(res?.data?.error?.message)        
        }
    })
    .catch((res)=>{
        console.log(res);
        alert("Something went wrong please try again later!");
    })
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <>
    {!name?<><div>
      <Button variant="contained" color="primary"  className="mt-3" onClick={handleClick}>Submit</Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={msg}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div></>:
    <><Redirect to="/"/></>}
  </>
  );
}
