import React, { useState } from 'react';
import { Link } from '@mui/material';
import './login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const validEmail = 'user@example.com';
    const validPassword = 'password';

    if (!email || !password) { 
      setEmailError(email ? '' : 'Please enter the email address.');
      setPasswordError(password ? '' : 'Please enter the password.');
      return;
    }

    if (email === validEmail && password === validPassword) {
      alert('Login successful!');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="wrapper">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>

          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError('');
              }}
              
            />
            <label>Email</label>
            
          </div>
          {emailError && <span className="error" style={{color:'red'}}>{emailError}</span>}

          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError('');
              }}
              
            />
            <label>Password</label>
          </div>
          {passwordError && <span className="error" style={{color:'red', marginTop:'-10px'}}>{passwordError}</span>}


          <div className="remember-forgot">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />{' '}
              Remember me
            </label>
            <Link className='forget-pass' style={{marginTop:'25px'}}>Forgot Password?</Link>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>
              Don't have an account? <Link>Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
