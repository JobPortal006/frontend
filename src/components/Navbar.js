// // Navbar.jsx
// import React from 'react';
// import '../components/Navbar.css';
// import { FaUserCircle, FaBell } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';




// const Navbar = () => {
//     const navigate = useNavigate();

//   const handleLoginClick = () => {
//     navigate('/login'); 
//   };

//   const home=()=>{
//     navigate('/home')
// }


// const logout=()=>{
//     localStorage.clear()
//     navigate('/login')
// }

//     return (
//         <div className="Navbar">
//             <div className="Navbar__left">
//                 <img src="your-logo.png" alt="Logo" className="Navbar__logo" />
//             </div>
//             <div className="Navbar__center">
//                 <ul>
//                     <li className="Navbar__dropdown" onClick={home}>
//                         Home
//                         <div className="Navbar__dropdown-content">
//                             {/* Dropdown content for Home */}
//                             {/* Add your links or components here */}
//                         </div>
//                     </li>
//                     <li className="Navbar__dropdown">
//                         Employer
//                         <div className="Navbar__dropdown-content">
//                             {/* Dropdown content for Employer Jobs */}
//                             <ul>
//                                 <li>Employer details	</li>
//                                 <li>Add job posting	</li>
//                                 {/* Add more names or links as needed */}
//                             </ul>
//                         </div>
//                     </li>
//                     <li className="Navbar__dropdown">
//                         Candidate Jobs
//                         <div className="Navbar__dropdown-content">
//                             <ul>
//                                 <li>Browse job</li>
//                                 <li>Job categories</li>
//                             </ul>
//                         </div>
//                     </li>
//                 </ul>
//             </div>
            

//             <div className="Navbar__right">
//                 <button className="Navbar__button" onClick={ handleLoginClick}>Login</button>
//                 <button className="Navbar__button" onClick={logout}>Recruiters Login</button>
//                 <div className="Navbar__profile">
//                     <FaBell className="Navbar__notification-icon" />
//                     <FaUserCircle className="Navbar__user-icon"  style={{fontSize:'20px'}}/>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;













// Navbar.jsx

import React from 'react';
import '../components/Navbar.css';
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
  
    const isLoggedIn = !!localStorage.getItem('googleToken');
  
    return (
      <div className="Navbar">
        <div className="Navbar__left">
          <img src="your-logo.png" alt="Logo" className="Navbar__logo" />
        </div>
  
        <div className="Navbar__center">
          {isLoggedIn ? (
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
          {isLoggedIn ? (
            <>
              <button className="Navbar__button" onClick={logout}>
                Logout
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
  