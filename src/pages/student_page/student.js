import { useState } from "react";
import StudentSideBar from '../../global-components/StudentSideBar'
import StudentProfile from "./Profile_page/StudentProfile";
import { Stack,Box,useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import TopBar from "../../global-components/TopBar";
import BottomBar from "../../global-components/StudentBottombar";
import Jobs from "./Jobs_Page/Jobs";
import Student_sch from "./Student_schedule/Student_sch";
import Popup from "./Jobs_Page/Modal";
import { Modal } from "@material-ui/core";

export default function Student() {
  const theme = useTheme();
  let open = null;
  const Desk = useMediaQuery(theme.breakpoints.up('md'));
  const Tab = useMediaQuery(theme.breakpoints.down('md'));
  if (Tab){ open = false;}else if(Desk){ open = true;}
  const [Open,setOpen] = useState(false);
  const [Open2,setOpen2] = useState(false);
  const [Open3,setOpen3] = useState(false);
  const onButton = () =>{setOpen(true);setOpen2(false);setOpen3(false);}
  const onbut = () =>{setOpen(false);setOpen2(false);setOpen3(false);}
  const onButton2 = () =>{setOpen2(true);setOpen(false);setOpen3(false);}
  const onButton3 = () =>{ setOpen3(true);setOpen(false);setOpen2(false);}
  return (
    <Box component={'div'}>
    {open ? <StudentSideBar onButton={onButton} onbut={onbut} onButton2={onButton2} onButton3={onButton3} />  : <><TopBar CONTENT="STUDENT"/><BottomBar onButton={onButton} onbut={onbut} onButton2={onButton2} onButton3={onButton3}/></>}
    {Open ? <StudentProfile/> : Open2 ? <Jobs/> : Open3 ? <Student_sch/> : <Stack direction={'column'} mt={-60}>
        <Box component={'span'}style={{position:'relative',marginLeft:'42rem',width:'max-content',marginTop:'',fontFamily:'poppins',fontSize:'5rem'}}>Welcome</Box><br/></Stack>}
    </Box>
  );
}