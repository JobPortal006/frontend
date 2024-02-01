// import validationMessages from '../Json/signup.json';
// import regexPatterns from '../Json/signupRegularexpression.json';
// import { signInWithPopup } from 'firebase/auth';
// import axios from 'axios';

// export const handleInputChange = (formData, setFormData, errors, setErrors, e) => {
//   const { name, value, type, checked } = e.target;
//   let errorMessage = '';
  
//   const containsSpace = /\s/.test(value);

//   if (containsSpace) {
//     setErrors({ ...errors, [name]: validationMessages.fields[name].containsSpace });
//     return;
//   }

//   if (name === 'mobile_number') {
//     const numericValue = value.replace(/\D/g, '');
//     setFormData({ ...formData, [name]: numericValue });
//   } else {
//     setFormData({ ...formData, [name]: value });
//   }

//   if (['email', 'mobile_number'].includes(name) && /\s/.test(value)) {
//     errorMessage = validationMessages.fields[name].containsSpace;
//   }

//   if (name === 'email' && /\s/.test(value)) {
//     errorMessage = validationMessages.fields.email.containsSpace;
//   }

//   if (name === 'mobile_number') {
//     const numericValue = value.replace(/\D/g, '');
//     if (numericValue.length !== 10) {
//       errorMessage = validationMessages.fields.mobile_number.invalid;
//     }
//   }

//   if (name === 'signup_by') {
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//     setErrors({
//       ...errors,
//       [name]: '',
//     });
//     return;
//   }

  
//   if (type === 'checkbox') {
//     setFormData({
//       ...formData,
//       [name]: checked,
//     });
//     setErrors({
//       ...errors,
//       [name]: '',
//     });
//     return;
//   }

//   setFormData({
//     ...formData,
//     [name]: value,
//   });

//   setErrors({
//     ...errors,
//     [name]: errorMessage,
//   });
// };

// export const handleTogglePasswordVisibility = (field, showPassword, setShowPassword, showconfirm_password, setShowconfirm_password) => {
//   if (field === 'password') {
//     setShowPassword(!showPassword);
//   } else if (field === 'confirm_password') {
//     setShowconfirm_password(!showconfirm_password);
//   }
// };

// export const handleSubmit = async (formData, setErrors, setShowPassword, setShowconfirm_password, navigate, e) => {
//   e.preventDefault();

//   const emailRegex = new RegExp(regexPatterns.emailRegex);
//   const mobile_numberRegex = new RegExp(regexPatterns.mobile_numberRegex);
//   const passwordRegex = new RegExp(regexPatterns.passwordRegex);

//   const newErrors = {
//     signup_by: '',
//     email: '',
//     mobile_number: '',
//     password: '',
//     confirm_password: '',
//     agreeTerms: '',
//   };

//   if (!emailRegex.test(formData.email)) {
//     newErrors.email = validationMessages.fields.email.invalid;
//   }

//   if (!mobile_numberRegex.test(formData.mobile_number)) {
//     newErrors.mobile_number = validationMessages.fields.mobile_number.invalid;
//   }

//   if (!passwordRegex.test(formData.password)) {
//     newErrors.password = validationMessages.fields.password.invalid;
//   }

//   if (formData.password !== formData.confirm_password) {
//     newErrors.confirm_password = validationMessages.fields.confirm_password.mismatch;
//   }

//   if (!formData.agreeTerms) {
//     newErrors.agreeTerms = validationMessages.fields.agreeTerms.required;
//   }

//   setErrors(newErrors);

//   if (!Object.values(newErrors).some(error => error !== '')) {
//     const formDataWithoutSensitiveInfo = { ...formData };
//     delete formDataWithoutSensitiveInfo.confirm_password;
//     delete formDataWithoutSensitiveInfo.agreeTerms;

//     console.log('Form submitted:', formDataWithoutSensitiveInfo);

//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     headers.append('Accept', 'application/json');
//     headers.append('Origin','http://192.168.1.38:8000/signup/');
//     const apiUrl = 'http://192.168.1.38:8000/signup/';

//     try {
//       const response = await axios.post(apiUrl, formData, headers);

//       console.log(response, "post data response===>");
//       if (response.data.apiResponse === true) {
//         // If API response is true, navigate to login page
//         navigate('/login');
//       } else {
//         // If API response is false, show the error message
//         console.error('Account already exists');
//         // You may want to display this error message to the user.
//       }
//     }
//     catch (error) {
//       console.log(error);
//     }
//   }
// };

// export const handleGoogleSignIn = (auth, provider, setValue, navigate) => {
//   signInWithPopup(auth, provider)
//     .then((data) => {
//       setValue(data.user.email);
//       localStorage.setItem('email', data.user.email);
//       localStorage.setItem('googleToken', data._tokenResponse.oauthAccessToken);
//     })
//     .catch((error) => {
//       console.error('Google Sign-In Error:', error.message);
//     });
// };

// Import necessary dependencies and configurations
import validationMessages from '../Json/signup.json';
import regexPatterns from '../Json/signupRegularexpression.json';
import { signInWithPopup } from 'firebase/auth';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

export const handleInputChange = (formData, setFormData, errors, setErrors, e) => {
  const { name, value, type, checked } = e.target;
  let errorMessage = '';
  
  const containsSpace = /\s/.test(value);

  if (containsSpace) {
    setErrors({ ...errors, [name]: validationMessages.fields[name].containsSpace });
    return;
  }

  if (name === 'mobile_number') {
    const numericValue = value.replace(/\D/g, '');
    setFormData({ ...formData, [name]: numericValue });
  } else {
    setFormData({ ...formData, [name]: value });
  }

  if (['email', 'mobile_number'].includes(name) && /\s/.test(value)) {
    errorMessage = validationMessages.fields[name].containsSpace;
  }

  if (name === 'email' && /\s/.test(value)) {
    errorMessage = validationMessages.fields.email.containsSpace;
  }

  if (name === 'mobile_number') {
    const numericValue = value.replace(/\D/g, '');
    if (numericValue.length !== 10) {
      errorMessage = validationMessages.fields.mobile_number.invalid;
    }
  }

  if (name === 'signup_by') {
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
    return;
  }

  if (type === 'checkbox') {
    setFormData({
      ...formData,
      [name]: checked,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
    return;
  }

  setFormData({
    ...formData,
    [name]: value,
  });

  setErrors({
    ...errors,
    [name]: errorMessage,
  });
};

export const handleTogglePasswordVisibility = (field, showPassword, setShowPassword, showconfirm_password, setShowconfirm_password) => {
  if (field === 'password') {
    setShowPassword(!showPassword);
  } else if (field === 'confirm_password') {
    setShowconfirm_password(!showconfirm_password);
  }
};

export const handleSubmit = async (formData, setErrors, setShowPassword, setShowconfirm_password, e,navigate) => {
  e.preventDefault();

  const emailRegex = new RegExp(regexPatterns.emailRegex);
  const mobile_numberRegex = new RegExp(regexPatterns.mobile_numberRegex);
  const passwordRegex = new RegExp(regexPatterns.passwordRegex);

  const newErrors = {
    signup_by: '',
    email: '',
    mobile_number: '',
    password: '',
    confirm_password: '',
    agreeTerms: '',
  };

  if (!emailRegex.test(formData.email)) {
    newErrors.email = validationMessages.fields.email.invalid;
  }

  if (!mobile_numberRegex.test(formData.mobile_number)) {
    newErrors.mobile_number = validationMessages.fields.mobile_number.invalid;
  }

  if (!passwordRegex.test(formData.password)) {
    newErrors.password = validationMessages.fields.password.invalid;
  }

  if (formData.password !== formData.confirm_password) {
    newErrors.confirm_password = validationMessages.fields.confirm_password.mismatch;
  }

  if (!formData.agreeTerms) {
    newErrors.agreeTerms = validationMessages.fields.agreeTerms.required;
  }

  setErrors(newErrors);

  if (!Object.values(newErrors).some(error => error !== '')) {
    const formDataWithoutSensitiveInfo = { ...formData };
    delete formDataWithoutSensitiveInfo.confirm_password;
    delete formDataWithoutSensitiveInfo.agreeTerms;

    console.log('Form submitted:', formDataWithoutSensitiveInfo);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://192.168.1.38:8000/signup/');
    const apiUrl = 'http://192.168.1.38:8000/signup/';
    
    try {
      const response = await axios.post(apiUrl, formData, headers);

      console.log(response, "post data response===>");
      console.log(response.data.status, "SignUp======>");
      if (response.data.status === true) {
        // If API response is true, navigate to login page
        navigate('/login');
      } else {
        // If API response is false, show the error message
       alert('Account already exists');
        // You may want to display this error message to the user.
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export const handleGoogleSignIn = (auth, provider, setValue, navigate) => {
  signInWithPopup(auth, provider)
    .then((data) => {
      setValue(data.user.email);
      localStorage.setItem('email', data.user.email);
      localStorage.setItem('googleToken', data._tokenResponse.oauthAccessToken);
    })
    .catch((error) => {
      console.error('Google Sign-In Error:', error.message);
    });
};
