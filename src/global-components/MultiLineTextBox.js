import { TextField } from '@mui/material';
import React from 'react';

function MultiLineTextBox(props) {
  return (
    <div>
      <TextField
          id="outlined-multiline-static"
          multiline
          rows={props.rows}
          defaultValue={props.defaultValue}
          variant="outlined"
          fullWidth
          sx={{
            backgroundColor:'white',
            borderColor:'white',
            '& .MuiInputBase-input':{
                color:'grey'
              },
              margin:props.margin


          }}
          {...props.register(props.name, {
            required: props.required ? props.msg:"",
          })}

          error={!!props.errors[props.name]}
          helperText={props.errors[props.name] ? props.errors[props.name].message : ''}
        />
    </div>
  );
}

export default MultiLineTextBox;
