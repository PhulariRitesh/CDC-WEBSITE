import { Add, PlusOne } from '@material-ui/icons';
import { height, width } from '@material-ui/system';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import react, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CR from './CR';
import { Modal } from "@mui/material";


export default function POC(){
    const currentNavbarState = useSelector(state=>state.navbar.currentState);
    const [marginLeft, setMarginLeft] = useState(20);
    const [open, setopen] = useState(false);

    
  const handleclick = () => {
    setopen(true);
  };
  const handleclose = () => {
    setopen(false);
  };

    // usage of useEffect hook to control the margin of the component based on navbar state : open/close
    useEffect(() => {
      setMarginLeft(currentNavbarState === "close" ? 20 : 30);
    }, [currentNavbarState]);

    return(
        <>
            <Box marginLeft={marginLeft} marginTop={'-95vh'}>

                <p>POC</p>
                <Grid item xs={12} justifyContent={'center'} alignItems={'center'}>

                    <Stack direction={'row'} gap={8}>
                        <Stack direction={'column'}>
                            <h1>Student POC Details</h1>
                            <Stack direction={'column'} height={150} width={600} bgcolor={'#dbe4fa'} borderRadius={5} justifyContent={'center'} paddingLeft={4} gap={1}>
                                <Typography variant='h3' fontSize={'1.3rem'} fontWeight={600}>Name : <Typography variant='p' fontSize={'1.3rem'}fontWeight={100}>Utsav Shah</Typography> </Typography>
                                <Typography variant='h3' fontSize={'1.3rem'} fontWeight={600}>Email : <Typography variant='p' fontSize={'1.3rem'}fontWeight={100}>abc@gmail.com</Typography> </Typography>
                                <Typography variant='h3' fontSize={'1.3rem'} fontWeight={600}>Contact No. : <Typography variant='p' fontSize={'1.3rem'}fontWeight={100}>99999 99999</Typography> </Typography>
                                
                            </Stack>
                        </Stack>
                        <Stack direction={'column'}>
                            <h1>Placement Officer Details</h1>
                            <Stack direction={'column'} height={150} width={600} bgcolor={'#dbe4fa'} borderRadius={5} justifyContent={'center'} paddingLeft={4} gap={1}>
                                <Typography variant='h3' fontSize={'1.3rem'} fontWeight={600}>Name : <Typography variant='p' fontSize={'1.3rem'}fontWeight={100}>Utsav Shah</Typography> </Typography>
                                <Typography variant='h3' fontSize={'1.3rem'} fontWeight={600}>Email : <Typography variant='p' fontSize={'1.3rem'}fontWeight={100}>abc@gmail.com</Typography> </Typography>
                                <Typography variant='h3' fontSize={'1.3rem'} fontWeight={600}>Contact No. : <Typography variant='p' fontSize={'1.3rem'}fontWeight={100}>99999 99999</Typography> </Typography>
                                
                            </Stack>
                        </Stack>


                    </Stack>

                    <h1 style={{marginTop:'30px'}}>Round Details</h1>

                    {/* Button code */}
                    <Button variant="contained" startIcon={<Add/>} sx={{width: '200px', height:'50px', backgroundColor:'#1e53d7', color:'white', borderRadius:'10px'}} onClick={handleclick}>Create Round </Button>

                    <Modal open={open} onClose={onclose}>
                        <CR 
                        onclose={handleclose}/>
                    </Modal>




                </Grid>


            </Box>
        </>
    );
};