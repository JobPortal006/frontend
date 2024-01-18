
import './App.css';
import Navbar from './components/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from './components/Login.jsx';
import SignUp1 from './components/Signup1.jsx';
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './components/home.jsx';
import CreateAccount from './components/CreateAccount.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
     <Routes>
     <Route index path='/home' element={<Home />} />
     <Route path="/login" element={<LogIn />} />
     <Route path='/signup' element={<SignUp1 />} />
     <Route path='/CreateAccount' element={<CreateAccount />} />


     </Routes>
  </BrowserRouter>
    </>
    
     
     
  );
  }
export default App;







// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import LogIn from './components/Login';
// import SignUp from './components/Signup';
// import Home from './components/home';

// const App = () => {
//   const [isLoggedIn, setLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setLoggedIn(true);
//   };

//   return (
//     <Router>
//       <Navbar isLoggedIn={isLoggedIn} />
//       <Routes>
//         <Route path="/login" element={<LogIn onLogin={handleLogin} />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/home" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
