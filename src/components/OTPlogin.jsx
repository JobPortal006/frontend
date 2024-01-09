// import { Button, TextField } from "@mui/material";
// import React, { useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import "../components/OTPlogin.css";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "@firebase/auth";
// import auth from "./Firebase/login";
// // import OTPInput from "react-otp-input";

// const OTPlogin = () => {
//   const [phone, setPhone] = useState("");
//   const [user, setUser] = useState(null);
//   const [otp, setOtp] = useState("");

//   const sendOtp = async () => {
//     try {
//       const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
//       const confirmation = signInWithPhoneNumber(auth, phone, recaptcha);
//       setUser(confirmation);
      
//     } catch (err) {
//       console.error(err);
//     }
//   };

  

//   const verifyOtp = async () => {
//     try {
//       const data= await user.confirm(otp);
//       console.log(data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="otp-login">
//       <div className="otp-contained">
//         <PhoneInput
//           country={"in"}
//           value={phone}
//           onChange={(phone) => setPhone("+" + phone)}
//         />

//         <div  id="recaptcha"></div>

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
//         <Button onClick={verifyOtp} sx={{ marginTop: "10px" }} variant="contained" color="success">
//           Verify OTP
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default OTPlogin;



import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../components/OTPlogin.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "@firebase/auth";
import auth from "./Firebase/login";
// import OTPInput from "react-otp-input";
import { useNavigate } from "react-router";


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
      alert('OTP is sent')
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
      alert('OTP is Error')
      console.error(err);
    }
  };

  return (
    <div className="otp-login">
      <div className="otp-contained">
        <PhoneInput
          country={"in"}
          value={phone}
          onChange={(phone) => setPhone("+" + phone)}
        />

        <div  id="recaptcha"></div>

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
