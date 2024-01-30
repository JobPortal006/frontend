
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import GoogleLogo from '../components/signup-image/google-icon.svg'; 
import axios from 'axios';

import mainimage from "../components/signup-image/img.png";
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';

import { auth, provider } from '../components/FireBase/firebase.js';
import {signInWithPopup} from 'firebase/auth';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';



export default function FixedContainer() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = React.useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: '',
    agreeTerms: '',
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const [showconfirm_password, setShowconfirm_password] = React.useState(false);

 const handleInputChange = (e) => {
  const { name, value, type, checked } = e.target;
  let errorMessage = '';

  const containsSpace = /\s/.test(value);
  
    if (containsSpace) {
      setErrors({ ...errors, [name]: 'please enter the valid value' });
      return;
    }

    if (name === 'phoneNumber') {
            const numericValue = value.replace(/\D/g, '');
            setFormData({ ...formData, [name]: numericValue });
          } else {
            setFormData({ ...formData, [name]: value });
          }
        

  if (['first_name', 'last_name', 'email', 'phone'].includes(name) && /\s/.test(value)) {
    errorMessage = `${name.charAt(0).toUpperCase() + name.slice(1)} should not contain spaces.`;
  }

  if ((name === 'first_name' || name === 'last_name') && /[^a-zA-Z]/.test(value)) {
    errorMessage = `Only alphabetic characters are allowed for ${name === 'first_name' ? 'first name' : 'last name'}.`;
  }

  if (name === 'email' && /\s/.test(value)) {
    errorMessage = 'Email should not contain spaces.';
  }

  if (name === 'phone') {
    const numericValue = value.replace(/\D/g, ''); 
    if (numericValue.length !== 10) {
      errorMessage = 'Please enter a valid 10-digit phone number.';
    }
  }

  // Validation for checkbox
  if (type === 'checkbox') {
    setFormData({
      ...formData,
      [name]: checked,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
    return;
  }

  setFormData({
    ...formData,
    [name]: value,
  });

  setErrors({
    ...errors,
    [name]: errorMessage,
  });
};




  // const handleTogglePasswordVisibility = (field) => {
  //   if (field === 'password') {
  //     setShowPassword(!showPassword);
  //   } else if (field === 'confirm_password') {
  //     setShowconfirm_password(!showconfirm_password);
  //   }
  
  //   if (name === 'mobile') {
  //     const numericValue = value.replace(/\D/g, '');
  //     setFormData({ ...formData, [name]: numericValue });
  //   } else {
  //     setFormData({ ...formData, [name]: value });
  //   }
  
  //   setErrors({ ...errors, [name]: '' });
  // };
  
  
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    // Basic validation using regular expressions
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const newErrors = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      password: '',
      confirm_password: '',
      agreeTerms: '',
    };

    if (!formData.first_name.trim()) {
      newErrors.first_name = 'First name is required';
    }

    if (!formData.last_name.trim()) {
      newErrors.last_name = 'Last name is required';
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password should be at least 8 characters and include at least one uppercase letter, one lowercase letter, one digit, and one special character.';
    }

    if (formData.password !== formData.confirm_password) {
      newErrors.confirm_password = 'Passwords do not match';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'Please agree to the terms and conditions';
    }

    setErrors(newErrors);

    if (!Object.values(newErrors).some(error => error !== '')) {
      console.log('Form submitted:', formData);
      let headers = new Headers();

      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

      headers.append('Origin','http://192.168.1.62:8000/insert/');
      const apiUrl = 'http://192.168.1.62:8000/insert/';


        axios.post(apiUrl,formData,headers).then(response => console.log(response,"post data response===>")).catch(e => console.log(e));

    }
  };
   

  const [value,setValue]=React.useState('')

  const handleGoogleSignIn = () => {
  
    signInWithPopup(auth, provider)
      .then((data) => {
        // console.log(data)
        setValue(data.user.email);
        localStorage.setItem('email', data.user.email);
        localStorage.setItem('googleToken', data._tokenResponse.oauthAccessToken);
  
      }) 
      .catch((error) => {
        console.error('Google Sign-In Error:', error.message);
      });
  };
  const token= localStorage.getItem('googleToken');
  
  useEffect(()=>{
    // setValue(localStorage.getItem('email'))
    console.log(token,"token----->");
    if(token){
      navigate('/login');
    }
  });

  

  return (
    
    <React.Fragment>
      <CssBaseline />
      <Container  fixed >
        <Grid container spacing={2} sx={{ flexDirection: { xs: 'column', sm: 'row' }, padding: '15px', borderRadius: '1px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', }}>
          {/* Left side with image and text */}
          <Grid item xs={12} sm={6} sx={{ bgcolor:'#7f3fff'}} >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh', textAlign: 'center', position: 'relative' }}>
              {/* <img src={cornerImage1} alt="Corner Image" style={{ position: 'absolute', top: '10px', left: '0', width: '60px', height: '50px' }} />
              <img src={cornerImage2} alt="Corner Image" style={{ position: 'absolute', top: '0', right: '0', width: '50px', height: '50px' }} />
              <img src={cornerImage3} alt="Corner Image" style={{ position: 'absolute', bottom: '0', left: '0', width: '50px', height: '50px' }} />
              <img src={cornerImage4} alt="Corner Image" style={{ position: 'absolute', top: '100%', right: '0', width: '50px', height: '100px' }} /> */}
              <Typography variant="h4" component="div">
                <img src={mainimage} style={{ width: '50%', height: 'auto' }} alt="signup-main" />
                <Typography variant='h4'>
                  Let's make it happen together
                </Typography>
                <Typography variant='h6'>
                  Create Your Account And Get Connected!
                </Typography>
              </Typography>
              </Box>
          </Grid>
          {/* Right side with a colored background */}
          <Grid item xs={12} sm={6} >
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2%' }}>
              <Typography variant="h4" component="div" mb={3}>
                Create Account 
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="First Name"
                      variant="outlined"
                      fullWidth
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleInputChange}
                      error={Boolean(errors.first_name)}
                      helperText={errors.first_name}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleInputChange}
                      error={Boolean(errors.last_name)}
                      helperText={errors.last_name}
                    />
                  </Grid>
                </Grid>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                />
                <TextField
                  label="Phone"
                  type="tel"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={Boolean(errors.phone)}
                  helperText={errors.phone}
                   InputProps={{
                     startAdornment: (
                 <InputAdornment position="start">
                    +91
                 </InputAdornment>
                   ),
                   }}
                />
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} style={{ marginTop: '15px' }}>
                    <TextField
                      label="Password"
                      type={showPassword ? 'text' : 'password'}
                      variant="outlined"
                      fullWidth
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      error={Boolean(errors.password)}
                      helperText={errors.password}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={() => handleTogglePasswordVisibility('password')} edge="end">
                              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} style={{ marginTop: '15px' }}>
                    <TextField
                      label="Confirm Password"
                      type={showconfirm_password ? 'text' : 'password'}
                      variant="outlined"
                      fullWidth
                      name="confirm_password"
                      value={formData.confirm_password}
                      onChange={handleInputChange}
                      error={Boolean(errors.confirm_password)}
                      helperText={errors.confirm_password}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={() => handleTogglePasswordVisibility('confirm_password')} edge="end">
                              {showconfirm_password ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      name="agreeTerms"
                      color="primary"
                    />
                  }
                  label="By registering, you agree to our terms & conditions & privacy policy"
                  style={{ marginTop: '10px' }}
                />
                {errors.agreeTerms && (
                  <Typography variant="body2" color="error">
                    {errors.agreeTerms}
                  </Typography>
                )}
                <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '2%' }}>
                  Sign Up
                </Button>
                <Divider variant="middle" sx={{ my: 3 }}>
                  or Register with
                </Divider>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleGoogleSignIn}
                    fullWidth
                    sx={{ marginTop: '8px' }}
                  ><img src={GoogleLogo} alt="Google Logo" style={{width:'5%', marginRight:'2%'}} />
                    Continue with Google
                </Button>
                <Typography variant="body2" align="center" sx={{ marginTop: '10px' }}>
                     Have an account? <Link to="/login">Sign In</Link>
                </Typography>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
    
    
    
  );
}
