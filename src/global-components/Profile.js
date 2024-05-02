import { Box,Typography,Stack } from '@mui/material';
import Logo from '../img/Profile.jpg';


export default function Profile(props) {
  return (<Stack direction={'row'} width={'max-content'} alignItems={'center'}>     <Box component={'span'} width={'max-content'}style={{position:'relative',marginLeft:'82.5rem',color:'black',marginTop:'4px'}}>{props.name} Name</Box>
    <Box component={'span'}style={{position:'absolute',marginLeft:'90rem'}} mt={'10px'}><img src={Logo} alt="Default profile" height="38px"></img>
    </Box></Stack>
  );
}
