
import './App.css';
import Navbar from './components/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from './components/Login.jsx';
import SignUp from './components/Signup';
import OTPlogin from './components/OTPlogin.jsx';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return ( <Router>
     <Navbar />
     <OTPlogin />
    
     <Routes>
     <Route path="/login" element={<LogIn />} />
     <Route path='/signup' element={<SignUp />} />
     </Routes>


  </Router>
     
     
  );
  }
export default App;