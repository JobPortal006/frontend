// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Divider } from "@mui/material";
// import glogo from "./Login Image/google-icon.svg";
// import jllogo from "./Login Image/JL logo design.jpg";
// import "../components/login.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { auth, provider } from "../components/Firebase/firebase.js";
// import { signInWithPopup } from "@firebase/auth";
// import { useEffect } from "react";
// import validation from "../components/login.json";
// // import { emailBlur, handlePasswordBlur, handleSubmit } from './formValidation';

// const defaultTheme = createTheme();

// const mailOne = validation.email.one;
// const mailTwo = validation.email.two;
// const mailThree = validation.email.three;
// const passOne = validation.password.one;

// const LogIn = () => {
//   const navigate = useNavigate();

//   const handleSignupClick = () => {
//     navigate("/signup");
//   };

//   const handleOTP = () => {
//     navigate("/OTPlogin");
//   };

//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [emailError, setEmailError] = React.useState("");
//   const [passwordError, setPasswordError] = React.useState("");

//   const emailBlur = () => {
//     const trimmedEmail = email.trim();
//     if (!trimmedEmail) {
//       setEmailError(mailOne);
//     } else if (!trimmedEmail.endsWith(mailThree)) {
//       setEmailError(mailTwo);
//       setPasswordError("");
//     } else {
//       setEmailError("");
//     }
//   };

//   const handlePasswordBlur = () => {
//     const trimmedEmail = email.trim();
//     if (!trimmedEmail) {
//       setEmailError(mailTwo);
//     }
//   };

//   const [rememberMe, setRememberMe] = React.useState(false);

//   const handleRememberMe = (event) => {
//     setRememberMe(event.target.checked);
//   };
//   console.log("rememberMe state:", rememberMe);

//   // for login with the google

//   const [setValue] = React.useState("");

//   const googleClick = () => {
//     signInWithPopup(auth, provider)
//       .then((data) => {
//         // console.log(data)
//         setValue(data.user.email);
//         localStorage.setItem("email", data.user.email);
//         localStorage.setItem(
//           "googleToken",
//           data._tokenResponse.oauthAccessToken
//         );
//         if (data._tokenResponse.oauthAccessToken !== undefined) {
//           navigate("/home");
//         }
//       })
//       .catch((error) => {
//         console.error("Google Sign-In Error:", error.message);
//       });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Trim the email input value and check for empty spaces
//     const trimmedEmail = email.trim();
//     if (!trimmedEmail && !password) {
//       setEmailError(mailOne);
//       setPasswordError(passOne);
//     } else if (!trimmedEmail) {
//       setEmailError(mailTwo);
//       setPasswordError("");
//     } else if (!trimmedEmail.endsWith(mailThree)) {
//       setEmailError(mailTwo);
//       setPasswordError("");
//     } else if (!password) {
//       setEmailError("");
//       setPasswordError(passOne);
//     } else {
//       setEmailError("");
//       setPasswordError("");

//       // If both fields are filled, proceed with form submission
//       const data = new FormData(event.currentTarget);
//       console.log({
//         email: data.get("email"),
//         password: data.get("password"),
//       });
//       console.log("Form submitted:", { email, password });

//       let headers = new Headers();

//       headers.append("Content-Type", "application/json");
//       headers.append("Accept", "application/json");
//       headers.append("Origin", "http://192.168.1.41:8000/login/");
//       const apiUrl = "http://192.168.1.41:8000/login/";

//       axios
//         .post(apiUrl, { email, password }, headers)
//         .then((response) => console.log(response, "post data response===>"))
//         .catch((e) => console.log(e));
//     }
//   };

//   const handleForget = () => {
//     navigate("/ForgetPassword");
//   };

//   const token = localStorage.getItem("googleToken");
//   const otpToken = localStorage.getItem("otpToken");
//   console.log(otpToken, "otpToken============>");
//   useEffect(() => {
//     // setValue(localStorage.getItem('email'))
//     console.log(token, "token----->");
//     if (token !== null || otpToken !== null) {
//       navigate("/home");
//     }
//   });

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Avatar
//             src={jllogo}
//             sx={{
//               m: 1,
//               mt: 1,
//               bgcolor: "secondary.main",
//               width: 56,
//               height: 65,
//             }}
//           >
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5" sx={{ mt: -1 }}>
//             {validation.Context.one}
//           </Typography>
//           <Box
//             component="form"
//             onSubmit={handleSubmit}
//             noValidate
//             sx={{ mt: 1 }}
//           >
//             <TextField
//               margin="normal"
//               fullWidth
//               id="email"
//               label="Email"
//               name="email"
//               autoComplete="email"
//               value={email}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//                 setEmailError(""); // Reset the error when typing
//               }}
//               onBlur={emailBlur}
//               error={!!emailError}
//               helperText={emailError}
//             />
//             <TextField
//               margin="normal"
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               value={password}
//               onChange={(e) => {
//                 setPassword(e.target.value);
//                 setPasswordError("");
//               }}
//               onBlur={handlePasswordBlur}
//               error={!!passwordError}
//               helperText={passwordError}
//             />

//             <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     checked={rememberMe}
//                     onChange={handleRememberMe}
//                     value="remember"
//                     color="primary"
//                   />
//                 }
//                 label="Remember me"
//               />

//               <Link
//                 variant="body2"
//                 style={{ marginLeft: "120px", cursor: "pointer" }}
//                 onClick={handleForget}
//               >
//                 {validation.Context.two}
//               </Link>
//             </Grid>

//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 1, mb: 2 }}
//             >
//               {validation.Context.one}
//             </Button>
//             <Divider style={{ textAlign: "center" }}>
//               {validation.Context.five}
//             </Divider>
//             <Button
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//               onClick={handleOTP}
//             >
//               {validation.Context.three}
//             </Button>
//           </Box>
//         </Box>
//         <Button
//           variant="outlined"
//           color="primary"
//           onClick={googleClick}
//           sx={{
//             display: "flex",
//             width: "100%",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: "20px", // Adjust the gap as needed
//           }}
//         >
//           <img src={glogo} alt="Google Logo" className="g-logo" />
//           {validation.Context.four}
//         </Button>
//         <Grid container className="dont-account">
//           <Grid item>
//             <p href="#" variant="body2" style={{ marginLeft: "-2.5rem" }}>
//               {validation.Context.six}{" "}
//               <span style={{ cursor: "pointer" }} onClick={handleSignupClick}>
//                 {validation.Context.seven}
//               </span>
//             </p>
//           </Grid>
//         </Grid>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default LogIn;

// LogIn.jsx

import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Divider } from "@mui/material";
import glogo from "./Login Image/google-icon.svg";
import jllogo from "./Login Image/JL logo design.jpg";
import "../components/login.css";
import { useNavigate } from "react-router-dom";

import { auth, provider } from "../components/Firebase/firebase.js";
import { signInWithPopup } from "@firebase/auth";
import { emailBlur, handlePasswordBlur, handleSubmit } from "./Validtion.jsx";
import validation from "../components/login.json";

const defaultTheme = createTheme();

const LogIn = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup");
  };

  const handleOTP = () => {
    navigate("/OTPlogin");
  };

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const [rememberMe, setRememberMe] = React.useState(false);

  const handleRememberMe = (event) => {
    setRememberMe(event.target.checked);
  };

  const [value,setValue] = React.useState("");

  const googleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem(
          "googleToken",
          data._tokenResponse.oauthAccessToken
        );
        if (data._tokenResponse.oauthAccessToken !== undefined) {
          navigate("/home");
        }
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error.message);
      });
  };

  const handleForget = () => {
    navigate("/ForgetPassword");
  };

  const token = localStorage.getItem("googleToken");
  const otpToken = localStorage.getItem("otpToken");

  useEffect(() => {
    if (token !== null || otpToken !== null) {
      navigate("/home");
    }
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            src={jllogo}
            sx={{
              m: 1,
              mt: 1,
              bgcolor: "secondary.main",
              width: 56,
              height: 65,
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mt: -1 }}>
            {validation.Context.one}
          </Typography>
          <Box
            component="form"
            onSubmit={(event) =>
              handleSubmit(
                event,
                email,
                password,
                setEmailError,
                setPasswordError,
                navigate
              )
            }
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(""); // Reset the error when typing
              }}
              onBlur={() => emailBlur(email, setEmailError, setPasswordError)}
              error={!!emailError}
              helperText={emailError}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
              onBlur={() => handlePasswordBlur(email, setEmailError)}
              error={!!passwordError}
              helperText={passwordError}
            />

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={handleRememberMe}
                    value="remember"
                    color="primary"
                  />
                }
                label={validation.Context.two}
              />

              <Link
                variant="body2"
                style={{ marginLeft: "100px", cursor: "pointer" }}
                onClick={handleForget}
              >
                {validation.Context.two}
              </Link>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              {validation.Context.one}
            </Button>
            <Divider style={{ textAlign: "center" }}>
              {validation.Context.five}
            </Divider>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleOTP}
            >
              {validation.Context.three}
            </Button>
          </Box>
        </Box>
        <Button
          variant="outlined"
          color="primary"
          onClick={googleClick}
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <img src={glogo} alt="Google Logo" className="g-logo" />
          {validation.Context.four}
        </Button>
        <Grid container className="dont-account">
          <Grid item>
            <p href="#" variant="body2" style={{ marginLeft: "-2.5rem" }}>
              {validation.Context.six}{" "}
              <span style={{ cursor: "pointer" }} onClick={handleSignupClick}>
                {validation.Context.seven}
              </span>
            </p>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default LogIn;
