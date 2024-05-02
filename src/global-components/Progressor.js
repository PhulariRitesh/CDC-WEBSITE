import { styled } from '@mui/material/styles';
import {Box} from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function CustomizedProgressBars() {
  
  const theme = useTheme();
  let width = 0,top = '0';
  const screenDesk = useMediaQuery(theme.breakpoints.up('md'));
  const screenTab = useMediaQuery(theme.breakpoints.down('md'));
  if(screenTab){
    width = 290;
    top = '2vh';
  }
  else if(screenDesk){
    width = 380;
    top = '1vh';
  }
  
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  width:width,
  borderRadius: 5,
  position:'relative',
  left:'3em',
  top:top,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 50 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#FFA500' : '#308fe8',
  },
}));
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <BorderLinearProgress variant="determinate" value={5} />
    </Box>
  );
}