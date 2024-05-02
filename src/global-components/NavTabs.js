import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { fontSize } from '@mui/system';

export default function NavTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: props.width, bgcolor: '#D6DEF2', borderRadius:'5px' }}>
      <Tabs value={value}  onChange={handleChange} centered >
        <Tab label="Recruiter" sx={{width:'33%', fontSize:props.fsize}}/>
        <Tab label="Coordinator" sx={{width:'33%', fontSize:props.fsize}}/>
        <Tab label="Student" sx={{width:'33%', fontSize:props.fsize}}/>
      </Tabs>
    </Box>
  );
}
