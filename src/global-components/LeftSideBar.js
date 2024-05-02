import React, { useState } from 'react';
import { CssBaseline, Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import navbar from '../img/NavBar.jpg';
import iitgoalogo from '../img/iitgoalogo.png';
import  School  from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ScheduleIcon from '@mui/icons-material/Schedule';
import Profile from "./Profile";
import {Hidden, Link} from '@mui/material';

const LeftSidebar = ({onButton,onbut,onButton2,onButton3,onButton4}) => {
  const [collapsed, setCollapsed] = useState(false);
  const handlebutton = () =>{  onButton(true);  setCollapsed(true);}
  const handlebutton2 = () =>{  onButton2(true);  setCollapsed(true);}
  const handlebutton3 = () =>{  onButton3(true);  setCollapsed(true);}
  const handlebutton4 = () =>{  onButton4(true);  setCollapsed(true);}
  const handleButton = () =>{onbut(true);
    setCollapsed(false);}
  return (
    <>
      <CssBaseline />
      <Hidden mdDown>
          <Profile name="Comapny"/>
          <Box width={20}  component={'span'}          sx={{
            width: collapsed ? '5%' : '15%', 
            borderRight: '1px solid black', 
            height: '100vh', 
            backgroundColor:'darkblue',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            padding: 2,
            transition: 'width 0.3s',
            boxSizing: 'border-box',
            fontFamily: 'poppins',
            marginTop:'-28px'  
          }}>
            <Box marginTop={3}>
            {collapsed ? (
              <Button onClick={handleButton} style={{ justifyContent: 'center' }}>
                <School fontSize="large" />
              </Button>
            ) : (
              <Button   onClick={() => setCollapsed(true)} 
                style={{ justifyContent: 'left', color: 'white', fontSize: '1.2em', marginBottom: '4.5em', marginTop: '1em', marginLeft: '1.3em', fontFamily: 'poppins'}}>
                RECRUITER
              </Button>
            )}<List>
            {[
                { text: 'Profile', icon: <PersonIcon />,  },
                { text: 'Application', icon: <AssignmentIcon />},
                { text: 'POC', icon: <ContactPhoneIcon /> },
                { text: 'Schedule', icon: <ScheduleIcon /> }
            ].map((item) => (
                <ListItem button key={item.text} onClick={(item.text=='Profile') ? handlebutton :(item.text=='Application') ? handlebutton2 :(item.text=='POC') ? handlebutton3 : (item.text=='Schedule') ? handlebutton4 : handleButton}>
                {item.icon}
                {!collapsed && 
                    <ListItemText 
                    primaryTypographyProps={{ 
                        fontFamily: 'Georgia',  
                        marginLeft: 2
                    }} 
                    primary={item.text} 
                    />}
                </ListItem>
            ))}
            </List>
          </Box>

          {!collapsed && (
            <Box component={'span'}sx={{ marginTop: '40vh', display: 'flex', alignItems: 'center' }} >
              <School fontSize="large" />
              
              <Box component={'span'} sx={{ marginLeft: 2 }}>
                <Typography variant="body2" sx={{ fontFamily: 'Georgia', lineHeight: 1, fontWeight: 'bold', fontSize: 'body2.fontSize + 1' }}>  
                  IIT GOA
                </Typography>
                <Typography variant="caption" sx={{ fontFamily: 'Georgia', fontSize: 'caption.fontSize + 2'}}>  
                  Career Development Cell
                </Typography>
              </Box>
            </Box>
          )}
          {collapsed && (<Box component={'span'}sx={{ marginTop: '65.5vh', display: 'flex', alignItems: 'center' }} ></Box>)}
        </Box>
        {/* </Stack> */}
        </Hidden>
        <Hidden smDown> 
        <Box 
          sx={{
            flex: 1, 
            backgroundColor: 'white'
          }}
        >
        </Box>
        </Hidden>
    </>
  );
}

export default LeftSidebar;
