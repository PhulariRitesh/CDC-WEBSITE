import { FormLabel } from '@mui/material';
import React from 'react';

function LabelFormItem({required=true, color, value}) {
  return (
    <div>
      <FormLabel sx={{color:{color},
        '& .MuiFormLabel-asterisk':{
            color: 'red'
        }}} required={required}>{value}</FormLabel>
    </div>
  );
}

export default LabelFormItem;
