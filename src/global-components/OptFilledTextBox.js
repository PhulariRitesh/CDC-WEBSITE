import { Input, TextField, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';

const OptFilledTextBox = ({required=false, placeholder, margin, register, name}) => {
  const theme = createTheme({

    components: {
        MuiFormLabel: {
            styleOverrides: {
                asterisk: { color: "red" },
            },
        },
        
    },

  })
  return (
    <div>

      <ThemeProvider theme={theme}>

       <TextField

            hiddenLabel
            id="outlined-hidden-label-small"
            placeholder={placeholder}
            variant="outlined"
            fullWidth
            sx={{
              margin:margin,
              backgroundColor:'white',
              '& .MuiInputBase-input':{
                color:'grey'
              }
            }}
            
            {...register(name)}
            />
      </ThemeProvider>
    </div>
  );
}

export default OptFilledTextBox;
