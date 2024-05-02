import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Box, Grid, Typography, TextField } from "@material-ui/core";
import { Stack, Button } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import RowRadioButtonsGroup from "../../../global-components/Radiobutton";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import ButtonGroup from "../../../global-components/ButtonGroup";
import Select from "@mui/material/Select";
import useMediaQuery from "@mui/material/useMediaQuery";
import { validateTextField } from "../../../global-components/Validate";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
// import MultiSelect from "../../../global-components/Multiselect";
// import { width } from "@material-ui/system";
import MenuItem from '@mui/material/MenuItem';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';


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
const asterisk = { color: "red" };
const Array1 = [
  { label: "BTech", value: "BTech" },
  { label: "MTech", value: "MTech" },
  { label: "PHD", value: "PHD" },
];

const CR = ({ onclose, onButton, onButton1, onButton2, onButton3 }) => {
  const handleBUTTON = () => {
    onclose(true);
  };
  const handlebutton = () => {
    onButton(true);
  };
  const handlebutton1 = () => {
    onButton1(true);
  };
  const handlebutton2 = () => {
    onButton2(true);
  };
  const handlebutton3 = () => {
    onButton3(true);
  };

  const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));
  //Validating Textfields and checking textfields that are these textfields filled or not
  const [textFieldValue1, setTextFieldValue1] = useState("");
  const [textFieldValue2, setTextFieldValue2] = useState("");
  const [textFieldValue3, setTextFieldValue3] = useState("");
  const [textFieldValue4, setTextFieldValue4] = useState("");
  const [bondtype, setbondtype] = useState("");
  const [date, setdate] = useState("");
  const [numberofHires, setnofHires] = useState(0);
  const [workingdays, setworkingdays] = useState(0);
  const [T, setT] = useState(true);

  const handleChange1 = (event) => {
    const { value } = event.target;
    setTextFieldValue1(value);
  };
  const handleChange2 = (event) => {
    const { value } = event.target;
    setTextFieldValue2(value);
  };
  const handleChange3 = (event) => {
    const { value } = event.target;
    setTextFieldValue3(value);
  };
  const handleChange4 = (event) => {
    const { value } = event.target;
    setTextFieldValue4(value);
  };
  const handleChange5 = (event) => {
    const { value } = event.target;
    setbondtype(value);
  };
  const handleChange6 = (event) => {
    const { value } = event.target;
    setdate(value);
  };
  const handleChange7 = (event) => {
    const { value } = event.target;
    setnofHires(value);
  };
  const handleChange8 = (event) => {
    const { value } = event.target;
    setworkingdays(value);
  };

  const handle = () => {
    const isValid1 = validateTextField(textFieldValue1, "text");
    const isValid2 = validateTextField(textFieldValue2, "text");
    const isValid3 = validateTextField(textFieldValue3, "text");
    const isValid4 = validateTextField(textFieldValue4, "text");

    if (isValid1 && isValid2 && isValid3 && isValid4) {
      setT(false);

      // Prepare the form data
      const formData = {
        jobRole: textFieldValue1,
        jobDesignation: textFieldValue2,
        jobDescription: textFieldValue3,
        jobLocation: textFieldValue4,
        bondType: bondtype,
        joiningDate: date,
        expectedNumberOfHires: numberofHires,
        numberOfWorkingWeekdays: workingdays,
        // Add other form fields here
      };
      // Add jobid to the form data (replace '123' with the actual jobid)
      formData.jobid = "123";

      handleFormSubmit(formData);
    } else {
      if (!isValid1) alert("Job Role should be filled.");
      else if (!isValid2) alert("Job Designation should be filled.");
      else if (!isValid3) alert("Job Description should be filled.");
      else if (!isValid4) alert("Job Location should be filled.");
    }
  };

  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const handleFormSubmit = async (data) => {
    try {
      const { jobid, ...formData } = data;

      const requestBody = {
        ...formData,
      };

      // Make a POST request to the backend endpoint
      const response = await fetch(
        `/recruiter/job/updateDescription/${jobid}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Add any other headers as needed
          },
          body: JSON.stringify(requestBody),
        }
      );

      // Parse the response
      const responseData = await response.json();

      // Handle the response accordingly
      if (responseData.success === false) {
        toast.error(responseData.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: "colored",
        });
      } else {
        toast.success(responseData.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
          {/* <b>JOB ROLE 1</b> */}
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
        Create Round
      </Grid>
      <Stack
        component={"form"}
        height={{ md: "75.24vh", sm: "65.24vh" }}
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
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Grid item>
            <Typography variant="h2" className={classes.title}>
              Round Type{" "}
              <Box component="span" style={asterisk}>
                *
              </Box>{" "}
            </Typography>
            <Select sx={{ width: "500px" }} items={Array1} placeholder="Text">
              <MenuItem value={"Written Test"}>Written Test</MenuItem>
              <MenuItem value={"Group Discussion"}>Group Discussion</MenuItem>
              <MenuItem value={"Interview"}>Interview</MenuItem>
            </Select>
          </Grid>

          <Grid item>
            <Typography variant="h6" color={"grey"} className={classes.title}>
              Round Description
              <Box component="span" style={asterisk}>
                *
              </Box>
            </Typography>
            <Grid xs={3} sm={1}>
              <TextField
                placeholder="Text"
                multiline
                variant="outlined"
                onChange={handleChange1}
                value={textFieldValue1}
                {...register("jobRole", { required: true })}
                InputProps={{ style: inputStyle }}
              />
            </Grid>
          </Grid>

          <Grid item mb={10}>
            <Typography variant="h6" color={"grey"} className={classes.title}>
              Preferred Slot 1
              <Box component="span" style={asterisk}>
                *
              </Box>
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={date}
                onChange={handleChange6}
                {...register("joiningDate", { required: true })}
                className={classes.datePicker}
              />
              {/* <TimePicker
                label="Time"
                defaultValue={dayjs('2022-04-17T15:30')}
              /> */}
            </LocalizationProvider>
            
          </Grid>

          <Grid item mb={10}>
            <Typography variant="h6" color={"grey"} className={classes.title}>
              Preferred Slot 2
              <Box component="span" style={asterisk}>
                *
              </Box>
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={date}
                onChange={handleChange6}
                {...register("joiningDate", { required: true })}
                className={classes.datePicker}
              />
              {/* <TimePicker
                label="Time"
                defaultValue={dayjs('2022-04-17T15:30')}
              /> */}
            </LocalizationProvider>
          </Grid>

          <Grid item mb={10}>
            <Typography variant="h6" className={classes.title}>
              Preferred Slot 3
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={date}
                onChange={handleChange6}
                {...register("joiningDate", { required: true })}
                className={classes.datePicker}
              />
              {/* <TimePicker
                label="Time"
                defaultValue={dayjs('2022-04-17T15:30')}
              /> */}
            </LocalizationProvider>
          </Grid>

          <Grid item mb={2}>
            <Typography variant="h6" className={classes.title}>
              File for timing(CSV)
            </Typography>
            <TextField
              placeholder="Link"
              variant="outlined"
              onChange={handleChange2}
              value={textFieldValue2}
              {...register("jobDesignation", { required: true })}
              InputProps={{ style: inputStyle }}
            />
          </Grid>

          <Grid item mb={2}>
            <Typography variant="h6" className={classes.title}>
              Link(if any)
            </Typography>
            <TextField
              placeholder="Link"
              variant="outlined"
              onChange={handleChange2}
              value={textFieldValue2}
              {...register("jobDesignation", { required: true })}
              InputProps={{ style: inputStyle }}
            />
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.saveButton}
              onClick={handle}
              sx={{ backgroundColor: "blue" }}
            >
              Create Round
            </Button>
          </Grid>
          <br />
          <br />
        </form>
      </Stack>
      <br />
    </Stack>
  );
};

export default CR;
