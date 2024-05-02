// ApplicationsPage.jsx
import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import StudentApplicationsForm from './StudentAppSearch'; 

const ApplicationsPage = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', width: '100%', }} marginLeft={{md:9}} marginTop={{md:-95,sm:7}}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
        <StudentApplicationsForm />
      </Box>
    </Box>
  );
}

export default ApplicationsPage;