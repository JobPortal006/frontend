// import { Button, TextField } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import "../components/OTPlogin.css";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "@firebase/auth";
// import { auth } from '../components/Firebase/firebase.js';
// import { useNavigate } from "react-router";
// import {toast, Toaster} from 'react-hot-toast';
// import axios from "axios";
// // import { useEffect } from "react";


// const OTPlogin = () => {
//   const [mobile_number, setMobile_Number] = useState("");
//   // console.log(typeof(mobile_number),"mobile_number====>");
//   const [confirmation, setConfirmation] = useState(null);
//   const [otp, setOtp] = useState("");
//   const navigate = useNavigate();
 
//   console.log(mobile_number, "mobile=====>");

//   const sendOtp = async () => {

    
 

//     try {
//     //      let headers = new Headers();
//     // headers.append('Content-Type', 'application/json');
//     // headers.append('Accept', 'application/json');
//     // headers.append('Origin','http://192.168.1.36:8000/loginWithOTP/');
//     // const apiUrl = 'http://192.168.1.36:8000/loginWithOTP/';
//         // const response = await axios.post(apiUrl, { mobile_number }, headers);

//       //   const headers = {
//       //     'Content-Type': 'application/json',
//       //     'Accept': 'application/json',
//       //   }
//       // const res = axios.post("http://192.168.1.36:8000/loginWithOTP/",{mobile_number},{headers:headers})
//       // .then(response => console.log(response) )
//       // .catch(err=>console.log(err));
//       // console.log(res,"res======>");
    
//       const headers = {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//       };
      
//       // let otpverify;
//       try {
//         const response = await axios.post("http://192.168.1.36:8000/loginWithOTP/", { mobile_number }, { headers: headers });
//         const otpverify = response.data.status;
//         console.log(response);
//         console.log(otpverify, "otpverify======>");
//       } catch (error) {
//         console.error(error);
//       }
    
      
//         const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
//       console.log(recaptcha,"recaptcha====>")
//       const confirmationResult = await signInWithPhoneNumber(auth, mobile_number, recaptcha);
//       console.log(confirmationResult, "confirmationresult");
//       setConfirmation(confirmationResult);
//       toast.success("OTP sended successfully!");
      

      
//     } catch (err) {
//       console.error("Reload");
      
//     }
//   };

//   const verifyOtp = async () => {

    
    
//     try {
//       const confirmationResult = await confirmation.confirm(otp);
//       localStorage.setItem('token',confirmationResult?.user?.accessToken);
//       const getToken = confirmationResult?.user?.accessToken;
//       localStorage.setItem('otpToken',getToken)
//       if (confirmationResult?.user?.accessToken !== undefined ) {
//         console.log('OTP verified successfully:', confirmationResult?.user?.accessToken);
//         toast.success('Redirecting to Login Page')
//         navigate('/home');
//         //  successful OTP verification here
//       } else {
//         console.log('Failed to verify OTP');
//         //  OTP verification failed
//       }
//     } catch (err) {
//       toast.error('OTP is Error');
//       console.error("ERROR");
//     }
//   };

//   useEffect(()=>{
//     const otpToken = localStorage.getItem('otpToken');
//     if(otpToken !== null){
//       navigate("/home");
//     }
//   });

 


//   return (
//     <div className="otp-login">
    
//     <Toaster toastOptions={{ duration: 4000 }} />
//       <div className="otp-contained">
//       <h2 style={{marginLeft:'3rem'}}>Login via OTP</h2>
//         <PhoneInput
//         style={{marginTop :'30px'}}
//           country={"in"}
//           value={mobile_number}
//           onChange={(mobile_number) => setMobile_Number(mobile_number)}
//         />

//         <div style={{marginTop:'1rem'}} id="recaptcha"></div>

//         <Button
//           onClick={sendOtp}
//           sx={{ marginTop: "10px" }}
//           variant="contained"
//         >
//           Send OTP
//         </Button>

//         <br />
//         <TextField
//           onChange={(e) => setOtp(e.target.value)}
//           sx={{ marginTop: "10px", width: "300px" }}
//           variant="outlined"
//           size="small"
//           label="Enter OTP"
//         ></TextField>
//         <br />
//         <Button
//           onClick={verifyOtp}
//           sx={{ marginTop: "10px" }}
//           variant="contained"
//           color="success"
//         >
//           Verify OTP
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default OTPlogin;



// import { Button, TextField } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import "../components/OTPlogin.css";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "@firebase/auth";
// import { auth } from '../components/Firebase/firebase.js';
// import { useNavigate } from "react-router";
// import {toast, Toaster} from 'react-hot-toast';
// // import axios from "axios";


// const OTPlogin = () => {
//   const [phone, setPhone] = useState("");
//   const [confirmation, setConfirmation] = useState(null);
//   const [otp, setOtp] = useState("");
//   const navigate = useNavigate();
 

//   const sendOtp = async () => {
//     try {
//       const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
//       const confirmationResult = await signInWithPhoneNumber(auth, phone, recaptcha);
//       setConfirmation(confirmationResult);
//       toast.success("OTP sended successfully!");
//     } catch (err) {
//       console.error(err);
      
//     }
//   };

//   const verifyOtp = async () => {
//     try {
//       const confirmationResult = await confirmation.confirm(otp);
//       localStorage.setItem('token',confirmationResult?.user?.accessToken);
//       const getToken = confirmationResult?.user?.accessToken;
//       localStorage.setItem('otpToken',getToken)
//       if (confirmationResult?.user?.accessToken !== undefined ) {
//         console.log('OTP verified successfully:', confirmationResult?.user?.accessToken);
//         toast.success('Redirecting to Login Page')
//         navigate('/home');
//         //  successful OTP verification here
//       } else {
//         console.log('Failed to verify OTP');
//         //  OTP verification failed
//       }
//     } catch (err) {
//       toast.error('OTP is Error');
//       console.error(err);
//     }
//   };

//   useEffect(()=>{
//     const otpToken = localStorage.getItem('otpToken');
//     if(otpToken !== null){
//       navigate("/home");
//     }
//   });


//   return (
//     <div className="otp-login">
    
//     <Toaster toastOptions={{ duration: 4000 }} />
//       <div className="otp-contained">
//       <h2 style={{marginLeft:'3rem'}}>Login via OTP</h2>
//         <PhoneInput
//         style={{marginTop :'30px'}}
//           country={"in"}
//           value={phone}
//           onChange={(phone) => setPhone("+" + phone)}
//         />

//         <div style={{marginTop:'1rem'}} id="recaptcha"></div>

//         <Button
//           onClick={sendOtp}
//           sx={{ marginTop: "10px" }}
//           variant="contained"
//         >
//           Send OTP
//         </Button>

//         <br />
//         <TextField
//           onChange={(e) => setOtp(e.target.value)}
//           sx={{ marginTop: "10px", width: "300px" }}
//           variant="outlined"
//           size="small"
//           label="Enter OTP"
//         ></TextField>
//         <br />
//         <Button
//           onClick={verifyOtp}
//           sx={{ marginTop: "10px" }}
//           variant="contained"
//           color="success"
//         >
//           Verify OTP
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default OTPlogin;

import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../components/OTPlogin.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "@firebase/auth";
import { auth } from './FireBase/firebase.js';
import { useNavigate } from "react-router";
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios'; // Import axios

const OTPlogin = () => {
  const [mobile_number, setPhone] = useState("");
  const [confirmation, setConfirmation] = useState(null);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});

      // Call your API to send OTP
      const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      };

      const response = await axios.post("http://192.168.1.36:8000/loginWithOTP/", { mobile_number }, { headers: headers });
      const otpverify = response.data.status;
      
      console.log(response, "OTP_Response====>");
      console.log(otpverify, "otpverify======>");

      // Continue with Firebase OTP verification if your API call was successful
      if(otpverify){
        await recaptcha.verify();
        const confirmationResult = await signInWithPhoneNumber(auth, mobile_number, recaptcha);
        setConfirmation(confirmationResult);
        toast.success("OTP sent successfully!");
      }else{
        toast.error('Register your Mobile Number');
      }
    } catch (err) {
      console.error(err);
      toast.error('Failed to send OTP');
    }
  };

  const verifyOtp = async () => {
    try {
      const confirmationResult = await confirmation.confirm(otp);
      localStorage.setItem('token', confirmationResult?.user?.accessToken);
      const getToken = confirmationResult?.user?.accessToken;
      localStorage.setItem('otpToken', getToken)
      if (confirmationResult?.user?.accessToken !== undefined) {
        console.log('OTP verified successfully:', confirmationResult?.user?.accessToken);
        toast.success('Redirecting to Login Page')
        navigate('/home');
      } else {
        console.log('Failed to verify OTP');
      }
    } catch (err) {
      toast.error('OTP is Error');
      console.error(err);
    }
  };

  useEffect(() => {
    const otpToken = localStorage.getItem('otpToken');
    if (otpToken !== null) {
      navigate("/home");
    }
  });

  return (
    <div className="otp-login">
      <Toaster toastOptions={{ duration: 4000 }} />
      <div className="otp-contained">
        <h2 style={{ marginLeft: '3rem' }}>Login via OTP</h2>
        <PhoneInput
          style={{ marginTop: '30px' }}
          country={"in"}
          value={mobile_number}
          onChange={(mobile_number) => setPhone("+" + mobile_number)}
        />

        <div style={{ marginTop: '1rem' }} id="recaptcha"></div>

        <Button
          onClick={sendOtp}
          sx={{ marginTop: "10px" }}
          variant="contained"
        >
          Send OTP
        </Button>

        <br />
        <TextField
          onChange={(e) => setOtp(e.target.value)}
          sx={{ marginTop: "10px", width: "300px" }}
          variant="outlined"
          size="small"
          label="Enter OTP"
        ></TextField>
        <br />
        <Button
          onClick={verifyOtp}
          sx={{ marginTop: "10px" }}
          variant="contained"
          color="success"
        >
          Verify OTP
        </Button>
      </div>
    </div>
  );
};

export default OTPlogin;

