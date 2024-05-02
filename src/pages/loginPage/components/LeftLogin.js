import React from 'react';
import Grid from '@mui/system/Unstable_Grid/Grid';
import Box from '@mui/system/Box';
import bglogin from '../../../img/loginimg1.jpg';
import iitgoalogo from '../../../img/iitgoalogo.png';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

function LeftLogin() {
  return (
    <Grid item xs={12} md={5}>
        <Box
            sx={{
                backgroundImage:`url(${bglogin})`,
                backgroundSize:'cover',
            
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                // border:'10px solid green'
                
                
                
            }}
            height={'100vh'}
        >
            <Stack justifyContent={'center'} alignItems={'center'} position={'relative'} left={{md:'-5%'}} top={{xs:'-30%', md:'0'}} mb={5} >
                <Box
                  sx={
                    {
                      backgroundImage:`url(${iitgoalogo})`,
                      backgroundSize:'cover'
                    }
                  }

                  height={{md:200, xs:150}} width={{md:200, xs:150}}
                >
                    {/* <img src={iitgoalogo} alt="logo" srcset="" height={'50%'} width={'50%'} /> */}
                </Box>
                <Typography variant='h3' color={'white'} fontWeight={700} mt={{md:5, xs:2}} mb={{md:3, xs:1}} fontSize={{md:'3.5vw', sm:'2rem', xs:'1.5rem'}}>IIT GOA</Typography>
                <Typography variant='h4' color={'white'} fontWeight={200} textAlign={'center'} fontSize={{md:'2.5vw', sm:'1.8rem', xs:'1.3rem'}}>Career Developement Cell</Typography>
            </Stack>

        </Box>
        
      </Grid>
  );
}

export default LeftLogin;
