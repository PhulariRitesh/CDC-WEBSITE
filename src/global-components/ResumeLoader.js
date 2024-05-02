import React from 'react';
import LinearLoader from './LinearLoader';
import { Button, Typography } from '@material-ui/core';
import { Stack } from '@mui/material';

function ResumeLoader() {
  return (
    <div>
        <Stack direction={'column'} sx={{backgroundColor:"white"}} justifyContent={'center'} alignContent={'center'} height={85} gap={1} padding={"0 15px"}>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography variant="h5" fontSize={12} fontWeight={550}>resume.pdf</Typography>
                <Typography variant="p" fontSize={12} color={"grey"}>Uploading</Typography>
            </Stack>
            {/* Linear Loader */}
            <LinearLoader/>

            <Stack direction={'row'} justifyContent={'flex-end'}>
                <Button variant="text" sx={{color:"grey", fontSize:"12px", padding:"0"}}>CANCEL</Button>
            </Stack>
        </Stack>
    </div>
  );
}

export default ResumeLoader;
