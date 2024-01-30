// Navbar.jsx

import React from 'react';
import '../NavBar/Navbar.js';
import { FaUserCircle, FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// ... (previous imports)

const Navbar = () => {
    const navigate = useNavigate();
  
    const handleLoginClick = () => {
      navigate('/login');
    };
  
    const handleSignupClick = () => {
      navigate('/login');
    };
  
    const home = () => {
      navigate('/home');
    };
  
    const logout = () => {
      localStorage.clear();
      navigate('/login');
    };

    const CreateAccount=()=>{
        navigate('/CreateAccount')
    };
  
    const isLoggedIn = !!localStorage.getItem('googleToken');
    const otpToken = !!localStorage.getItem('otpToken');
    const storedToken = !!localStorage.getItem("loginToken");

    
    console.log(isLoggedIn,"GoogleToke============<");
    return (
      <div className="Navbar">
        <div className="Navbar__left">
          <img src="your-logo.png" alt="Logo" className="Navbar__logo" />
        </div>
  
        <div className="Navbar__center">
          {(isLoggedIn || otpToken || storedToken ) ? (
            <ul>
              <li className="Navbar__dropdown" onClick={home}>
                Home
                <div className="Navbar__dropdown-content"></div>
              </li>
              <li className="Navbar__dropdown">
                Employer
                <div className="Navbar__dropdown-content">
                  <ul>
                    <li>Employer details</li>
                    <li>Add job posting</li>
                  </ul>
                </div>
              </li>
              <li className="Navbar__dropdown">
                Candidate Jobs
                <div className="Navbar__dropdown-content">
                  <ul>
                    <li>Browse job</li>
                    <li>Job categories</li>
                  </ul>
                </div>
              </li>
            </ul>
          ) : (
            <ul>
              <li className="Navbar__dropdown">
                Employer
                <div className="Navbar__dropdown-content">
                  <ul>
                    <li>Employer details</li>
                    <li>Add job posting</li>
                  </ul>
                </div>
              </li>
              <li className="Navbar__dropdown">
                Candidate Jobs
                <div className="Navbar__dropdown-content">
                  <ul>
                    <li>Browse job</li>
                    <li>Job categories</li>
                  </ul>
                </div>
              </li>
            </ul>
          )}
        </div>
  
        <div className="Navbar__right">
          {isLoggedIn || storedToken || otpToken? (
            <>
              <button className="Navbar__button" onClick={logout}>
                Logout
              </button>
              <button className="Navbar__button" onClick={CreateAccount}>
                Create an account
              </button>
              <FaUserCircle className="Navbar__user-icon" style={{ fontSize: '20px' }} />
              <FaBell className="Navbar__notification-icon" />
            </>
          ) : (
            <>
              <button className="Navbar__button" onClick={handleLoginClick} disabled={isLoggedIn}>
                Login
              </button>
              <button className="Navbar__button" onClick={handleSignupClick} disabled={isLoggedIn}>
                Recruiters Login
              </button>
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default Navbar;
  