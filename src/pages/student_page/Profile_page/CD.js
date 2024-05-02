import React, { useState } from "react";
import { Box, Stack, Typography, TextField, Button, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import {LocalizationProvider,DatePicker} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'

const useStyles = makeStyles((theme) => ({
  saveButton: { marginTop: theme.spacing(2), borderRadius: '10px',marginLeft:'22vw', color: '#FFFFFF',},
  nextButton: { marginTop: theme.spacing(2), borderRadius: '10px', marginLeft:'5vw',color: '#FFFFFF', backgroundColor: 'green',},
  datePicker: {backgroundColor: '#FFFFFF', borderRadius: '4px', width:'25.89vw',
  '& input': {backgroundColor: '#FFFFFF',},},title: {fontSize:'16px',color:'#6F7492'},
  title: { fontSize: '16px', color: '#6F7492',},
  title2: { fontSize: '16px', marginTop: '-100px', color: '#6F7492',},}));
const inputStyle = { height: '5.76vh', width: '25.59vw', marginBottom: '20px', backgroundColor: '#FFFFFF' };
const inputStyle1 = { height: '10.423vh', width: '63.75vw', marginBottom: '20px', backgroundColor: '#FFFFFF' };
const inputStyle2 = { height: '10.423vh', width: '63.75vw', marginBottom: '20px', backgroundColor: '#FFFFFF' };
const asterisk = { color: 'red' };

export default function CD(){
    
    const classes = useStyles();  
    const [T,setT] = useState(true);
    
    return(<Box width={{sm:'90vw',md:'75vw'}} sx={{bgcolor:'#F0F4FE'}} height={{md:'90vh',sm:'80vh'}}>
    <Stack component={'form'} height={{md:'80.24vh',sm:'80.24vh'}}
  sx={{overflow: 'scroll',WebkitOverflowScrolling: 'touch', 
    '&::-webkit-scrollbar': {width: '12px',height:'1px'},
    '&::-webkit-scrollbar-thumb': {backgroundColor: '#1E53D740', borderRadius: '6px', width:'2px'},}}>
<form >
    <Box width={{sm:'50vw',md:'40vw'}} height={'30px'}></Box>
    <Stack direction={'row'} marginLeft={2} justifyContent={'initial'}>
        <Stack direction={'column-reverse'} justifyContent={'center'} spacing={{md:5.05,sm:4.45}}>
        <Typography variant="h6" color={'grey'} className={classes.title}>Date of Birth:<Box component="span" style={asterisk}>*</Box></Typography> 
<Typography variant="h6" color={'grey'} className={classes.title}>Roll No.:<Box component="span" style={asterisk}>*</Box></Typography> 
<Typography variant="h6" color={'grey'} className={classes.title}>Name:<Box component="span" style={asterisk}>*</Box></Typography> 
        </Stack>
        <Stack direction={'column'} justifyContent={'center'} marginLeft={'6vh'}>      <Grid xs={3} ><TextField placeholder="Text" variant="outlined"   InputProps={{style: inputStyle,}}/></Grid>
      <Grid xs={3}><TextField placeholder="Text" variant="outlined"   InputProps={{style: inputStyle,}}/></Grid>
      <Grid xs={3}><LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker className={classes.datePicker}/>
            </LocalizationProvider></Grid>
        </Stack>
    </Stack>
    <Stack direction={'row'}>
    <Stack direction={'row'} marginLeft={2} justifyContent={'initial'}>
        <Stack direction={'column-reverse'} justifyContent={'center'} spacing={{md:5.05,sm:4.45}}>
        <Typography variant="h6" color={'grey'} className={classes.title}>Email(Institute):<Box component="span" style={asterisk}>*</Box></Typography> 
<Typography variant="h6" color={'grey'} className={classes.title}>Contact No.:<Box component="span" style={asterisk}>*</Box></Typography> 
        </Stack>
        <Stack direction={'column'} mt={2} justifyContent={'center'} marginLeft={'3.5vh'}>     
      <Grid xs={3}><TextField placeholder="Text" variant="outlined"   InputProps={{style: inputStyle,}}/></Grid>
      <Grid xs={3}><TextField placeholder="Text" variant="outlined"   InputProps={{style: inputStyle,}}/></Grid>
        </Stack>
    </Stack>
    <Stack direction={'row'} marginLeft={2} justifyContent={'initial'} marginTop={{md:-2,sm:-1.5}}>
        <Stack direction={'column-reverse'} justifyContent={'center'} spacing={{md:2.55,sm:2}}>
        <Typography variant="h6" color={'grey'} className={classes.title}>Email(Personal):<Box component="span" style={asterisk}>*</Box></Typography> 
<Typography variant="h6" color={'grey'} className={classes.title}>Alternate Contact No.:<Box component="span" style={asterisk}>*</Box></Typography> 
        </Stack>
        <Stack direction={'column'} mt={2} justifyContent={'center'} marginLeft={'5vh'} spacing={0.2}>     
      <Grid xs={3}><TextField placeholder="Text" variant="outlined"   InputProps={{style: inputStyle,}}/></Grid>
      <Grid xs={3}><TextField placeholder="Text" variant="outlined"   InputProps={{style: inputStyle,}}/></Grid>
        </Stack>
    </Stack></Stack>
    <Stack direction={'row'} marginLeft={2} justifyContent={'initial'}>
      <Stack direction={'column-reverse'} justifyContent={'center'} spacing={{md:5.05,sm:4.45}} >     <Typography variant="h6" color={'grey'} className={classes.title}>Perm. Address Pincode:<Box component="span" style={asterisk}>*</Box></Typography>      <Typography variant="h6" color={'grey'} className={classes.title}>Perm. Address:<Box component="span" style={asterisk}>*</Box></Typography>
<Typography variant="h6" color={'grey'} className={classes.title}>Current Address Pincode:<Box component="span" style={asterisk}>*</Box></Typography>      <Typography variant="h6" color={'grey'} className={classes.title2}>Current Address:<Box component="span" style={asterisk}>*</Box></Typography>     
   </Stack>
<Stack direction={'column'} spacing={{md:'1.8vh',sm:'0.vh'}}>
      <Grid xs={3}><TextField  label="Text"  multiline  variant="outlined" InputProps={{style: inputStyle1,}}/></Grid>
      <Grid xs={3}><TextField placeholder="Text" variant="outlined"   InputProps={{style: inputStyle,}}/></Grid>
      <Grid xs={3}><TextField  label="Text"  multiline  variant="outlined" InputProps={{style: inputStyle2,}}/></Grid>
      <Grid xs={3} mt={{sm:10}}><TextField placeholder="Text" variant="outlined"   InputProps={{style: inputStyle,}}/></Grid>
      </Stack></Stack>
      <Button variant="contained" color="primary" className={classes.saveButton} sx={{backgroundColor:'blue'}}>Save Changes</Button> 
         <Button variant="contained" color="primary" disabled={T} className={classes.nextButton} type='submit'> Save & Next</Button> <br/><br/>
        </form></Stack></Box>);}