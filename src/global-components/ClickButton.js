import React from 'react';
import {Button}  from '@mui/material';
function ClickButton({js=false, fs, height, width, margin, value}) {
  return (
    <div style={{display:'flex', justifyContent:js?'center':'none'}}>
      <Button
      variant="contained"
      sx={{
        color: "FFFFFF",
        bgcolor: "#1E53D7",
        fontSize:{fs},
        height: {height},
        width: {width},
        margin:{margin}
      }}
      // onClick={onClick}
      type='submit'
    >
      {value}
    </Button>

    </div>
  );
}

export default ClickButton;