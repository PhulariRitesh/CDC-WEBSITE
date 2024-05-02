import React,{useState} from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Box from "@mui/system/Box";
import Stack from "@mui/material/Stack";
import { Typography, Link, TextField, Divider, Button } from "@mui/material";
import {setAdmission,setBoard_10,setBoard_12,setCgpa,setDepartment,setGraduation,setMinor,setPassing_10,setPassing_12,setPercentage_10,setPercentage_12,setProgram,setSchool_10,setSchool_12} from '../../../Redux/AD/ADactions';
import { useSelector,useDispatch } from "react-redux";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    saveButton: {marginTop: theme.spacing(2),borderSpacing:'4',marginLeft:'20.76vw',borderRadius:'10px',color:'#FFFFFF',},
    nextButton: {marginTop: theme.spacing(2),borderSpacing:'4',marginLeft:'3.56vw',color:'#FFFFFF',borderRadius:'10px',backgroundColor:'green',},
    datePicker: {backgroundColor: '#FFFFFF', borderRadius: '4px', width:'23.35vw',
      '& input': {backgroundColor: '#FFFFFF',},},title: {fontSize:'13px',color:'#6F7492'},
      '& input': {backgroundColor: '#FFFFFF',},title2: {fontSize:'12px',marginTop:'-100px',color:'#6F7492'},}));
  const inputStyle = {height:'5.76vh', width:'25.59vw',marginBottom:'20px',backgroundColor:'#FFFFFF', };
  const inputStyle1 = {height:'5.76vh', width:'25.59vw',marginBottom:'20px',backgroundColor:'#FFFFFF', };

  const asterisk = {color: 'red', };

export default function AD(){
    
    const classes = useStyles();  
    const [T,setT] = useState(true);
    const dispatch = useDispatch();

    const program = useSelector((state) => state.program);
    const department = useSelector((state) => state.department);
    const minor = useSelector((state) => state.minor);
    const admission = useSelector((state) => state.admission);
    const graduation = useSelector((state) => state.graduation);
    const cgpa = useSelector((state) => state.cgpa);
    const school_10 = useSelector((state) => state.school_10);
    const board_10 = useSelector((state) => state.board_10);
    const school_12 = useSelector((state) => state.school_10);
    const board_12 = useSelector((state) => state.school_12);
    const passing_10 = useSelector((state) => state.passing_10);
    const percentage_10 = useSelector((state) => state.percentage_10);
    const passing_12 = useSelector((state) => state.passing_12)
    const percentage_12 = useSelector((state) => state.percentage_12);

  const handlePrograms = (e) => {
    dispatch(setProgram(e.target.value));};
  const handleDepartment = (e) => {
    dispatch(setProgram(e.target.value));};
  const handleMinor = (e) => {
    dispatch(setProgram(e.target.value));};
  const handleAdmission = (e) => {
    dispatch(setProgram(e.target.value));};
  const handleGraduation = (e) => {
    dispatch(setProgram(e.target.value));};
  const handleCgpa = (e) => {
    dispatch(setProgram(e.target.value));};
  const handleSchool_10 = (e) => {
    dispatch(setProgram(e.target.value));};
  const handleBoard_10 = (e) => {
    dispatch(setProgram(e.target.value));};
  const handleSchool_12 = (e) => {
    dispatch(setProgram(e.target.value));};
  const handleBoard_12 = (e) => {
    dispatch(setProgram(e.target.value));};
  const handlePassing_10 = (e) => {
    dispatch(setProgram(e.target.value));};
  const handlePercentage_10 = (e) => {
    dispatch(setProgram(e.target.value));};
  const handlePassing_12 = (e) => {
    dispatch(setProgram(e.target.value));};
  const handlePercentage_12 = (e) => {
    dispatch(setProgram(e.target.value));};
    
    return(<Box width={{sm:'90vw',md:'75vw'}} sx={{bgcolor:'#F0F4FE'}} height={{md:'90vh',sm:'80vh'}}>
    <Stack component={'form'} height={{md:'80.24vh',sm:'80.24vh'}}
  sx={{overflow: 'scroll',WebkitOverflowScrolling: 'touch', 
    '&::-webkit-scrollbar': {width: '12px',height:'1px'},
    '&::-webkit-scrollbar-thumb': {backgroundColor: '#1E53D740', borderRadius: '6px', width:'2px'},}}>
<form >
    <Box width={{sm:'50vw',md:'40vw'}} height={'30px'}></Box>
    
    <Typography    variant="h5"    fontWeight={20}   fontSize={{ xs: 6, sm: 17, md: 20 }} ml={5}    color={"blue"}>College Details</Typography>
    <Stack direction={'row'} justifyContent={'initial'}>
    <Stack direction={'row'} marginLeft={2} justifyContent={'initial'}>
      <Stack direction={'column-reverse'} justifyContent={'center'} spacing={{md:5.05,sm:4.45}} margin={'12px'}>     <Typography variant="h6" color={'grey'} className={classes.title}>CGPA:<Box component="span" style={asterisk}>*</Box></Typography>     
 <Typography variant="h6" color={'grey'} className={classes.title}>Year of Admission:<Box component="span" style={asterisk}>*</Box></Typography>     
 <Typography variant="h6" color={'grey'} className={classes.title}>Minor:<Box component="span" style={asterisk}>*</Box></Typography>     
 <Typography variant="h6" color={'grey'} className={classes.title}>Department:<Box component="span" style={asterisk}>*</Box></Typography>     
 <Typography variant="h6" color={'grey'} className={classes.title}>Program:<Box component="span" style={asterisk}>*</Box></Typography>     
   </Stack>
<Stack direction={'column'} spacing={{md:'0.5vh',sm:'-0.2vh'}}>
  <Grid xs={3} ><TextField placeholder="Text" variant="outlined"value={program}onChange={handlePrograms}InputProps={{style: inputStyle,}}/></Grid>
<Grid xs={3}><TextField placeholder="Text" variant="outlined"value={department}onChange={handleDepartment}InputProps={{style: inputStyle,}}/></Grid>
    <Grid xs={3}><TextField placeholder="Text" variant="outlined" value={minor} onChange={handleMinor}  InputProps={{style: inputStyle,}}/></Grid>
    <Grid xs={3}><TextField placeholder="Text" variant="outlined"   InputProps={{style: inputStyle,}}/></Grid>
    <Grid xs={3}><TextField placeholder="Text" variant="outlined"  InputProps={{style: inputStyle,}}/></Grid>
      </Stack></Stack>
    <Stack direction={'row'} marginLeft={2} justifyContent={'initial'} mt={{sm:10,md:18}}>
      <Stack direction={'column-reverse'} justifyContent={'center'} spacing={{md:5.05,sm:4.45}} margin={'12px'}>   
 <Typography variant="h6" color={'grey'} className={classes.title}>Year of Graduation:<Box component="span" style={asterisk}>*</Box></Typography>         
   </Stack>
<Stack direction={'column'} justifyContent={'center'} spacing={{md:'0.5vh',sm:'-0.2vh'}} >
      <Grid xs={3} ><TextField placeholder="Text" variant="outlined"   InputProps={{style: inputStyle,}}/></Grid>
      </Stack></Stack></Stack><br/>
    <Typography variant="h5" fontWeight={20} fontSize={{ xs: 6, sm: 17, md: 20 }} ml={5} color={"blue"}>
            Academic Details
          </Typography>
          <Stack direction={'row'} marginLeft={4} justifyContent={'initial'}>
    <Stack direction={'row'}  justifyContent={'initial'}>
      <Stack direction={'column-reverse'} justifyContent={'center'} spacing={{md:5.05,sm:4.45}} margin={'10px'}>      
 <Typography variant="h6" color={'grey'} className={classes.title2}>12th Class Board:<Box component="span" style={asterisk}>*</Box></Typography>     
 <Typography variant="h6" color={'grey'} className={classes.title2}>School Name(till 12th):<Box component="span" style={asterisk}>*</Box></Typography>     
 <Typography variant="h6" color={'grey'} className={classes.title2}>10th Class Board:<Box component="span" style={asterisk}>*</Box></Typography>     
 <Typography variant="h6" color={'grey'} className={classes.title2}>School Name(till 10th):<Box component="span" style={asterisk}>*</Box></Typography>     
   </Stack>
<Stack direction={'column'} spacing={{md:'1.2vh',sm:'1.6vh'}}>
      <Grid xs={3}><TextField placeholder="Text" variant="outlined"   InputProps={{style: inputStyle1,}}/></Grid>
      <Grid xs={3}><TextField placeholder="Text" variant="outlined"   InputProps={{style: inputStyle1,}}/></Grid>
      <Grid xs={3}><TextField placeholder="Text" variant="outlined"   InputProps={{style: inputStyle1,}}/></Grid>
      <Grid xs={3}><TextField placeholder="Text" variant="outlined"   InputProps={{style: inputStyle1,}}/></Grid>
      </Stack></Stack>
    <Stack direction={'row'} marginLeft={4} justifyContent={'initial'}>
      <Stack direction={'column-reverse'} justifyContent={'center'} spacing={{md:5.05,sm:4.45}} margin={'10px'}>      
 <Typography variant="h6" color={'grey'} className={classes.title2}>12th Class Percentage:<Box component="span" style={asterisk}>*</Box></Typography>     
 <Typography variant="h6" color={'grey'} className={classes.title2}>Year of Passing:<Box component="span" style={asterisk}>*</Box></Typography>     
 <Typography variant="h6" color={'grey'} className={classes.title2}>10th Class Percentage:<Box component="span" style={asterisk}>*</Box></Typography>     
 <Typography variant="h6" color={'grey'} className={classes.title2}>Year of Passing:<Box component="span" style={asterisk}>*</Box></Typography>     
   </Stack>
<Stack direction={'column'} spacing={{md:'1.2vh',sm:'1.6vh'}}>
      <Grid xs={3}><TextField placeholder="Text" variant="outlined"   InputProps={{style: inputStyle1,}}/></Grid>
      <Grid xs={3}><TextField placeholder="Text" variant="outlined"   InputProps={{style: inputStyle1,}}/></Grid>
      <Grid xs={3}><TextField placeholder="Text" variant="outlined"   InputProps={{style: inputStyle1,}}/></Grid>
      <Grid xs={3}><TextField placeholder="Text" variant="outlined"   InputProps={{style: inputStyle1,}}/></Grid>
      </Stack></Stack></Stack>
      <Button variant="contained" color="primary" className={classes.saveButton} sx={{backgroundColor:'blue'}}>Save Changes</Button> 
         <Button variant="contained" color="primary" disabled={T} className={classes.nextButton} type='submit'> Save & Next</Button> <br/><br/>
        </form></Stack></Box>);}