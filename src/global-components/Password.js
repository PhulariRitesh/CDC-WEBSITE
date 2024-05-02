import React from 'react';
import TextField from '@mui/material/TextField';

function Textbox({width, required=false, name, errors, msg, register}) {
  return (
    <div>
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"

          sx={{
            width:{width},
            margin:'7.5px'
          }}

          {...register(name, {
            required: required ? msg:"",
          })}

          error={!!errors[name]}
          helperText={errors[name] ? errors[name].message : ''}
        />
      
    </div>
  );
}

export default Textbox;
