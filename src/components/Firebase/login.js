import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const Config = {
  apiKey: "AIzaSyDUVNdbpq4ICRTw3-YuEoMcflp-KrPbPKU",
  authDomain: "login-otp-jobportal.firebaseapp.com",
  projectId: "login-otp-jobportal",
  storageBucket: "login-otp-jobportal.appspot.com",
  messagingSenderId: "176618231785",
  appId: "1:176618231785:web:fb3e7321e521d64bed9d78",
  measurementId: "G-XWHRVZ630K"
};

const app = initializeApp(Config);
const auth = getAuth(app);

export default auth; 






