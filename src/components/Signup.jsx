// SignUp.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar'; // Import Avatar component
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import './SignUpStyles.css';  // Import the CSS file
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel'; 
import GoogleLogo from '../components/signup-image/google-icon.svg'; 

export const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate the input based on the field name
    switch (name) {
      case 'name':
        setErrors({ ...errors, [name]: value.length < 3 ? 'Name should be at least 3 characters' : '' });
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setErrors({ ...errors, [name]: emailRegex.test(value) ? '' : 'Invalid email address' });
        break;
      case 'mobile':
        const mobileRegex = /^[0-9]{10}$/;
        setErrors({ ...errors, [name]: mobileRegex.test(value) ? '' : 'Invalid mobile number' });
        break;
      case 'password':
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        setErrors({ ...errors, [name]: passwordRegex.test(value) ? '' : 'Password should be at least 8 characters and include at least one letter and one number' });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if there are any validation errors
    const hasErrors = Object.values(errors).some((error) => error !== '');
    if (hasErrors) {
      console.log('Form contains errors. Please correct them.');
    } else {
      // Add your signup logic here
      console.log(formData);
    }
  };

  const handleGoogleLogin = () => {
    // Implement Google Sign-In logic here
    // You may use a library like react-google-login or directly use the Google Sign-In API
    console.log('Google Sign-In clicked');
  };

  return (
    <div className='signup'>
      
      <form className="signUpForm" onSubmit={handleSubmit}>
        
      <div className="avatar-container">
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
          </div>
      <div className='Signup-heading'>
      SignUp
      </div>
        <TextField 
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={Boolean(errors.name)}
          helperText={errors.name}
          color="primary"
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />
        <TextField
          label="Mobile Number"
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          error={Boolean(errors.mobile)}
          helperText={errors.mobile}
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={Boolean(errors.password)}
          helperText={errors.password}
        />
        <FormControlLabel
          control={
            <Checkbox
              name="termsAndConditions"
              checked={formData.termsAndConditions}
              onChange={handleChange}
              color="primary"
            />
          }
          label="I agree to the terms and conditions"
        />
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
        <Divider variant="middle" sx={{ my: 3 }}>or Register with</Divider>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleGoogleLogin}
          sx={{
            display: 'flex',
            width:'100%',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px', // Adjust the gap as needed
          }}
        >
          <img src={GoogleLogo} alt="Google Logo" className="google-logo" />
          Continue with Google
        </Button>
        <div className='account'>Have an account? Sign In</div>
      </form>
    </div>
  );
};
