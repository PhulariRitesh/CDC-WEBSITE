import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Stack } from '@mui/material';

const useStyles = makeStyles(theme => ({
  pageButton: {
    marginTop: theme.spacing(1),
    borderSpacing:'4',
    borderRadius:'10px',
    color:'#FFFFFF',
    [theme.breakpoints.up('md')]:{
      width: '200px'
    },
    [theme.breakpoints.down('md')]:{
      width: '30vw',
    },
  },
  page1Button: {
    marginTop: theme.spacing(1),
    borderSpacing:'4',
    borderRadius:'10px',
    color:'blue',
        [theme.breakpoints.up('md')]:{
      width: '200px'
    },
    [theme.breakpoints.down('md')]:{
      width: '29vw',
    },
  },
}));

export default function ButtonGroup3({onEC,onJD,onSP,onPD}){

  const handleJD = () =>{onJD(true);}
  const handleEC = () =>{onEC(true);}
  const handlePD = () =>{onPD(true);}
  const handleSP = () =>{onSP(true);}
  
  const classes = useStyles();
    return(
        <Stack spacing={4} direction={'row'} marginLeft={{md:15}}>
        <Button variant="contained" onClick={handleJD}  color="primary" className={classes.pageButton}>Job Description</Button> 
        <Button variant="contained"  onClick={handleEC} color="primary" className={classes.pageButton}>Eligibility Criteria</Button> 
        <Button variant="contained" onClick={handlePD} color="primary" className={classes.pageButton}>Package Details</Button> 
        <Button variant="outlined"  onClick={handleSP} color="primary" className={classes.page1Button}>Selection Process</Button></Stack> 
        );}