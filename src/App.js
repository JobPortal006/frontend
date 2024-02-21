import "./App.css";
import Navbar from "./components/NavBar/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
// import LogIn from "./components/UserManagement/Login.jsx";
import SignUp1 from "./components/UserManagement/Signup1.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/HomePage/home.jsx";
import CreateAccount from "./components/UserManagement/CreateAccount.jsx";
import OTPlogin from "./components/UserManagement/OTPlogin.jsx";
import ForgetPassword from "./components/UserManagement/ForgetPassword.jsx";
import Password from "./components/UserManagement/Password.jsx";
import PostJob from "./components/sprint 2/PostJob.jsx";
import Filter from "./components/sprint 2/Filter.jsx";
import MyJob from "./components/sprint 2/MyJob.jsx";
import EditMyJob from "./components/sprint 2/EditMyJob.jsx";
import FilteredResults from "./components/sprint 2/FilteredResults.jsx";
// <Route path="/login" element={<LogIn />} />

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      
      
        <Routes>
          <Route index path="/home" element={<Home />} />
          
          <Route path="/signup" element={<SignUp1 />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/OTPlogin" element={<OTPlogin />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/Password" element={<Password />} />
          <Route path="/Filter" element={<Filter/>} />
          <Route path="/MyJob" element={<MyJob/>} />
          <Route path="/PostJob" element={<PostJob />} />
          <Route path="/EditMyJob" element={<EditMyJob />} />
          <Route path="/FilteredResults" element={<FilteredResults />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
