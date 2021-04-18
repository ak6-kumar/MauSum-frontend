import React, { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Redirect } from 'react-router';


export default function Loading() {
    const [state,setState] = useState(false);
    setTimeout(()=>{
        setState(true);
    },2000);
  return (<>
      {!state?<div>
      <h2 className="d-flex justify-content-center mt-3">Logging you out :(</h2>
    <div style={{marginTop:'100px'}}>
      <CircularProgress size="100px" color="secondary" />
    </div>
    </div>:
    <><Redirect to="/"/></>}
  </>);
}