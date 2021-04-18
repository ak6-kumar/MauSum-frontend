import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import {Redirect} from 'react-router-dom'


export default function SimpleSnackbar({props}) {

  const [open, setOpen] = React.useState(false);
  const [name,setName] = React.useState("");

  const handleClick = () => {
    axios.post('/login/auth',{props})
    .then((res)=>{
        if(res.data){
          setName(res.data.name)
            localStorage.setItem('AuthToken',res.data.authToken);
            localStorage.setItem('UserName',res.data.name);
            setOpen(true);
        }
    })
    .catch((res)=>{
        document.querySelectorAll('#outlined-basic')[0].value = '';
        document.querySelectorAll('#outlined-basic')[1].value = '';
        alert("Incorrect Email or Password!");
    })
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (<>
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
        message={`You've successfully logged in ${name}!`}
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
  </>);
}
