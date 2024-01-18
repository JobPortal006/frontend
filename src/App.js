import "./App.css";
import Navbar from "./components/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import LogIn from "./components/Login.jsx";
import SignUp from "./components/Signup";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import OTPlogin from "./components/OTPlogin.jsx";
import ForgetPassword from "./components/ForgetPassword.jsx";
import Password from "./components/Password.jsx";

function App() {
  return (
    
    <Router>
      <Navbar />
      <Password />
      

      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/OTPlogin" element={<OTPlogin />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
      </Routes>
    </Router>
    
  );
}
export default App;
