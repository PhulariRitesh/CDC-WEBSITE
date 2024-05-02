import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

const Dropdown = (props) => {
  

  return (
    <div>
      <Controller
        name={props.name}
        control={props.control}

        defaultValue={props.defaultValue || null}
        rules={{ required: props.required?props.msg:'' }}
        
        render = {({field})=>{
          const {onChange, value} = field;

          return(
            <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={props.sectors}
            getOptionLabel={(option)=>option.label}
            fullWidth
            
            value={props.sectors.find((sector)=>{
              return value===sector.label;
            })|| null}

            onChange={(event, newValue)=>{
              onChange(newValue ? newValue.label : null)
              console.log(newValue)
            }}

            renderInput={(params) => (
              <TextField
                {...params}
                name={props.name}
                required={props.required}
                inputRef={props.register()}
                error={!!props.errors[props.name]}
                helperText={props.errors[props.name] ? props.errors[props.name].message : ''}
              />

              
            )}
            sx={{
              backgroundColor: 'white',
              '& .MuiInputBase-input': {
                color: 'grey',
              },
              margin: props.margin,
            }}

            
          />


          )
        }}
      />
    </div>
  );
};

export default Dropdown;


