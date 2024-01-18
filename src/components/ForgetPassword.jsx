import React, {  useState } from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import "../components/forgetpassword.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    if (!validateEmail(inputEmail)) {
      setEmailError("Please enter a valid email");
    } else {
      setEmailError("");
    }
  };

  const navigate = useNavigate();

  const handlePassword = () =>{
    navigate('/SignUp');
  }

  const Notify = () => (
    <div >
      <Button
      
        variant="contained"
        color="secondary"
        onClick= {handlePassword}
      >
        SignUp
      </Button>
    </div>
  );



  const handleSubmit = async () => {
   
   
    


    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://192.168.1.41:8000/forgetpassword/');
    const apiUrl = 'http://192.168.1.41:8000/forgetpassword/';

      let data;
      try {
        const response = await axios.post(apiUrl, { email }, headers);
        data = response.data.status;
        console.log(data, "post data response===>");

    
      } catch (error) {
        console.log(error);
      }
      
      console.log(data);
      if (!validateEmail(email)) {
        setEmailError("Please enter a valid email");
        return;
      } else if (data) {
        toast.success("Check Your Mail", {
         
          style: {
            border: "2px solid #4caf50",
            padding: "16px",
            color: "#4caf50",
            backgroundColor: "#f0f0f0",
            
          },
          iconTheme: {
            primary: "#4caf50",
            secondary: "#f0f0f0",
            
          },
        });
      } else {
        toast.error("Click Here to", {
          icon: (
            <div style={{ marginLeft: "150px"}}>
              <Notify />
            </div>
          ),
          position: "top-center",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
  
        setEmailError("Your Email is Not Registered");
      }
      console.log("Submitted email:", email);

  };


  


  return (
    <div className="pass-container">
      <div className="pass-box">
        <Box
          sx={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Enter Your Email</h2>
          <Box width="17rem" component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={handleEmailChange}
              error={!!emailError}
              helperText={emailError}
            />
          </Box>
          <br />
          <Button variant="contained" color="secondary" onClick={handleSubmit}>
            Submit
          </Button>

          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </Box>
      </div>
    </div>
  );
};

export default ForgetPassword;
