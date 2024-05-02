import * as React from 'react';
import {TimelineItem} from '@mui/lab';
import {TimelineSeparator} from '@mui/lab';
import {TimelineConnector} from '@mui/lab';
import {TimelineContent} from '@mui/lab';
import {TimelineDot} from '@mui/lab';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Hidden } from '@mui/material';

  const inputStyle = {height:'5.76vh', width:'28.59vw',marginBottom:'20px',backgroundColor:'#FFFFFF', };

  export default function MytimelineItem(props){
  const theme = useTheme();
  let height = '0',top = '0';
  const screenDesk = useMediaQuery(theme.breakpoints.up('md'));
  const screenTab = useMediaQuery(theme.breakpoints.down('md'));
  if(screenTab){
    height = '10px';
    top = '2vh';
  }
  else if(screenDesk){
    height = '20px'
    top = '1vh';
  }
  const StyledTimelineDot = styled(TimelineDot)(({ theme }) => ({
    marginBottom:'0.1px',
    marginTop:'-0.1px',
    marginLeft:'-343px',
  }));

  const StyledTimelineContent = styled(TimelineContent)(({theme}) => ({
    color:'white',
      }));
  const StyledTimelineConnector = styled(TimelineConnector)(({theme}) => ({width:'10px',height:'20px',
    marginLeft:'-270px',
    backgroundColor:'aliceblue'
      }));
    const StyledTimelineSeperator = styled(TimelineSeparator)(({theme}) => ({
      height:height,
    }));
    let name = "Result Announcement";
    let t = props.content;
    let J = true;
    if(t === name){
      J = false;
    }

    return(
        <div><Hidden mdDown>
        <TimelineItem>
        {/* <StyledTimelineSeperator> */}
          <StyledTimelineDot  variant='outlined'/>
         {/* {J ? <StyledTimelineConnector inputProps={{style: inputStyle,}} /> : null} */}
        <StyledTimelineContent >{props.content}</StyledTimelineContent>
        {/* </StyledTimelineSeperator> */}
      </TimelineItem></Hidden></div>
    );
}