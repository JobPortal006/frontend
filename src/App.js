
import './App.css';

import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return ( <Router>
     <Navbar />
     <Signup1 />
      <SignUp />
     <Routes>
     <Route path="/login" element={<Login />} />
     </Routes>

  </Router>
     
     
  );

export default App;