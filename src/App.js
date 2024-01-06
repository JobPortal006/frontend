import './App.css';
import Login from './components/Login';
import React from 'react';
import { SignUp } from './components/Signup';
import { Signup1 } from './components/Signup1';




const App = () => {
  return (
    <div>
      <Login />
     
      <Signup1 />
      <SignUp />
    </div>
  )
}

export default App;