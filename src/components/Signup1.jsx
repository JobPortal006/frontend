import React from 'react'
import '../components/Signup1.css'; 
import SignUp from './Signup';
 const Signup1 = () => {
  return (<>
    <div className='signup1'>
    <h1 className='register' >Register</h1><br/>
    <p className='register-para'>Create an account & Start posting or hiring talents</p>
    </div><br></br>
    <SignUp />
    <br></br>
</>
  )
}
 export default Signup1;