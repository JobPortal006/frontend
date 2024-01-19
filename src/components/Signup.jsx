import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Checkbox, FormControlLabel, Typography, Link } from '@mui/material';
import axios from 'axios';
import "../components/SignUpStyles.css";
// import Signup1 from './Signup1';
import {auth,provider} from './firebase.jsx';
import {signInWithPopup} from 'firebase/auth';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';



const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
    password: '',
    confirm_password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
    password: '',
    confirm_password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const containsSpace = /\s/.test(value);
  
    if (containsSpace) {
      setErrors({ ...errors, [name]: 'please enter the valid value' });
      return;
    }
  
    if (name === 'mobile') {
      const numericValue = value.replace(/\D/g, '');
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  
    setErrors({ ...errors, [name]: '' });
  };
  
  
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const regexName = /^[a-zA-Z]+$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexmobile = /^[0-9]{10}$/;
    const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    const newErrors = {};
    if (!regexName.test(formData.first_name)) {
      newErrors.first_name = 'Please enter a valid first name';
    }

    if (!regexName.test(formData.last_name)) {
      newErrors.last_name = 'Please enter a valid last name';
    }

    if (!regexEmail.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!regexmobile.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid phone number';
    }

    if (!regexPassword.test(formData.password)) {
      newErrors.password =
        'Password should be at least 8 characters and include at least one letter and one number';
    }

    if (formData.password !== formData.confirm_password) {
      newErrors.confirm_password = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      console.log('Please fill in all the required fields correctly.');
    } else {
      console.log(formData);
      let headers = new Headers();

      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
      headers.append('Origin','http://192.168.1.38:8000/signup/');
      const apiUrl = 'http://192.168.1.38:8000/signup/';


        axios.post(apiUrl,formData,headers).then(response => console.log(response,"post data response===>")).catch(e => console.log(e));

    }
  };

  
//for login with google
const [value,setValue]=useState('')


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
    navigate('/home');
  }
});  
  return (
    <div>
    {/* <Signup1 /> */}
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: '16px',
        margin: 'auto',
        padding: '2%',
        maxWidth: '45%',
        width: '100%',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        borderRadius:'20px'
      }}
      sm={{
        '@media (max-width:320px)': {
          maxwidth: '100%',
        },
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
      Create Account
      </Typography>
      <Grid container spacing={0.5}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="First Name"
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '16px' }}
            error={Boolean(errors.first_name)}
            helperText={errors.first_name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last Name"
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '16px' }}
            error={Boolean(errors.last_name)}
            helperText={errors.last_name}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '16px' }}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone Number"
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '16px' }}
            error={Boolean(errors.mobile)}
            helperText={errors.mobile}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '16px' }}
            error={Boolean(errors.password)}
            helperText={errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                    {showPassword ?   <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Confirm Password"
            type={showPassword ? 'text' : 'password'}
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '16px' }}
            error={Boolean(errors.confirm_password)}
            helperText={errors.confirm_password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                    {showPassword ?   <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox />}
            label="I accept the terms and conditions"
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" style={{ marginTop: '15px' }} fullWidth>
            Sign Up
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Divider variant="middle" sx={{ my: 3 }}>
            or Register with
          </Divider>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleGoogleSignIn}
            fullWidth
            sx={{ marginTop: '8px' }}
          >
            Signup with Google
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" align="center" sx={{ marginTop: '10px' }}>
            Have an account? <Link href="#">Sign In</Link>
          </Typography>
        </Grid>
      </Grid>
    </form>
    </div>
  );
};

export default SignUp;
