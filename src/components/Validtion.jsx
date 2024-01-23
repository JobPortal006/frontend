
import axios from 'axios';
import validation from "../components/login.json";



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
    setPasswordError('');
  } else {
    setEmailError('');
  }
};

export const handlePasswordBlur = (email, setEmailError) => {
    
  const trimmedEmail = email.trim();
  if (!trimmedEmail) {
    setEmailError(mailTwo);
  }
};

export const handleSubmit = async (event, email, password, setEmailError, setPasswordError, navigate) => {
  event.preventDefault();

  const trimmedEmail = email.trim();
  if (!trimmedEmail && !password) {
    setEmailError(mailOne);
    setPasswordError(passOne);
  } else if (!trimmedEmail) {
    setEmailError(mailTwo);
    setPasswordError('');
  } else if (!trimmedEmail.endsWith(mailThree)) {
    setEmailError(mailTwo);
    setPasswordError('');
  } else if (!password) {
    setEmailError('');
    setPasswordError(passOne);
  } else {
    setEmailError('');
    setPasswordError('');

    let headers = new Headers();
    const dataOne = { email, password };
    // const headers = {
    //   'Content-Type': 'application/json',
    //   'Accept': 'application/json',
    //   'Origin': 'http://192.168.1.36:8000/login/',
    // };
    // const apiUrl = 'http://192.168.1.36:8000/login/';

    // try {
    //   const response = await axios.post(apiUrl, data, { headers });
    //   console.log('Post data response:', response);
    // } catch (error) {
    //   console.error('Error in post request:', error);
    // }

//     let status;
//     headers.append("Content-Type", "application/json");
//           headers.append("Accept", "application/json");
//           headers.append("Origin", "http://192.168.1.36:8000/login/");
//           const apiUrl = "http://192.168.1.36:8000/login/";
    
//           axios
//             .post(apiUrl, data, {headers})
//             .then((response) => console.log(response, "post data response===>"))
//             .catch((e) => console.log(e));

            
//   }


headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Origin',"http://192.168.1.36:8000/login/");
const apiUrl = "http://192.168.1.36:8000/login/";


  let outputData;
  try {
    const response = await axios.post(apiUrl, dataOne , headers);
    outputData = response.data.status;
    console.log(outputData, "post data response===>");
    console.log(dataOne);
    console.log(response.data);

   
    if(outputData !== null ){
        navigate('/home');
    } else{
        console.log("Navigation Error======>" );
    }


   


  } catch (error) {
    console.log(error);
  }
  
  

}


};


