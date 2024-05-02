import React from 'react';
import { Box, Container, FormLabel, Stack, Typography, useTheme } from '@mui/material';
import newuserbg from '../../img/NewUserBg.png';
import {useMediaQuery } from '@material-ui/core';
import SignUpForm from './SignUpForm';

const SignRecruiter = () => {
    const theme = useTheme();
    const screenLessMedium = useMediaQuery(theme.breakpoints.down('md'));
    const screenLessSmall = useMediaQuery(theme.breakpoints.down('sm'));
    
    let widthChange='0';
    if(screenLessSmall){
        widthChange='88%';
    }
    else if(screenLessMedium){
        widthChange='75%';
    }
    else{
        widthChange='55%';
    }

    const sectors = [{label:'Information Technology'}, 
    {label:'Health Care'}, 
    {label:'Financials'},
    {label:'Consumer Discretionary'},
    {label:'Communication Services'},
    {label:'Industrials'},
    {label:'Energy'},
    {label:'Utilities'},
    {label:'Materials'},
    {label:'Others'},
    ];
    const categories = [{label:'Public Limited'}, {label:'Private Limited'}, {label:'Government'}];

  return (

    <Box sx={{
        backgroundImage:`url(${newuserbg})`,
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        
    }}>
        <Container maxWidth={'md'} sx={{
            backgroundColor:'#F0F5FE',
            overflowY:'scroll',
        }}>

            <Stack justifyContent={'center'} alignItems={'center'} height={'100vh'}>
                <Typography variant='h3' fontWeight={700}> SIGN UP </Typography>
                <Typography variant='h4' fontWeight={100} mb={5}  fontSize={{xs:25}}>IIT Goa CDC Portal</Typography>
      
                <Typography variant='h3' fontWeight={700}> Recruiter Sign UP Page </Typography>

                <Box height={50}></Box>

                <Stack width={widthChange} overflow={'hidden'}sx={{
                        
                        '&::-webkit-scrollbar':{
                            display:'none'
                        }
                    }} height={'65vh'}>


                    <Stack overflow={'scroll'} sx={{
                        
                        '&::-webkit-scrollbar':{
                            display:'none'
                        }
                    }}>

                        <SignUpForm sectors={sectors} categories={categories}/>
                    </Stack> 

                </Stack>
            </Stack>

        </Container>

    </Box>
  );
}

export default SignRecruiter;
