import React from 'react';
import { CssBaseline, Box, Typography, Button, Stack } from '@mui/material';
import topbar from '../img/topbar.png';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Profile from './Profile';


const TopBar = (props) => {

  return (
    <>
      <CssBaseline />
      <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} display={props.display}>
      <Box 
          sx={{
            backgroundImage:`url(${topbar})`,
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
          width={{sm:'100%', xs:'100%'}}
          top={'0'}
          overflow={'hidden'}
          borderRadius={'0 0 0 0'}
          justifyContent={'left'}
        >
          <Stack direction={'row'} alignItems={'center'} flexGrow={1}>
          <Button
                style={{justifyContent: 'left', 
                        color: 'white', 
                        fontSize: '1.2vh', 
                        marginBottom: '0vh', 
                        marginTop: '0vh', 
                        marginLeft: '1.2vw'
                      }}>
                <BusinessCenterIcon fontSize={'large'} style={{marginRight:'1vw'}}/>
                <Typography variant='h3' 
                            color={'white'} 
                            fontWeight={900} 
                            textAlign={'center'} 
                            fontSize={{md:'2.3vw', xs:'1.4rem'}}
                            fontFamily={'Poppins'}
                            marginTop={'0.8vh'}>
                  {props.CONTENT}
                </Typography>
              </Button>
          </Stack>
          <Stack direction={'row'} alignItems={'center'}>
            <Profile/>
          </Stack>
            </Box></Stack>
    </>
  );
}

export default TopBar;
