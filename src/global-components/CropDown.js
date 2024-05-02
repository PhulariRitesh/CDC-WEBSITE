import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';


const inputStyle = {
    height: "5.76vh",
    width: "38.59vw",
    marginBottom: "20px",
    backgroundColor: "#FFFFFF",
  };

const Cropdown = (props) => {
  
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
            InputProps={{style:inputStyle}}
            
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
                InputProps={{ style: inputStyle }}
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

export default Cropdown;


