import { Input, TextField, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';

const FilledTextBox = ({ placeholder, margin, register, name, msg="", errors}) => {
  const theme = createTheme({

    components: {
        MuiFormLabel: {
            styleOverrides: {
                asterisk: { color: "red" },},},},})

  return (
    <div>
      <ThemeProvider theme={theme}>
       <TextField
            hiddenLabel
            id="outlined-hidden-label-small"
            placeholder={placeholder}
            variant='outlined'
            fullWidth
            sx={{
              margin:margin,
              backgroundColor:'white',
              '& .MuiInputBase-input':{
                color:'grey'
              }
            }}
            
            {...register(name, {
              required:true ? msg:"",
            })}

            error={!!errors[name]}
            helperText={errors[name] ? errors[name].message : ''}
            />
      </ThemeProvider>
    </div>
  );
}

export default FilledTextBox;
