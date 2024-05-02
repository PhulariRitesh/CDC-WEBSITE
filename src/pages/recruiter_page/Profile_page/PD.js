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
import ClearIcon from "@mui/icons-material/Clear";
import ButtonGroup2 from "../../../global-components/ButtonGroup2";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { PD_TYPES } from "../../../Redux/PD/PDTypes";

import {AUTH} from "../../../Redux/auth/authType"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
export default function PackageDetails({ onclose, onButton, onButton1, onButton2, onButton3, jobId, Role } ) {

  const classes = useStyles();
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
  const [T, setT] = useState(true);
  const handleSaveChanges = () => {
  };
  const handleSaveandNext = () => {
    handlebutton3();
  };


  const dispatch = useDispatch();

  const { register, handleSubmit, control, formState } = useForm();
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

    const pack = [
      {program : "BTech", ctc : data.b_ctc, description : data.b_desc}, 
      {program : "MTech", ctc : data.m_ctc, description : data.m_desc}, 
      {program : "PhD", ctc : data.p_ctc, description : data.p_desc}, 
    ];

    console.log(pack);
    console.log(data);

    setT(false);

    dispatch({type:PD_TYPES,payload:data});
    const sendPackData = {packageData : pack};
    console.log(sendPackData);
    try{
      const response = await fetch(`/recruiter/job/updatePackage/${jobId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        
      },
      
      body: JSON.stringify(sendPackData),
    })

    if (response.ok) {
      console.log("Data sent successfully");
    } else {
      console.error("Failed to send data");
    }
  } catch (error) {
    console.error("Error:", error);
  }
  };

  return (
    <>
      <Stack direction={'column'} mt={{md:'6.73vh', sm:'15.81vh'}}ml={{md:'14.4vw',sm:'5.81vw'}} height={{md:'86.53vh',sm:'76.53vh'}} width={{md:'71.875vw',sm:'85.5vw'}}  className={classes.formContainer}  elevation={10}>

        <Stack direction={'row'} mb={2} justifyContent={'space-between'}>
          <Typography ><b>JOB ROLE {Role}</b></Typography><IconButton aria-label="delete"  onClick={handleBUTTON} >
            
            <ClearIcon fontSize='large'/>
            </IconButton>
        
        </Stack>

        <Grid item  style={{fontFamily:'poppins',fontSize:'32px',color:'#1E53D7',marginTop:'-25px',marginBottom:'10px'}}>Package Details</Grid>

        <Stack height={{md:'53.24vh',sm:'64.24vh'}}sx={{overflow: 'scroll',WebkitOverflowScrolling: 'touch', 
        '&::-webkit-scrollbar': {width: '12px',height:'1px'},
        '&::-webkit-scrollbar-thumb': {backgroundColor: '#1E53D740', borderRadius: '6px', width:'2px'},}}>

      <form action="#" onSubmit={handleSubmit(handleFormSubmit)} noValidate>

          <Grid item xs={6} textAlign="right">
            <Box height={70}></Box>
          </Grid>
          <Stack
            direction={"row-reverse"}
            spacing={{ md: 40, sm: 23 }}
            mr={{ md: 45, sm: 20 }}
          >
            <Typography fontSize={{ md: "19px", sm: "19px" }}>
              Description
            </Typography>
            <Typography fontSize={{ md: "19px", sm: "19px" }}>CTC</Typography>
          </Stack>
          <Grid container marginTop="10px">
            <Grid
              xs={2}
              sm={1}
              margin="10px"
              textAlign="center"
              verticalAlign="middle"
            >
              <Typography marginTop="15px" fontSize="17px">
                BTech
              </Typography>
            </Grid>
            <Grid xs={3} margin="10px">
              <TextField
                variant="outlined"
                label="Text"
                fullWidth
                type="number"
                name={"b_ctc"}
                {...register("b_ctc", {
                  required: true ? "BTech CTC should be filed" : "",
                })}
    
                error={!!errors["b_ctc"]}
                helperText={errors["b_ctc"] ? errors["b_ctc"].message : ''}
              ></TextField>
            </Grid>
            <Grid xs={6} margin="10px">
              <TextField
                variant="outlined"
                label="Text"
                fullWidth
                name={"b_desc"}

                {...register("b_desc", {
                  required: true ? "BTech Description should be filed" : "",
                })}
    
                error={!!errors["b_desc"]}
                helperText={errors["b_desc"] ? errors["b_desc"].message : ''}
              ></TextField>
            </Grid>
          </Grid>
          <Grid container marginTop="10px">
            <Grid
              xs={2}
              sm={1}
              margin="10px"
              textAlign="center"
              verticalAlign="middle"
            >
              <Typography marginTop="15px" fontSize="17px">
                MTech
              </Typography>
            </Grid>
            <Grid xs={3} margin="10px">
              <TextField
                variant="outlined"
                label="Text"
                fullWidth
                type="number"
                name="m_ctc"

                {...register("m_ctc", {
                  required: true ? "MTech CTC should be filed" : "",
                })}
    
                error={!!errors["m_ctc"]}
                helperText={errors["m_ctc"] ? errors["m_ctc"].message : ''}
              ></TextField>
            </Grid>
            <Grid xs={6} margin="10px">
              <TextField
                variant="outlined"
                label="Text"
                fullWidth
                name="m_desc"

                {...register("m_desc", {
                  required: true ? "MTech Description should be filed" : "",
                })}
    
                error={!!errors["m_desc"]}
                helperText={errors["m_desc"] ? errors["m_desc"].message : ''}
              ></TextField>
            </Grid>
          </Grid>

          <Grid container marginTop="10px">
            <Grid xs={2} sm={1} margin="10px" textAlign="center">
              <Typography marginTop="15px" fontSize="17px">
                {" "}
                PHD
              </Typography>
            </Grid>
            <Grid xs={3} margin="10px">
              <TextField
                variant="outlined"
                label="Text"
                fullWidth
                type="number"
                name="p_ctc"
                {...register('p_ctc', {
                  required: true ? "PhD CTC should be filed" : "",
                })}
    
                error={!!errors["p_ctc"]}
                helperText={errors["p_ctc"] ? errors["p_ctc"].message : ''}
              ></TextField>
            </Grid>
            <Grid xs={6} margin="10px">
              <TextField
                variant="outlined"
                label="Text"
                fullWidth
                name="p_desc"

                {...register('p_desc', {
                  required: true ? "PhD Description should be filed" : "",
                })}
    
                error={!!errors["p_desc"]}
                helperText={errors["p_desc"] ? errors["p_desc"].message : ''}
              ></TextField>
            </Grid>
            <Box height={123}></Box>{" "}
          </Grid>
          

          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.savechangesButton}
              sx={{ backgroundColor: "blue" }}
              type="submit"
            >
              Save Changes{" "}
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.nextButton}
              disabled={T}
              onClick={handleSaveandNext}
            >
              {" "}
              Save & Next
            </Button>
            <br />
            <br />{" "}
          </Grid>
          </form>
          <DevTool control={control}/>
        </Stack>
        <Divider />
        <br />
        <ButtonGroup2
          onEC={handlebutton}
          onJD={handlebutton1}
          onPD={handlebutton2}
          onSP={handlebutton3}
        />
      </Stack>
    </>
  );
}