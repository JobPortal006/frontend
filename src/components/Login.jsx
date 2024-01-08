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




// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();
const handleGoogleLogin = () => {
  console.log("Google Sign-In clicked");
};

const LogIn = () => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

    

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate email
    if (!email) {
      setEmailError('Please enter an email.');
      return;
    }

    // Validate password
    if (!password) {
      setPasswordError('Please enter a password.');
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      
    });
    console.log('Form submitted:', { email, password });

  };

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
              error={!!passwordError}
              helperText={passwordError}
            />

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              <Link href="#" variant="body2" style={{marginLeft:'120px'}}>
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
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
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
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default LogIn;
