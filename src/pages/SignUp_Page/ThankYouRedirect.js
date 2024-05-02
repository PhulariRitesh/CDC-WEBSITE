import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import newuserbg from '../../../img/NewUserBg.png';
import thankYou from '../../../img/thankYou.png';
import {useMediaQuery } from '@material-ui/core';

function ThankYouRedirect() {
    // const theme = useTheme();
    // const screenLessMedium = useMediaQuery(theme.breakpoints.down('md'));
    // const screenLessSmall = useMediaQuery(theme.breakpoints.down('sm'));
    
    // let widthChange='0';
    // if(screenLessSmall){
    //     widthChange='88%';
    // }
    // else if(screenLessMedium){
    //     widthChange='75%';
    // }
    // else{
    //     widthChange='55%';
    // }
  return (

    <Box sx={{
        backgroundImage:`url(${newuserbg})`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        
    }}>
        <Container sx={{
            backgroundColor:'#F0F5FE',
            
        }} maxWidth={'md'}>

            <Stack  alignItems={'center'} height={'100vh'}>
                <Typography variant='h5' fontWeight={500} mt={10}> IIT Goa CDC Portal </Typography>
                <Typography variant='h2' fontWeight={900} color={'#1E53D7'} fontSize={{xs:50, sm:70}}>Thank You</Typography>
                <Typography variant='h5' fontWeight={520} fontSize={30}> for signing up </Typography>
                <Box height={45}></Box>
                <Typography variant='p' fontWeight={600} fontSize={{sm:28, xs:22}} align='center' >You will receive your login details in next 24 hours on your <br/> POC Email</Typography>
                <Box height={{sm:45, xs:35}}></Box>
                <Typography variant='p' fontWeight={500} fontSize={20}> for queries: xyz@gmail.com</Typography>
                <Box height={25}></Box>
                <Box
                  sx={
                    {
                        backgroundImage:`url(${thankYou})`,
                        backgroundRepeat:'no-repeat',
                        backgroundPosition:'center'
                    }
                  }

                  height={{sm:370, xs:350}} width={{sm:410, xs:360}}
                >
                </Box>
            </Stack>

        </Container>

    </Box>
  );
}

export default ThankYouRedirect;
