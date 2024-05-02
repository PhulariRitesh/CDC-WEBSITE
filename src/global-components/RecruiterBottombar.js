import React from 'react';
import { CssBaseline, Box, Typography, List, ListItem, ListItemText, Button, Stack } from '@mui/material';
import tab_phone from '../img/tab_phone.png';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ScheduleIcon from '@mui/icons-material/Schedule';


const BottomBar = ({onButton,onbut,onButton2,onButton3,onButton4}) => {
  const handlebutton = () =>{onButton(true);}
  const handlebutton2 = () =>{onButton2(true);}
  const handlebutton3 = () =>{onButton3(true);}
  const handlebutton4 = () =>{onButton4(true);}
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
            {[  { text: 'Profile', icon: <PersonIcon /> },
                { text: 'Application', icon: <AssignmentIcon /> },
                { text: 'POC', icon: <ContactPhoneIcon /> },
                { text: 'Schedule', icon: <ScheduleIcon /> }
            ].map((item) => (
              <ListItem button key={item.text} onClick={(item.text=='Profile') ? handlebutton :(item.text=='Application') ? handlebutton2 :(item.text=='POC') ? handlebutton3 : (item.text=='Schedule') ? handlebutton4 : handleButton}>
                {item.icon}
                {<ListItemText   primaryTypographyProps={{ fontFamily: 'Poppins', marginLeft: 2 }} />}</ListItem>))}
            </Stack></Stack>
            </Box></Stack>
    </>
  );
}

export default BottomBar;
