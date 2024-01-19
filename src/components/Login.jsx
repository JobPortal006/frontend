import * as React from "react";
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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Divider } from "@mui/material";
import glogo from "./Login Image/google-icon.svg";
import jllogo from "./Login Image/JL logo design.jpg";
import "../components/login.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";





const defaultTheme = createTheme();
const handleGoogleLogin = () => {
  console.log("Google Sign-In clicked");
};

const LogIn = () => {

   const navigate = useNavigate();
  
    const handleSignupClick = () => {
      navigate('/signup');
     
      
    };
 

    const handleOTP = () =>{
      navigate('/OTPlogin');
    }

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');


  const emailBlur = () => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setEmailError('Please enter a valid email.');
    }else if (!trimmedEmail.endsWith('@gmail.com')) {
      setEmailError('Please enter a valid Gmail address.');
      setPasswordError(''); 
    }
    else {
      setEmailError('');
    }
  };

  const handlePasswordBlur = () => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setEmailError('Please enter a valid email.');
    } 
  };


  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Trim the email input value and check for empty spaces
    const trimmedEmail = email.trim();
    if (!trimmedEmail && !password) {
      setEmailError('Please enter an email.');
      setPasswordError('Please enter a password.');
    } else if (!trimmedEmail) {
      setEmailError('Please enter a valid email.');
      setPasswordError('');
    } else if (!trimmedEmail.endsWith('@gmail.com')) {
      setEmailError('Please enter a valid Gmail address.');
      setPasswordError('');
    } else if (!password) {
      setEmailError('');
      setPasswordError('Please enter a password.');
    } else {
      setEmailError('');
      setPasswordError('');
  
      // If both fields are filled, proceed with form submission
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
      console.log('Form submitted:', { email, password });


      let headers = new Headers();

      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
      headers.append('Origin','http://192.168.1.38:8000/login/');
      const apiUrl = 'http://192.168.1.38:8000/login/';


        axios.post(apiUrl,{email, password},headers).then(response => console.log(response,"post data response===>")).catch(e => console.log(e));

    }
  };
  
  const handleForget = () =>{
    navigate('/ForgetPassword');
  }
    

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar src={jllogo} sx={{ m: 1, mt:1, bgcolor: "secondary.main", width: 56, height: 65 }} >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{mt:-1}}>
            LogIn
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
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
              autoFocus
              value={email}

              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(''); // Reset the error when typing
              }}
              onBlur={emailBlur}
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
                setPasswordError(''); // Reset the error when typing
              }}
              onBlur={handlePasswordBlur} // Added onBlur event handler
              error={!!passwordError}
              helperText={passwordError}
              
            />

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              <Link variant="body2" style={{marginLeft:'120px', cursor:'pointer'}} onClick={handleForget}>
                Forgot password?
              </Link>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              LogIn
            </Button>
            <Divider style={{ textAlign: "center" }}>OR</Divider>
            <Button
              
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
             onClick={handleOTP}
            >
              LogIn via OTP
            </Button>
          </Box>
        </Box>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleGoogleLogin}
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px", // Adjust the gap as needed
          }}
        >
          <img src={glogo} alt="Google Logo" className="g-logo" />
          Continue with Google
        </Button>
        <Grid container className="dont-account">
              <Grid item>
                <p href="#" variant="body2" style={{marginLeft:'-2.5rem'}}>
                  Don't have an account? <span style={{cursor:'pointer'}} onClick={ handleSignupClick}>Sign Up</span>
                </p>
              </Grid>
            </Grid>
      </Container>
    </ThemeProvider>

         
  );
};

export default LogIn;
