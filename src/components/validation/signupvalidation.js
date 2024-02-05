import validationMessages from '../Json/signup.json';
import regexPatterns from '../Json/signupRegularexpression.json';
import { signInWithPopup } from 'firebase/auth';
import axios from 'axios';

export const handleInputChange = (formData, setFormData, errors, setErrors, e) => {
  const { name, value, type, checked } = e.target;
  let errorMessage = '';
  
  const containsSpace = /\s/.test(value);

  if (containsSpace) {
    setErrors({ ...errors, [name]: validationMessages.fields[name].containsSpace });
    return;
  }

  if (name === 'mobileNumber') {
    const numericValue = value.replace(/\D/g, '');
    setFormData({ ...formData, [name]: numericValue });
  } else {
    setFormData({ ...formData, [name]: value });
  }

  if (['email', 'mobileNumber'].includes(name) && /\s/.test(value)) {
    errorMessage = validationMessages.fields[name].containsSpace;
  }

  if (name === 'email' && /\s/.test(value)) {
    errorMessage = validationMessages.fields.email.containsSpace;
  }

  if (name === 'mobileNumber') {
    const numericValue = value.replace(/\D/g, '');
    if (numericValue.length !== 10) {
      errorMessage = validationMessages.fields.mobileNumber.invalid;
    }
  }

  if (name === 'signupBy') {
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

export const handleSubmit = (formData, setErrors, setShowPassword, setShowconfirm_password, e) => {
  e.preventDefault();

  const emailRegex = new RegExp(regexPatterns.emailRegex);
  const mobileNumberRegex = new RegExp(regexPatterns.mobileNumberRegex);
  const passwordRegex = new RegExp(regexPatterns.passwordRegex);

  const newErrors = {
    signupBy: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirm_password: '',
    agreeTerms: '',
  };

  if (!emailRegex.test(formData.email)) {
    newErrors.email = validationMessages.fields.email.invalid;
  }

  if (!mobileNumberRegex.test(formData.mobileNumber)) {
    newErrors.mobileNumber = validationMessages.fields.mobileNumber.invalid;
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

    axios.post(apiUrl, formData, headers)
      .then(response => console.log(response, "post data response===>"))
      .catch(e => console.log(e));
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
