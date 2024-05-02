import React, { useState } from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Box from "@mui/system/Box";
import Stack from "@mui/material/Stack";
import { Typography, Link } from "@mui/material";
import CD from "./CD";
import AD from "./AD";
import Resume from "./Resume";

export default function StudentProfile() {
  const [isCDModalOpen, setIsCDModalOpen] = useState(true);
  const [isADModalOpen, setIsADModalOpen] = useState(false);
  const [C,setC] = useState("blue");
  const [D,setD] = useState("black");
  const [F,setF] = useState("black");
  const [E,setE] = useState("#F0F4FE");
  const [D1,setD1] = useState("white");
  const [G,setG] = useState("white");
  const handleCDModalOpen = () => {
    setIsCDModalOpen(true);
    setD("black");setE("#F0F4FE");
    setC("blue");setD1("white");
    setF("black");setG("white");
  };
  const handleADModalOpen = () => {
    setC("black");setD1("#F0F4FE");
    setD("blue");setE("white");
    setF("black");setG("white");
    setIsCDModalOpen(false);
    setIsADModalOpen(true);};
  const handleResume = () => {
    setD("black");setD1("white");
    setC("black");setE("white");
    setF("blue");setG("#F0F4FE");
    setIsADModalOpen(false);
  setIsCDModalOpen(false)};

  return (
    <>
      <Grid  item xs={12} md={8} sm={12} width={{ md: "82.5vw" }} justifyContent={"center"} alignItems={"center"} position={"absolute"} left={{ md: "10vw", sm: "4.37vw", xs: "3.75vw" }} marginTop={{ md: "-98vh", sm: "2.8vh", xs: "10.8vh" }}>
    <Stack direction={"column"} justifyContent={"left"} fontFamily={"Poppins"}  height={{ md: "80vh" }}>
    <Link underline="hover" color={"blue"} sx={{ cursor: "pointer" }}> Profile</Link>
          <Typography variant="h4" fontWeight={400} fontSize={{ xs: 16, sm: 24, md: 32 }} color={"black"}> Profile</Typography>
          <Stack direction={"row"}>
            <Box width={200} borderBottom={2} borderRadius={4} color={C}
              sx={{ bgcolor: E, cursor: "pointer", paddingLeft: "16px", paddingTop: "10px", paddingRight: "16px", paddingBottom: "10px", fontSize: 20,}} onClick={handleCDModalOpen}><b>Contact details</b></Box>
            <Box width={220} borderBottom={2} borderRadius={4} color={D}
              sx={{ bgcolor: D1, cursor: "pointer", paddingLeft: "16px", paddingTop: "10px", paddingRight: "12px", paddingBottom: "10px", fontSize: 20,}} onClick={handleADModalOpen}><b>Academic Details</b> </Box> 
              <Box width={200} borderBottom={2} borderRadius={4} color={F}
              sx={{ bgcolor: G, cursor: "pointer", paddingLeft: "16px", paddingTop: "10px", paddingRight: "16px", paddingBottom: "10px", fontSize: 20,}} onClick={handleResume}><b>Resume</b></Box></Stack> {isCDModalOpen ? <CD /> : isADModalOpen ? <AD /> : <Resume/>} </Stack> </Grid> </>);}
