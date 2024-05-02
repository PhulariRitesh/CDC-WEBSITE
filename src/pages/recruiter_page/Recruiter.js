import Recruiterright from "./Recruiter_Right";
import { useState } from "react";
import LeftSidebar from '../../global-components/LeftSideBar'
import CompanyProfile from "./Profile_page/CompanyProfile"
import TopBar from "../../global-components/TopBar";
import BottomBar from "../../global-components/RecruiterBottombar";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Applications from './Appliactions_page/Application'
import { Podcasts } from "@mui/icons-material";
import Recruiter_sch from "./Recruiter_schedule/Recruiter_sch";
import POC from "./POC_page/POC";
import { Stack ,Grid} from "@mui/material";
import { useSelector } from "react-redux";



function Recruiter() {
  const [Open,setOpen] = useState(false);
  const [Open2,setOpen2] = useState(false);
  const [Open3,setOpen3] = useState(false);
  const [Open4,setOpen4] = useState(false);
  const onButton = () =>{setOpen(true);setOpen2(false);setOpen3(false);setOpen4(false);}
  const onButton2 = () =>{setOpen(false);setOpen2(true);setOpen3(false);setOpen4(false);}
  const onButton3 = () =>{setOpen(false);setOpen2(false);setOpen3(true);setOpen4(false);}
  const onButton4 = () =>{setOpen(false);setOpen2(false);setOpen3(false);setOpen4(true);}
  const onbut = () =>{setOpen(false);setOpen2(false);setOpen3(false);setOpen4(false);}
  const theme = useTheme();
  const screenDesk = useMediaQuery(theme.breakpoints.up('md'));
  const screenTab = useMediaQuery(theme.breakpoints.down('md'));

  let open = null;
  if(screenTab){
    open = false;
  }
  else if(screenDesk){
    open = true;
  }
  return (
    <div>
      {open ? 
    <LeftSidebar onButton={onButton} onbut={onbut} onButton2={onButton2} onButton3={onButton3} onButton4={onButton4}/> : <><TopBar CONTENT="RECRUITER"/><BottomBar onButton={onButton} onbut={onbut} onButton2={onButton2} onButton3={onButton3} onButton4={onButton4} /></>}
    {Open ? <CompanyProfile/> : Open2 ? <Applications/>: Open3 ? <POC/>: Open4 ? <Recruiter_sch/> : <Recruiterright/>} 
    </div>
  );
}

export default Recruiter;