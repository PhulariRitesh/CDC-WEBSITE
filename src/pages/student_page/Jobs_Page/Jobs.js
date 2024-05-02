// ApplicationsPage.jsx
import React from 'react';
import { Box, CssBaseline, Hidden, Modal } from '@mui/material'; 
import CompanyApplications from './Table';
import Popup from './Modal';
import { useState } from 'react';


const Jobs = () => {
  const [open, setopen] = useState(false);

  return (
    <>
          {/* <Modal open={open} onClose={onclose}>
        <Popup/>      </Modal> */}
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', width: '100%',bgcolor:'white' }} marginLeft={{md:9}} marginTop={{md:-95,sm:7}} overflow={Hidden}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
        <CompanyApplications/>
      </Box>
    </Box>
    </>
  );
}

export default Jobs;