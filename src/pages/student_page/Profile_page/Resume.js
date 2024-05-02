import React,{useState} from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Box from "@mui/system/Box";
import Stack from "@mui/material/Stack";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { CloudUpload } from "@material-ui/icons";
import { Typography, Link, TextField, Divider, Button, Table } from "@mui/material";
import {makeStyles} from '@material-ui/core/styles';
import Tables from "../../../global-components/Table";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Modal } from "@material-ui/core";
import Uploading from "./Upload";


const useStyles = makeStyles(theme => ({
    saveButton: {marginTop: theme.spacing(2),borderSpacing:'4',borderRadius:'10px',color:'#FFFFFF',},
    addButton: {marginTop: theme.spacing(2),borderSpacing:'4',borderRadius:'10px',color:'#FFFFFF',},
    uploadButton: {marginTop: theme.spacing(2),borderSpacing:'4',borderRadius:'10px',color:'#FFFFFF',},
    nextButton: {marginTop: theme.spacing(2),borderSpacing:'4',marginLeft:'3.56vw',color:'#FFFFFF',borderRadius:'10px',backgroundColor:'green',},
    datePicker: {backgroundColor: '#FFFFFF', borderRadius: '4px', width:'23.35vw',
      '& input': {backgroundColor: '#FFFFFF',},},title: {fontSize:'13px',color:'#6F7492'},
      '& input': {backgroundColor: '#FFFFFF',},title2: {fontSize:'12px',marginTop:'-100px',color:'#6F7492'},}));

export default function Resume(){
    const theme = useTheme();
    const screenDesk = useMediaQuery(theme.breakpoints.up('md'));
    const screenTab = useMediaQuery(theme.breakpoints.down('md'));
    let left = '0';
    let left2 = '0';
    if(screenTab){
        left = '10.76vw';
        left2 = '6.76vw';
    }
    else if(screenDesk){
        left = '7.46vw';
        left2 = '3.76vw';
    }
    const [open, setopen] = useState(false);
    const handleclick = () => {
        setopen(true);
    }

    const handleClose = () => {
        setopen(false);
    }

    const classes = useStyles();  
    const [T,setT] = useState(true);
    return(<Box width={{sm:'85vw',md:'75vw'}} sx={{bgcolor:'#F0F4FE'}} height={{md:'90vh',sm:'81vh'}}>
    <Stack component={'form'}  height={{md:'80.24vh',sm:'80.24vh'}}
  sx={{overflow: 'scroll',WebkitOverflowScrolling: 'touch', 
    '&::-webkit-scrollbar': {width: '12px',height:'1px'},
    '&::-webkit-scrollbar-thumb': {backgroundColor: '#1E53D740', borderRadius: '6px', width:'2px'},}}><Box height={{md:'35vh',sm:'25vh'}} width={{md:'35vw',sm:'65vw'}} marginLeft={{md:'18vw',sm:'10vw'}} marginTop={{md:'5.5vh',sm:'2.5vh'}}  sx={{bgcolor:'white'}}>
        <Stack direction={'row'}>
        <Stack direction={'column'} mr={5}><AddCircleOutlineIcon style={{fontSize:150,marginTop:22,marginLeft:55}}fontSize="large"/>
        <Button variant="contained" color="primary" className={classes.addButton} sx={{backgroundColor:'blue',marginLeft:left2}}>CREATE NEW</Button>
        </Stack>
        <Divider orientation="vertical" flexItem sx={{height:225}} /> 
        <Stack direction={'column'}><CloudUpload style={{fontSize:150,marginTop:22,marginLeft:55}}fontSize="large"/>
        <Button variant="contained" color="primary" className={classes.uploadButton} sx={{backgroundColor:'blue',marginLeft:left2}} onClick={handleclick}>UPLOAD</Button>
        </Stack> </Stack>
        <Tables/>
    <Button variant="contained" color="primary" className={classes.saveButton} sx={{backgroundColor:'blue',marginLeft:left}}>Save Changes</Button> 
         <Button variant="contained" color="primary" disabled={T} className={classes.nextButton} type='submit'> Save & Next</Button>  </Box></Stack>

         <Modal open={open} onClose={handleClose}>
                <Box>
                    {/* Your Upload component goes here */}
                    <Uploading onclose={handleClose}/>
                </Box>
            </Modal>
        </Box>);}