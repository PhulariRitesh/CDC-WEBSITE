import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  TextField,
  IconButton,
  Box,
  Stack,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ClearIcon from "@mui/icons-material/Clear";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { DevTool } from "@hookform/devtools";
import { JD_TYPE } from "../../../Redux/JD/JDTypes";


import {AUTH} from "../../../Redux/auth/authType"
import { useNavigate } from "react-router-dom";





const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: theme.spacing(5),
    borderRadius: 10,
    backgroundColor: "#F0F4FE",
  },
  saveButton: {
    marginTop: theme.spacing(2),
    borderSpacing: "4",
    marginLeft: "20.76vw",
    borderRadius: "10px",
    color: "#FFFFFF",
  },
}));



const Popup = async ({ onclose, onButton }) => {
  const dispatch = useDispatch();
    const token = useSelector(state=>state.auth.token);
    const navigate = useNavigate();
    useEffect(()=>{
      if(token==null){
        
        dispatch({type:AUTH, payload : {userid : null, password:null, token:null}})
        navigate('/')
    }
    },[])
    try {
    // Fetching data after successful update
    const fetchData = async () => {
      try {
        const getJobsResponse = await fetch("/recruiter/getjobs", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          // Add any additional parameters or configurations as needed
        });

        console.log("getJobsResponse", getJobsResponse);

        if (getJobsResponse.ok) {
          const jobsData = await getJobsResponse.json();
          console.log("Received data from /recruiter/getjobs:", jobsData);
          // Process the jobs data as needed
        } else {
          console.error("Failed to fetch jobs data");
        }

        // Continue with any other logic as needed
      } catch (error) {
        alert("There is an error");
        console.error("Error:", error);
      }
    };

    // Call the fetchData function when needed
    await fetchData();

    // Your remaining code...
  } catch (error) {
    console.error("Error:", error);
  }


  const classes = useStyles();

  const handleBUTTON = () => {
    onclose(true);
  };
  return (
    <Stack
      direction={"column"}
      mt={{ md: "6.73vh", sm: "15.81vh" }}
      ml={{ md: "14.4vw", sm: "6.81vw" }}
      height={{ md: "86.53vh", sm: "76.53vh" }}
      width={{ md: "71.875vw", sm: "85.5vw" }}
      className={classes.formContainer}
      elevation={10}
    >
      <Stack direction={"row"} mb={2} justifyContent={"space-between"}>
        <Typography>
          <b>COMPANY NAME</b>
        </Typography>
        <IconButton aria-label="delete" onClick={handleBUTTON}>
          <ClearIcon fontSize="large" />
        </IconButton>
      </Stack>
      <Typography>JOB Role</Typography>
      <Stack
        
        height={{ md: "53.24vh", sm: "64.24vh" }}
        sx={{
          overflow: "scroll",
          WebkitOverflowScrolling: "touch",
          "&::-webkit-scrollbar": { width: "12px", height: "1px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#1E53D740",
            borderRadius: "6px",
            width: "2px",
          },
        }}
      >
      </Stack>{" "}
      <Divider /> <br />{" "}
    </Stack>
  );
};

export default Popup;
