import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../UserManagement/OTPlogin.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "@firebase/auth";
import { auth } from "../../components/Firebase/firebase";
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

      const response = await axios.post("http://192.168.1.38:8000/loginWithOTP/", { mobile_number }, { headers: headers });
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

