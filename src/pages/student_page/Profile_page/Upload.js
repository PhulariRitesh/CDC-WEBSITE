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
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ClearIcon } from "@mui/x-date-pickers";
import uploadIcon from "../../../img/uploadButton.png"
import { height } from "@material-ui/system";
import LinearLoader from "../../../global-components/LinearLoader";
import ClickButton from "../../../global-components/ClickButton";
import ResumeLoader from "../../../global-components/ResumeLoader";


const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: theme.spacing(5),
    borderRadius: 10,
    backgroundColor: "#F0F4FE",
  },
  savechangesButton: {
    marginTop: theme.spacing(2),
    borderSpacing: "4",
    marginLeft: "20.76vw",
    borderRadius: "10px",
    color: "#FFFFFF",
  },
  nextButton: {
    marginTop: theme.spacing(2),
    borderSpacing: "4",
    marginLeft: "3.56vw",
    color: "#FFFFFF",
    borderRadius: "10px",
    backgroundColor: "green",
  },
  datePicker: {
    backgroundColor: "#FFFFFF",
    borderRadius: "4px",
    width: "23.35vw",
    "& input": { backgroundColor: "#FFFFFF" },
  },
  title: { fontSize: "16px", color: "#6F7492" },
}));

const Uploading = ({onclose}) => {
  const classes = useStyles();

  const handleBUTTON = () => {
    onclose(true);
  };

  const handleFileUpload = (event) => {
    // Handle the file upload logic here
    const selectedFile = event.target.files[0];
    console.log("Selected file:", selectedFile);
    // Add your file upload logic here, e.g., send the file to the server
  };

  const handleBrowseClick = () => {
    // Trigger a click on the hidden file input
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  };

  return (
    <>
      <Stack
        direction={"column"}
        mt={{ md: "6.73vh", sm: "15.81vh" }}
        ml={{ md: "14.4vw", sm: "5.81vw" }}
        height={{ md: "85.53vh", sm: "68.53vh" }}
        width={{ md: "65.875vw", sm: "75.5vw" }}
        className={classes.formContainer}
        elevation={10} border={"2px solid black"}
        fontFamily={"Poppins"}
      >

        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography variant="h1" fontSize={32} color={"#1E53D7"} fontWeight={700}>Upload Files</Typography>
            <IconButton aria-label="delete"  onClick={handleBUTTON}>
                <ClearIcon fontSize="large" sx={{color:"#1E53D7"}}/>
            </IconButton>
        </Stack>

        <Stack direction={'row'} justifyContent={'space-around'} alignItems={'center'} padding={"45px 0"}>

  
            <Stack direction={'row'} gap={5} width={500} height={384} justifyContent={'center'} alignItems={'center'} border={"2px dashed grey"}>
                <Stack direction={'column'} gap={2} alignItems={'center'} justifyContent={'center'}>
                    <Box sx={{backgroundImage:`url(${uploadIcon})`, backgroundSize:'cover'} } height={'170px'} width={'285px'}></Box>
                    <Typography variant="p" fontSize={15}>Drag and drop files here</Typography>

                    <Stack direction={'row'} alignItems={'center'} gap={0.5}>
                        <Box width={80} sx={{backgroundColor:'black'}} height={2}></Box>
                        <Typography variant="p" fontSize={12}>OR</Typography>
                        <Box width={80} sx={{backgroundColor:'black'}} height={2}></Box>
                    </Stack>
                    <input
                type="file"
                style={{ display: "none" }}
                onChange={handleFileUpload}
                id="fileInput"
              />
                    <Button variant="outlined" sx={{borderRadius:'15px', width:'150px'}} onClick={handleBrowseClick}>Browse</Button>

                </Stack>

            </Stack>
            <Stack direction={'column'} gap={2} height={384} width={450} justifyContent={'space-between'}>
                <ResumeLoader/>
                <ResumeLoader/>
                <ResumeLoader/>
                <ResumeLoader/>
            </Stack>

        </Stack>
        <ClickButton js={true} fs={"35px"} height={50} width={200} margin={7} value={"Upload"}/>




      </Stack>
    </>
  );
}

export default Uploading;