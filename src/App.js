
import './App.css';

import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Signup1 from'../src/components/Signup1';
import SignUp from './components/Signup';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return ( <Router>
     <Navbar />
    
     <Routes>
     <Route path="/login" element={<Login />} />
     <Route path='/signup' element={<SignUp />} />
     </Routes>

  </Router>
     
     
  );
  }
export default App;