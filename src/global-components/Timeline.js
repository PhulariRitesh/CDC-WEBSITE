import {Timeline} from '@mui/lab';
import MytimelineItem from './TimelineItem.js';
import {Box} from '@mui/material';
import Progressor from './Progressor.js'
import { Typography } from '@material-ui/core';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
const commonStyles = { bgcolor: 'background.paper',
 borderColor: 'text.primary',
  ForkLeft:'2rem',  border: 2,  };

export default function Mytimeline(props) {
  const theme = useTheme();
  let height = '0',top = '0';
  let size = '0',width = '0';
  const screenDesk = useMediaQuery(theme.breakpoints.up('md'));
  const screenTab = useMediaQuery(theme.breakpoints.down('md'));
  if(screenTab){
    height = '30rem';
    top = '6rem';
    size = '3vh';
    width = '50vw'
  }
  else if(screenDesk){
    height = '42rem';
    top = '-48vh';
    size = '5vh';
    width = '30vw';
  }
  return (
    <Box  sx={{ ...commonStyles,borderRadius:'22px',backgroundColor:'Highlight',textAlign:'center',marginTop:top,justifyContent:'center',height:height,width:width}}>
        <br/>
        <Typography style={{color:'white',fontSize:size}}>Timeline</Typography>
        <Typography style={{fontSize:size,color:'white'}}>20% complete</Typography>
        <Progressor/>
        <br/>
    <Timeline position="right" sx={{position:'center',height:''}} >
      <MytimelineItem content = "Complete your profile" color="blue"/>
      <MytimelineItem content = "Profile verification Status"/>      
      <MytimelineItem content = "Students Applications Submitted"/>
      <MytimelineItem content = "PPT - DD/MM/YYYY"/>
      <MytimelineItem content = "Test - DD/MM/YYYY"/>
      <MytimelineItem content = "Interview - DD/MM/YYYY"/>
      <MytimelineItem content = "Result Announcement"/>
    </Timeline> 
    </Box> 
  );
}