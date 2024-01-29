
import './App.css';
import Navbar from './components/NavBar/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from './components/UserManagement/Login.jsx';
import SignUp1 from './components/UserManagement/Signup1.jsx';
import { BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './components/HomePage/home.jsx';
import CreateAccount from './components/UserManagement/CreateAccount.jsx';

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




