import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography, TextField } from "@material-ui/core";
import { Stack, Button } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import Select from "@mui/material/Select";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { FormControl, Checkbox,ListItemText} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import { Controller } from "react-hook-form";



const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: theme.spacing(5),
    borderRadius: 10,
    backgroundColor: "#F0F4FE",
  },
  saveButton: {
    marginTop: theme.spacing(2),
    borderSpacing: "4",
    marginLeft: "30.76vw",
    borderRadius: "10px",
    color: "#FFFFFF",
  },
  Button: {
    marginTop: theme.spacing(2),
    borderSpacing: "4",
    marginLeft: "3.56vw",
    color: "#FFFFFF",
    borderRadius: "12px",
  },
  datePicker: {
    backgroundColor: "#FFFFFF",
    borderRadius: "4px",
    width: "20.35vw",
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
  height: "6.43vh",
  width: "33.75vw",
  marginBottom: "20px",
  backgroundColor: "#FFFFFF",
};

const asterisk = { color: "red" };
const Array1 = [
  { label: "Written Test", value: "Written Test" },
  { label: "Group Discussion", value: "Group Discussion" },
  { label: "Interview", value: "Interview" },
];

const CR = ({ onclose}) => {

  const classes = useStyles();
  const { register, handleSubmit, control,formState,watch} = useForm();

  const [Programs, setPrograms] = useState([]);

  return (
    <Stack
      direction={"column"}
      mt={{ md: "6.73vh", sm: "15.81vh" }}
      ml={{ md: "14.4vw", sm: "6.81vw" }}
      height={{ md: "86.53vh", sm: "76.53vh" }}
      width={{ md: "61.875vw", sm: "85.5vw" }}
      className={classes.formContainer}
      elevation={10}
    >
      <Stack direction={"row"} mb={2} justifyContent={"space-between"}>
        <Typography>
          {/* <b>JOB ROLE 1</b> */}
        </Typography>
        <IconButton aria-label="delete" onClick={onclose}>
          <ClearIcon fontSize="large" />
        </IconButton>
      </Stack>
      <Grid
        item
        style={{
          fontFamily: "poppins",
          fontSize: "32px",
          color: "#1E53D7",
          marginTop: "-85px",
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
        <form >
        <Box sx={{ flex: 1 }}>
            <Typography variant="h2" className={classes.title}>
              Round Type{" "}
              <Box component="span" style={asterisk}>
                *
              </Box>{" "}
            </Typography>
            <FormControl variant="outlined" size="small" fullWidth>
              <Select
                multiple
                value={Programs}
                sx={{
                  height: "5.61vh",
                  width: "22.59vw",
                  marginBottom: "20px",
                  backgroundColor: "#FFFFFF",
                }}
                onChange={(e) => setPrograms(e.target.value)}
                renderValue={(selected) => selected.join(", ")}
 >
                {Array1.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    sx={{ display: "flex", flexDirection: "row" }}
                  >
                    <Checkbox checked={Programs.includes(option.value)} />
                    <ListItemText primary={option.label} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ flex: 1 }}>
          <Typography variant="h2" className={classes.title}>
              Round Description{" "}
              <Box component="span" style={asterisk}>
                *
              </Box>{" "}
            </Typography>
            <TextField
              name={"description"}
              label="Text"
              // value={description}
              multiline
              variant="outlined"
              InputProps={{ style: inputStyle1 }}
            />
            </Box>
            <Stack direction={"row"} spacing={1}>
            <Typography variant="h2" className={classes.title}>
              Preferred Slot 1{" "}
              <Box component="span" style={asterisk}>
                *
              </Box>{" "}
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
            </Stack>
            <Stack direction={"row"} spacing={1} mt={1}>
            <Typography variant="h2" className={classes.title}>
              Preferred Slot 2{" "}
              <Box component="span" style={asterisk}>
                *
              </Box>{" "}
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
            </Stack>
          <Stack direction={"row"} spacing={3} mt={2}>
            <Typography variant="h6" className={classes.title} >
              File for timing(CSV)
            </Typography>
            <TextField
              placeholder="Link"
              variant="outlined"
              // onChange={handleChange2}
              // value={textFieldValue2}
              // {...register("jobDesignation", { required: true })}
              InputProps={{ style: inputStyle }}
            />
          </Stack>

          <Stack direction={"row"} spacing={7}>
            <Typography variant="h6" className={classes.title}>
              Link(if any)
            </Typography>
            <TextField
              placeholder="Link"
              variant="outlined"
              // onChange={handleChange2}
              // value={textFieldValue2}
              // {...register("jobDesignation", { required: true })}
              InputProps={{ style: inputStyle }}
            />
          </Stack>
          <Button
              variant="contained"
              color="primary"
              className={classes.Button}
              sx={{borderRadius:5,ml:"20vw"}}
              // onClick={handlebutton}
              >
              {" "}
              Create Round
            </Button>{" "}
        </form>
      </Stack>
      <br />
    </Stack>
  );
};

export default CR;
