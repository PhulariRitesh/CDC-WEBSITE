import React from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Box from "@mui/system/Box";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Link } from "@mui/material";
import NavTabs from "../../../global-components/NavTabs";
import ClickButton from "../../../global-components/ClickButton";
import Password from "../../../global-components/Password";
import Textbox from "../../../global-components/Textbox";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { AUTH } from "../../../Redux/auth/authType";
import { companyDetails } from "../../../Redux/companyDetails/companyDetailsType";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import store from "../../../Redux/Store";

function RightLogin() {
  const theme = useTheme();
  const screenLessMedium = useMediaQuery(theme.breakpoints.down("md"));
  const screenLessSmall = useMediaQuery(theme.breakpoints.down("sm"));

  let widthChange = "0";
  let btnWidth = "285px",
    textBoxWidth = "285px";
  if (screenLessSmall) {
    widthChange = "90%";
    btnWidth = "225px";
    textBoxWidth = "225px";
  } else if (screenLessMedium) {
    widthChange = "75%";
  } else {
    widthChange = "55%";
  }

  const fsizeChange = screenLessSmall ? "0.65rem" : "0.85rem";

  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = async (data) => {
    try {
      console.log(data);

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      console.log(requestOptions.body);
      const response = await fetch("/recruiter/login", requestOptions);
      const responseData = await response.json();

      console.log(responseData);

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

        const userInfo = {
          userid: data.userid,
          password: data.password,
          token: responseData.token,
        };

        dispatch({ type: AUTH, payload: userInfo });

        const recruiter = responseData.recruiter;
        const recruiterDetails = {
          companyName: recruiter.name,
          about: recruiter.about,
          website: recruiter.website,
          category: recruiter.category,
          sector: recruiter.sector,
        };

        dispatch({ type: companyDetails, payload: recruiterDetails });

        //  to check if the data in redux store is updated
        console.log(store.getState().auth);
        console.log(store.getState().companyDetails);

        // to be changed to dashboard as soon as pages are ready
        navigate("/recruiterhome");
      }
    } catch (error) {
      console.log("Error is : ", error);
    }
  };

  return (
    <Grid
      item
      xs={12}
      justifyContent={"center"}
      alignItems={"center"}
      position={"absolute"}
      sx={{ backgroundColor: "white" }}
      width={{ xs: "85%", md: "65%" }}
      right={{ xs: "7.5vw", md: 0 }}
      bottom={{ xs: 12, md: 0 }}
      borderRadius={{ md: "50px 0 0 50px", xs: "50px" }}
    >
      <Stack
        component={"form"}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        fontFamily={"Poppins"}
        height={{ md: "100vh" }}
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <Typography
          variant="h3"
          fontWeight={550}
          mb={2}
          mt={{ xs: 2 }}
          fontSize={{ xs: 25, md: 35 }}
        >
          SIGN IN
        </Typography>

        <Typography
          variant="h4"
          fontWeight={100}
          mb={{ xs: 3, md: 5 }}
          fontSize={{ md: 35, xs: 25 }}
        >
          IIT Goa CDC Portal
        </Typography>

        <NavTabs width={widthChange} fsize={fsizeChange} />

        <Box height={50}></Box>

        <Textbox
          label="Username"
          width={textBoxWidth}
          required={true}
          register={register}
          errors={errors}
          msg={"Please enter the Username"}
          name={"userid"}
          variant={'standard'}
        />
        <Password
          label="Password"
          width={textBoxWidth}
          required={true}
          register={register}
          errors={errors}
          msg={"Please enter the Password"}
          name={"password"}
        />

        <ClickButton
          height="65px"
          width={btnWidth}
          value="SIGN IN"
          fs="1.2rem"
          margin="30px 0"
        />

        <Link
          component={RouterLink}
          to="/forgotpwd"
          underline="hover"
          sx={{ color: "red", cursor: "pointer" }}
          mb={2}
        >
          Forgot Password
        </Link>

        <Box display={"flex"} flexDirection={"row"}>
          <Typography variant="p">New User?</Typography>
          <Link
            component={RouterLink}
            to="/signup"
            underline="hover"
            sx={{ cursor: "pointer" }}
            mb={{ xs: 3 }}
          >
            Apply Now!
          </Link>
        </Box>

        <ToastContainer style={{ marginRight: "20.5%" }} />
      </Stack>
    </Grid>
  );
}

export default RightLogin;
