import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    background: 'linear-gradient(45deg, #8b51ff, #7a37ff)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    backgroundColor: '#ffffff',
    width: 400,
    padding: '50px 40px',
    borderRadius: 8,
    textAlign: 'center',
    boxShadow: '20px 20px 30px rgba(0,0,0,0.15)',
  },
  label: {
    fontWeight: 500,
    fontSize: 18,
    color: '#101030',
    marginBottom: 10,
  },
  passwordContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  submitButton: {
    border: 'none',
    fontWeight: 500,
    fontSize: 18,
    letterSpacing: 1,
    cursor: 'pointer',
    marginTop: '20px',
    '&:hover': {
      backgroundColor: '#6b2fa3',
    },
  },
  error: {
    fontSize: 14,
    color: '#ff4d4d',
  },
  hint: {
    fontSize: 12,
    color: '#555',
  },
}));


const Password = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState('');

  const handleTogglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === '') {
      setMessage('Please enter the password');
    } else if (password.length < 8) {
      setMessage('Password should be at least 8 characters long');
    }else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password)) {
      setMessage('Password should contain at least one special character');
    } else if (!/\d/.test(password)) {
      setMessage('Password should contain at least one number');
    } else if (password !== confirmPassword) {
      setMessage("Passwords don't match");
    } else {
      console.log('Password:', password);
      alert('Password Updated Successfully 👍');
      setMessage('');
      axios.post('http://192.168.1.41:8000/updatepassword/',{email,password,confirmPassword}).then(response => (console.log(response,"Print the response here"))
      .catch(e=>console.log(e))
      )
    }
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h2>Update Password</h2>

        <label className={classes.label} htmlFor="password">Email Id</label>
        <div className={classes.passwordContainer}>
          <TextField
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <label className={classes.label} htmlFor="password">Password</label>
        <div className={classes.passwordContainer}>
          <TextField
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => handleTogglePasswordVisibility('password')} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <label className={classes.label} htmlFor="cnfrm-password">Confirm Password</label>
        <div className={classes.passwordContainer}>
          <TextField
            type={showConfirmPassword ? 'text' : 'password'}
            id="cnfrm-password"
            name="cpassword"
            placeholder="Re-Enter Your Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => handleTogglePasswordVisibility('confirmPassword')} edge="end">
                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        {message && <p className={classes.error}>{message}</p>}
        <Button type="submit" className={classes.submitButton} style={{ backgroundColor: '#ccb4fb' }}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Password;