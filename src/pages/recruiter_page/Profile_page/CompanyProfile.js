import React, { useState } from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Box from "@mui/system/Box";
import Stack from "@mui/material/Stack";
import { Typography, Link, TextField, Divider, Button } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Modal } from "@mui/material";
import JD from "./JD";
import EC from "./EC";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SP from "./SP";
import PD from "./PD";
import {
  setButtons,
  setCategory,
  setSector,
} from "../../../Redux/CompanyProfile/CompanyProfileActions";
import { useSelector, useDispatch } from "react-redux";
import {AUTH} from "../../../Redux/auth/authType"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function CompanyProfile() {
  
  const companyDetails = useSelector((state) => state.companyDetails);
  const {companyName,about,category,sector,website} = companyDetails;
  const dispatch = useDispatch();

  const handleCategoryChange = (e) => {
    dispatch(setCategory(e.target.value));
  };
  const handleSectorChange = (e) => {
    dispatch(setSector(e.target.value));
  };

  const [Role, setRole] = useState(1);
  const [numberOfButtons, setNumberOfButtons] = useState(1);
  const increment = () => {
    setNumberOfButtons(numberOfButtons + 1);
    dispatch(setButtons(numberOfButtons + 1));
  };

  const decrement = () => {
    if (numberOfButtons > 0) {
      setNumberOfButtons(numberOfButtons - 1);
      dispatch(setButtons(numberOfButtons - 1));
    }
  };

  const handleButtonsChange = (event) => {
    const value = parseInt(event.target.value);
    setNumberOfButtons(value);
    dispatch(setButtons(event.target.value));
  };

  const token = useSelector(state=>state.auth.token);
  const navigate = useNavigate();
  useEffect(()=>{
    if(token==null){
      
      dispatch({type:AUTH, payload : {userid : null, password:null, token:null}})
      navigate('/')
  }
  },[])

  const [currentJobId, setCurrentJobId] = useState(null);
  const createJob = async () => {
    // handleclick();
    try {
      console.log("here try");
      const requestData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "credentials" : "include",
          // "authenticated": true,
          "Authorization": `Bearer ${token}`,
        },
        // You may need to pass additional data in the body depending on your backend requirements
      }
      const response = await fetch("/recruiter/createJob", requestData);
      
      // console.log("hello",response);


      if (response.ok) {
        const responseData = await response.json();
        const jobId = responseData.job._id;
        console.log(jobId);
        console.log(responseData);
        setCurrentJobId(jobId);
        handleclick();
      } else {
        console.error("Failed to create job");
        // Handle the error as needed
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle the error as needed
    }
  };

  const generateButtons = () => {
    const buttons = [];
    for (let i = 1; i <= numberOfButtons; i++) {
      buttons.push(
        <Button
          onClick={() => {
            createJob();
            setRole(i);
          }}
          key={i}
          variant="contained"
          color="primary"
        >
          Job Role {i}
        </Button>
      );
    }
    return buttons;
  };

  const theme = useTheme();
  let height;
  const Desk = useMediaQuery(theme.breakpoints.down("md"));
  const Tab = useMediaQuery(theme.breakpoints.down("sm"));
  if (Tab) {
    height = "23vw";
  } else if (Desk) {
    height = "7vw";
  }

  const inputStyle = {
    height: "3.39vh",
    width: { height },
    borderRadius: "11px",
    border: "2px",
    alignItems: "center",
  };
  const inputStyle1 = {
    height: "4.3vh",
    width: { height },
    border: "2px",
    alignItems: "center",
  };
  const [value, setValue] = useState(null);
  const [open, setopen] = useState(false);
  const [open1, setopen1] = useState(false);
  const [open2, setopen2] = useState(false);
  const [open3, setopen3] = useState(false);

  const handleclick = () => {
    setopen(true);
    setopen1(false);
    setopen2(false);
    setopen3(false);
  };
  const handleclose = () => {
    setopen(false);
    setopen1(false);
    setopen2(false);
    setopen3(false);
  };
  const handleOpen = () => {
    setopen(false);
    setopen2(false);
    setopen3(false);
    setopen1(true);
  };
  const handlePD = () => {
    setopen2(true);
    setopen1(false);
    setopen(false);
    setopen3(false);
  };
  const handleSP = () => {
    setopen3(true);
    setopen1(false);
    setopen2(false);
    setopen(false);
  };

  return (
    <>
      <Modal open={open} onClose={onclose}>
        <JD
          jobId={currentJobId}
          Role={Role}
          onclose={handleclose}
          onButton={handleOpen}
          onButton1={handleclick}
          onButton2={handlePD}
          onButton3={handleSP}
        />
      </Modal>
      <Modal open={open1} onClose={onclose}>
        <EC
          jobId={currentJobId}
          Role={Role}
          onclose={handleclose}
          onButton={handleOpen}
          onButton1={handleclick}
          onButton2={handlePD}
          onButton3={handleSP}
        />
      </Modal>
      <Modal open={open2} onClose={onclose}>
        <PD
          jobId={currentJobId}
          Role={Role}
          onclose={handleclose}
          onButton={handleOpen}
          onButton1={handleclick}
          onButton2={handlePD}
          onButton3={handleSP}
        />
      </Modal>
      <Modal open={open3} onClose={onclose}>
        <SP
          jobId={currentJobId}
          Role={Role}
          onclose={handleclose}
          onButton={handleOpen}
          onButton1={handleclick}
          onButton2={handlePD}
          onButton3={handleSP}
        />
      </Modal>
      <Grid
        item
        xs={12}
        md={8}
        sm={12}
        width={{ md: "82.5vw" }}
        justifyContent={"center"}
        alignItems={"center"}
        position={"absolute"}
        left={{ md: "10vw", sm: "4.37vw", xs: "3.75vw" }}
        marginTop={{ md: "-93vh", sm: "12.8vh", xs: "10.8vh" }}
      >
        <Stack
          direction={"column"}
          justifyContent={"left"}
          fontFamily={"Poppins"}
          height={{ md: "80vh" }}
        >
          <Link underline="hover" color={"blue"} sx={{ cursor: "pointer" }}>
            Profile
          </Link>

          <Typography
            variant="h4"
            fontWeight={400}
            fontSize={{ xs: 16, sm: 24, md: 32 }}
            color={"black"}
          >
            Company Details
          </Typography>

          <Typography
            variant="h4"
            fontWeight={500}
            fontSize={{ xs: 20, md: 20 }}
            color={"blue"}
          >
            {companyName}
          </Typography>

          <Typography
            variant="h4"
            fontWeight={400}
            fontSize={{ xs: 16, md: 16 }}
            color={"black"}
          >
            {website}
          </Typography>

          <Typography
            variant="p"
            fontWeight={400}
            width={{ md: "79.2vw", sm: "69.2vw", xs: "90vw" }}
            mb={4}
            fontSize={{ xs: 14, md: 16 }}
            color={"black"}
          >
          {about}
          </Typography>

          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Box component="span">Category:</Box>

            <TextField
              size="small"
              placeholder="Text"
              InputProps={{ style: inputStyle }}
              value={category}
              onChange={handleCategoryChange}
            />
          </Stack>

          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={4}
            mt={1}
            mb={3}
          >
            <Box component="span">Sector:</Box>

            <TextField
              placeholder="Text"
              InputProps={{ style: inputStyle }}
              value={sector}
              onChange={handleSectorChange}
            />
          </Stack>

          <Divider />

          <Typography
            variant="h4"
            mt={2}
            fontWeight={400}
            fontSize={{ xs: 16, md: 32 }}
            color={"black"}
          >
            Job Application Form
          </Typography>

          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={1}
            mt={1}
            mb={3}
          >
            <Box component="span">Number of Job roles:</Box>

            <Button onClick={decrement} sx={{ padding: "0px" }}>
              <RemoveCircleOutlineIcon />
            </Button>

            <TextField
              size="small"
              value={numberOfButtons}
              InputProps={{ style: inputStyle1 }}
              onChange={handleButtonsChange}
            />

            <Button
              onClick={increment}
              sx={{ padding: "0px", paddingLeft: "0px" }}
            >
              <AddCircleOutlineIcon />
            </Button>
          </Stack>
          <Stack direction={"row"} spacing={4}>
            {generateButtons()}
          </Stack>
        </Stack>
      </Grid>{" "}
    </>
  );
}

export default CompanyProfile;
