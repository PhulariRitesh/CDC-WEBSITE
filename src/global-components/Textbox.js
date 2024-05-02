import React from 'react';
import TextField from '@mui/material/TextField';
import { blue } from '@mui/material/colors';

function Textbox({label,lebal, width,variant, required=false, name, errors, msg, register}) {
  return (
    <div>
        <TextField
          id="standard-search"
          label={label}
          placeholder={lebal}
          variant={variant}
            sx={
                {
                    width:width,
                    color: blue,
                    margin: '7.5px'
                }
            }
  
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
