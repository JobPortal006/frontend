import axios from "axios";
import validation from "../components/login.json";
import { useEffect } from "react";

// const handlePassword = () =>{
//   navigate('/SignUp');
// }

const mailOne = validation.email.one;
const mailTwo = validation.email.two;
const mailThree = validation.email.three;
const passOne = validation.password.one;


export const emailBlur = (email, setEmailError, setPasswordError) => {
  
  const trimmedEmail = email.trim();
  if (!trimmedEmail) {
    setEmailError(mailOne);
  } else if (!trimmedEmail.endsWith(mailThree)) {
    setEmailError(mailTwo);
    setPasswordError("");
  } else {
    setEmailError("");
  }
};

export const handlePasswordBlur = (email, setEmailError) => {
  const trimmedEmail = email.trim();
  if (!trimmedEmail) {
    setEmailError(mailTwo);
  }
};

export const handleSubmit = async (event,email,password,setEmailError,setPasswordError,outputData, setOutputData) => {

  event.preventDefault();

  const trimmedEmail = email.trim();
  if (!trimmedEmail && !password) {
    setEmailError(mailOne);
    setPasswordError(passOne);
  } else if (!trimmedEmail) {
    setEmailError(mailTwo);
    setPasswordError("");
  } else if (!trimmedEmail.endsWith(mailThree)) {
    setEmailError(mailTwo);
    setPasswordError("");
  } else if (!password) {
    setEmailError("");
    setPasswordError(passOne);
  } else {
    setEmailError("");
    setPasswordError("");

  //   let headers = new Headers();
  //   const dataOne = { email, password };


  //   headers.append("Content-Type", "application/json");
  //   headers.append("Accept", "application/json");
  //   headers.append("Origin", "http://192.168.1.36:8000/login/");
  //   const apiUrl = "http://192.168.1.36:8000/login/";

   
  //   try {
  //     const response = await axios.post(apiUrl, dataOne, headers);
  //     localStorage.setItem("loginToken", response?.data?.message?.token)
  //     console.log( "LoginToken========>",response.data.message.token);
  //     outputData = response.data.status;
  //     setOutputData(outputData);
  //     console.log(outputData, "post data response===>");
  //     console.log(dataOne);
  //     console.log(response.data);
      
     
     
  //   } catch (error) {
  //     console.log(error);
  //   }
  }
  

};




 // if ( response?.data?.message?.token !== undefined && outputData ===  true) {
      //   navigate("/home");
      // } else {
      //   console.log("Navigation Error======>");
      // }

