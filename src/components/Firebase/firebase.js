
// <---Prathap--->

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const Config = {
  apiKey: "AIzaSyAEMF4GZhvfO0ASM7moJgFkkv3tL_15TAA",
  authDomain: "otp-otp-4a574.firebaseapp.com",
  projectId: "otp-otp-4a574",
  storageBucket: "otp-otp-4a574.appspot.com",
  messagingSenderId: "745831201499",
  appId: "1:745831201499:web:fd9f61f4082dde0f16aafe",
  measurementId: "G-HRMKLG3XCK",
};

const app = initializeApp(Config);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
