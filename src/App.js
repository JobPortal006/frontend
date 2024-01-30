import './App.css';
import Navbar from './components/NavBar/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from './components/Login.jsx';
import SignUp1 from './components/Signup1.jsx';
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './components/HomePage/home.jsx';
import CreateAccount from './components/CreateAccount.jsx';
import OTPlogin from "./components/OTPlogin.jsx";
import ForgetPassword from "./components/ForgetPassword.jsx";
import Password from './components/Password.jsx';


function App() {

  return (
    <div>
    <BrowserRouter>
    <Navbar />
     <Routes>
     <Route index path='/home' element={<Home />} />
     <Route path="/login" element={<LogIn />} />
     <Route path='/signup' element={<SignUp1 />} />
     <Route path='/CreateAccount' element={<CreateAccount />} />
     <Route path="/OTPlogin" element={<OTPlogin />} />
      <Route path="/ForgetPassword" element={<ForgetPassword />} />
      <Route path="/Password" element={<Password/>} />


     </Routes>
  </BrowserRouter>
    </div>
    
     
     
  );
  }
export default App;







