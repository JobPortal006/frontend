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

import "../components/SignUpStyles.css";
import Signup1 from './Signup1';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
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
  
    // Clear the error message when the user starts typing
    setErrors({ ...errors, [name]: '' });
  };
  
  
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields using regular expressions
    const regexName = /^[a-zA-Z]+$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPhoneNumber = /^[0-9]{10}$/;
    const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    const newErrors = {};
    if (!regexName.test(formData.firstName)) {
      newErrors.firstName = 'Please enter a valid first name';
    }

    if (!regexName.test(formData.lastName)) {
      newErrors.lastName = 'Please enter a valid last name';
    }

    if (!regexEmail.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!regexPhoneNumber.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    if (!regexPassword.test(formData.password)) {
      newErrors.password =
        'Password should be at least 8 characters and include at least one letter and one number';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Check if there are any validation errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      console.log('Please fill in all the required fields correctly.');
    } else {
      // Add your signup logic here
      console.log(formData);
    }
  };

  const handleGoogleSignIn = () => {
    // Add your Google Sign-In logic here
    console.log('Sign In with Google clicked');
  };

  return (
    <>
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
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '16px' }}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last Name"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '16px' }}
            error={Boolean(errors.lastName)}
            helperText={errors.lastName}
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
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '16px' }}
            error={Boolean(errors.phoneNumber)}
            helperText={errors.phoneNumber}
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
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            fullWidth
            style={{ marginBottom: '16px' }}
            error={Boolean(errors.confirmPassword)}
            helperText={errors.confirmPassword}
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
            control={<Checkbox required />}
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
    </>
  );
};

export default SignUp;
