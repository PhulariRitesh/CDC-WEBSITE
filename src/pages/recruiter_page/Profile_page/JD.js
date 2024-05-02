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
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Checkbox,
  FormGroup,
  MenuItem,
  Divider,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import RowRadioButtonsGroup from "../../../global-components/Radiobutton";
import ClearIcon from "@mui/icons-material/Clear";
import ButtonGroup from "../../../global-components/ButtonGroup";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { DevTool } from "@hookform/devtools";
import { JD_TYPE } from "../../../Redux/JD/JDTypes";
import { Controller } from "react-hook-form";

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
const inputStyle = {
  height: "5.76vh",
  width: "38.59vw",
  marginBottom: "20px",
  backgroundColor: "#FFFFFF",
};
const inputStyle1 = {
  height: "14.423vh",
  width: "63.75vw",
  marginBottom: "20px",
  backgroundColor: "#FFFFFF",
};
const inputStyle2 = {
  height: "5.76vh",
  width: "23.35vw",
  marginBottom: "20px",
  backgroundColor: "#FFFFFF",
};
const inputStyle3 = {
  height: "3.37vh",
  width: "4.92vw",
  marginBottom: "20px",
  marginLeft: "2.34vw",
  backgroundColor: "#FFFFFF",
};
const inputStyle4 = {height:'4.2vh', width:'12.73vw',backgroundColor:'#FFFFFF', };
const asterisk = { color: "red" };

const JD = ({
  onclose,
  onButton,
  onButton1,
  onButton2,
  onButton3,
  jobId,
  Role,
}) => {

  const dispatch = useDispatch();

  const { register, handleSubmit, control,formState,watch} = useForm();
  const { errors } = formState;

  const token = useSelector(state=>state.auth.token);
  const navigate = useNavigate();
  useEffect(()=>{
    if(token==null){
      
      dispatch({type:AUTH, payload : {userid : null, password:null, token:null}})
      navigate('/')
  }
  },[])
  const handleFormSubmit = async (data) => {
    console.log("hello this is working", data) ;
    setT(false);

    try {
      console.log(data);
      dispatch({type:JD_TYPE,payload:data});
      const response = await fetch(
        `/recruiter/job/updateDescription/${jobId}`,
        {
          method: "POST",
          headers: {
            // "authenticated": "true",
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      console.log("requestData", response);
      if (response.ok) {
        console.log("Data sent successfully");
        alert("Data sent");
      } else {
        alert("Data is not sent");
        console.error("Failed to send data");
      }
    } catch (error) {
      alert("There is an error");
      console.error("Error:", errors);
    }
  };
  const handleBUTTON = () => {
    onclose(true);};
  const handlebutton = () => {
    onButton(true);};
  const handlebutton1 = () => {
    onButton1(true);};
  const handlebutton2 = () => {
    onButton2(true);
  };
  const handlebutton3 = () => {
    onButton3(true);
  };

  const [T, setT] = useState(true);

  const JD = useSelector((state) => state.JD);
  const {bond,role,designation, description, location, bondType, joiningDate, expectedHires,workingWeekDays} = JD;


  const classes = useStyles();

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
          <b>JOB ROLE {Role}</b>
        </Typography>
        <IconButton aria-label="delete" onClick={handleBUTTON}>
          <ClearIcon fontSize="large" />
        </IconButton>
      </Stack>
      <Grid
        item
        style={{
          fontFamily: "poppins",
          fontSize: "32px",
          color: "#1E53D7",
          marginTop: "-25px",
          marginBottom: "10px",
        }}
      >
        Job Description
      </Grid>
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
        <form action="#" onSubmit={handleSubmit(handleFormSubmit)} noValidate>
          <Grid item>
            {/* This is for Job Role */}
            <Typography variant="h6" color={"grey"} className={classes.title}>
              Job Role
              <Box component="span" style={asterisk}>
                *
              </Box>
            </Typography>
            <Grid xs={3} sm={1}>
              <TextField
                name={"role"}
                // value={role}
                placeholder="Text"
                variant="outlined"
                // onChange={handleChange1}
                // value={text1}
                required={true}
                InputProps={{ style: inputStyle }}
                {...register("role", {
                  required: true ? "Job Role should be filled" : "",
                })}
                error={!!errors["role"]}
                helperText={errors["role"] ? errors["role"].message : ""}
              />
            </Grid>
          </Grid>
          <Grid item mb={2}>
            {/* This is for Job Designation */}
            <Typography variant="h6" color={"blue"} className={classes.title}>
              Job Designation
              <Box component="span" style={asterisk}>
                *
              </Box>{" "}
            </Typography>
            <TextField
              name={"designation"}
              placeholder="Text"
              // value={designation}
              variant="outlined"
              InputProps={{ style: inputStyle }}
              {...register("designation", {
                required: "Job Designation should be filled",
              })}
              error={!!errors["designation"]}
              helperText={
                errors["designation"] ? errors["designation"].message : ""
              }
            />
          </Grid>
          <Grid item mb={2} >
            <Typography variant="h6" className={classes.title}>
              Job Description{" "}
              <Box component="span" style={asterisk}>  *</Box>{" "}
            </Typography>
            <TextField
              name={"description"}
              label="Text"
              // value={description}
              multiline
              variant="outlined"
              InputProps={{ style: inputStyle1 }}
              {...register("description", {
                required: "Job Description should be filled",
              })}
              error={!!errors["description"]}
              helperText={
                errors["description"] ? errors["description"].message : ""
              }
            />
          </Grid>
          <Grid item mb={2}>
            {/* This is for Job Location */}
            <Typography variant="h6" className={classes.title}>
              Job Location
              <Box component="span" style={asterisk}> *</Box>
            </Typography>
            <TextField
              name={"location"}
              placeholder="Text"
              // value={location}
              variant="outlined"
              InputProps={{ style: inputStyle2 }}
              {...register("location", {
                required: "Job Location should be filled",
              })}
              error={!!errors["location"]}
              helperText={errors["location"] ? errors["location"].message : ""}
            />
          </Grid>
          <Grid container >
            <Grid item xs={1} mb={5}>
              <Typography sx={{ fontSize: "17px" }}>Bond:</Typography>
              </Grid>
            <Grid item xs={3}>
              <FormControl marginTop="15px">
                <RadioGroup name="bond"  aria-labelledby="id1" row {...register("bond")}>
                  <FormControlLabel
                    control={<Radio />}
                    label="Yes"
                    value="Yes"
                  />
                  <FormControlLabel control={<Radio />} label="No" value="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            {watch("bond") === "Yes" && (
    <>
      <Grid item>
        <Typography sx={{ fontSize: "17px" }}>Type:</Typography>
      </Grid>
      <Grid item>
        <TextField
          name={"bondType"}
          // value={bondType}
          placeholder="Text"
          variant="outlined"
          InputProps={{ style: inputStyle4 }}
          {...register("bondType")}
        />
      </Grid>
    </>
  )}

          </Grid>
<Grid item mb={10}>
  <Typography variant="h6" className={classes.title}>
    Joining Date
  </Typography>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Controller
      name={"joiningDate"}
      // value={joiningDate}
      control={control}
      render={({ field }) => (
        <DatePicker
          {...field}
          className={classes.datePicker}
          inputProps={{
            name: "joiningDate",
          }}
        />
      )}
      rules={{ required: "Joining Date is required" }}
    />
  </LocalizationProvider>
</Grid>
          <Stack direction={"column"} spacing={2}>
            <Stack
              direction={"row"}
              style={{ position: "relative", color: "#6F7482" }}
            >
              Expected Number of Hires:
              <TextField
                arial-invalid="false"
                name={"expectedHires"}
                // value={expectedHires}
                type="number"
                variant="outlined"
                InputProps={{ style: inputStyle3 }}
                {...register("expectedHires")}
              />
            </Stack>

            <Stack
              direction={"row"}
              style={{ position: "relative", color: "#6F7482" }}
              spacing={2}
            >
              Number of Working weekdays:
              <TextField
                arial-invalid="false"
                name={"workingWeekDays"}
                type="number"
                // value={workingWeekDays}
                variant="outlined"
                InputProps={{ style: inputStyle3 }}
                {...register("workingWeekDays")}
                error={!!errors["workingWeekDays"]}
                helperText={
                  errors["workingWeekDays"] ? errors["workingWeekDays"].message : ""
                }
              />
            </Stack>
          </Stack>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.saveButton}
              type="submit"
              sx={{ backgroundColor: "blue" }}
            >
              Save Changes
            </Button>
            {/* <ClickButton height='40px' width='168px' value='Save Changes' fs='1.2rem' margin='30px 0 60px 0' js={true} /> */}
            <Button
              variant="contained"
              color="primary"
              disabled={T}
              className={classes.nextButton}
              onClick={handlebutton}
              >
              {" "}
              Save & Next
            </Button>{" "}
          </Grid>
          <br />
          <br />{" "}
        </form>
        <DevTool control={control}/>{" "}
      </Stack>{" "}
      <Divider /> <br />{" "}
      <ButtonGroup
        onEC={handlebutton}
        onJD={handlebutton1}
        onPD={handlebutton2}
        onSP={handlebutton3}
        T={T}
      />{" "}
    </Stack>
  );
};

export default JD;
