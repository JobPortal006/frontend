// Navbar.jsx
import React from 'react';
import '../components/Navbar.css';
import { FaUserCircle, FaBell } from 'react-icons/fa';



const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="Navbar__left">
                <img src="your-logo.png" alt="Logo" className="Navbar__logo" />
            </div>
            <div className="Navbar__center">
                <ul>
                    <li className="Navbar__dropdown">
                        Home
                        <div className="Navbar__dropdown-content">
                            {/* Dropdown content for Home */}
                            {/* Add your links or components here */}
                        </div>
                    </li>
                    <li className="Navbar__dropdown">
                        Employer
                        <div className="Navbar__dropdown-content">
                            {/* Dropdown content for Employer Jobs */}
                            <ul>
                                <li>Employer details	</li>
                                <li>Add job posting	</li>
                                {/* Add more names or links as needed */}
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
            </div>
            

            <div className="Navbar__right">
                <button className="Navbar__button">Login</button>
                <button className="Navbar__button">Recruiters Login</button>
                <div className="Navbar__profile">
                    <FaBell className="Navbar__notification-icon" />
                    <FaUserCircle className="Navbar__user-icon"  style={{fontSize:'20px'}}/>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
