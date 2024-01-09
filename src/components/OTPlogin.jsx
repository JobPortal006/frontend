import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../components/OTPlogin.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "@firebase/auth";
import auth from "./Firebase/login";
import { useNavigate } from "react-router";
import {toast, Toaster} from 'react-hot-toast';


const OTPlogin = () => {
  const [phone, setPhone] = useState("");
  const [confirmation, setConfirmation] = useState(null);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
 

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmationResult = await signInWithPhoneNumber(auth, phone, recaptcha);
      setConfirmation(confirmationResult);
      toast.success("OTP sended successfully!");
    } catch (err) {
      console.error(err);
      
    }
  };

  const verifyOtp = async () => {
    try {
      const confirmationResult = await confirmation.confirm(otp);
      localStorage.setItem('token',confirmationResult?.user?.accessToken);
      const getToken = confirmationResult?.user?.accessToken;
      if (getToken !== undefined) {
        console.log('OTP verified successfully:', confirmationResult?.user?.accessToken);
          navigate('/login')
        // You can perform actions after successful OTP verification here
      } else {
        console.log('Failed to verify OTP');
        // Handle the case where OTP verification failed
      }
    } catch (err) {
      toast.error('OTP is Error');
      console.error(err);
    }
  };

  return (
    <div className="otp-login">
    
    <Toaster toastOptions={{ duration: 4000 }} />
      <div className="otp-contained">
      <h2 style={{marginLeft:'3rem'}}>Login via OTP</h2>
        <PhoneInput
        style={{marginTop :'30px'}}
          country={"in"}
          value={phone}
          onChange={(phone) => setPhone("+" + phone)}
        />

        <div style={{marginTop:'1rem'}} id="recaptcha"></div>

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
