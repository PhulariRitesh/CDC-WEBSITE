import React from 'react';
import { CssBaseline, Box, Typography, List, ListItem, ListItemText, Button, Stack } from '@mui/material';
import tab_phone from '../img/tab_phone.png';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';


const BottomBar = ({onButton,onbut,onButton2,onButton3}) => {
  const handlebutton = () =>{onButton(true);}
  const handlebutton2 = () =>{onButton2(true);}
  const handlebutton3 = () =>{onButton3(true);}
  const handleButton = () =>{onbut(true);}

  return (
    <>
      <CssBaseline />

      <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} >
      <Box 
          sx={{
            backgroundImage:`url(${tab_phone})`,
            backgroundSize:'cover',
            color: 'white',
            display: 'flex',
            position:'absolute',
            alignItems:'center',
            flexDirection: 'row',

            padding: 2,
            transition: 'width 0.3s',
            boxSizing: 'border-box',
            fontFamily: 'poppins'}}

          width={{sm:'55%', xs:'100%'}}
          bottom={'0'}
          overflow={'hidden'}
          borderRadius={'50px 50px 0 0'}
          justifyContent={'center'}
        >
          <Stack>
          <Stack direction={'row'} sx={{justifyContent:'center', alignContent:'center'}}>
            {[  { text: 'Home', icon: <HomeIcon/>,  },
                { text: 'Profile', icon: <PersonIcon/> },
                { text: 'Jobs', icon: <BusinessCenterIcon/> },
                { text: 'Schedule', icon: <CalendarMonthRoundedIcon/> }
            ].map((item) => (
              <ListItem button key={item.text} onClick={(item.text=='Profile')?handlebutton:(item.text=='Jobs')?handlebutton2:(item.text=='Schedule')?handlebutton3:handleButton}>
                {item.icon}
                {<ListItemText   primaryTypographyProps={{ fontFamily: 'Poppins', marginLeft: 2 }} />}</ListItem>))}
            </Stack></Stack>
            </Box></Stack>
    </>
  );
}

export default BottomBar;
