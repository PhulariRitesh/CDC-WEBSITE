import React from 'react';
import RightLogin from './RightLogin';
import LeftLogin from './LeftLogin';
import Grid from '@mui/system/Unstable_Grid/Grid';


const Login = () => {
  return (
    <Grid container >
      
      <LeftLogin/>

      <RightLogin/>
    </Grid>
  );
}

export default Login;
