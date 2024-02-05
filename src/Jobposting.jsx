import React, { useState } from 'react';
import {
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Button,
} from '@mui/material';

const Jobposting = () => {
  const [companyLogo, setCompanyLogo] = useState(null);
  const [companyName, setCompanyName] = useState('');
  const [companyType, setCompanyType] = useState('');
  const [industrialType, setIndustrialType] = useState('');
  const [officialEmail, setOfficialEmail] = useState('');
  const [personName, setPersonName] = useState('');
  const [numberOfEmployees, setNumberOfEmployees] = useState('');
  const [mobileLandline, setMobileLandline] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');

  const [validationErrors, setValidationErrors] = useState({
    companyName: false,
    companyType: false,
    industrialType: false,
    officialEmail: false,
    personName: false,
    numberOfEmployees: false,
    mobileLandline: false,
    companyDescription: false,
    companyAddress: false,
  });

  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    setCompanyLogo(file);
  };

  const handleLogoCancel = () => {
    setCompanyLogo(null);
  };

  const handleReset = () => {
    setCompanyName('');
    setCompanyType('');
    setIndustrialType('');
    setOfficialEmail('');
    setPersonName('');
    setNumberOfEmployees('');
    setMobileLandline('');
    setCompanyLogo(null);
    setCompanyDescription('');
    setCompanyAddress('');

    // Reset validation errors
    setValidationErrors({
      companyName: false,
      companyType: false,
      industrialType: false,
      officialEmail: false,
      personName: false,
      numberOfEmployees: false,
      mobileLandline: false,
      companyDescription: false,
      companyAddress: false,
    });
  };

  const handleSubmit = () => {
    // Validate fields
    const errors = {
      companyName: !companyName,
      companyType: !companyType,
      industrialType: !industrialType,
      officialEmail: !officialEmail,
      personName: !personName,
      numberOfEmployees: !numberOfEmployees,
      mobileLandline: !mobileLandline,
      companyDescription: !companyDescription,
      companyAddress: !companyAddress,
    };

    setValidationErrors(errors);

    // If any field is empty, prevent form submission
    if (Object.values(errors).some((error) => error)) {
      return;
    }

    console.log('Form data:', {
      companyName,
      companyType,
      industrialType,
      officialEmail,
      personName,
      numberOfEmployees,
      mobileLandline,
      companyLogo,
      companyDescription,
      companyAddress,
    });

    // Your form submission logic goes here
    console.log('Form submitted successfully!');
  };

  return (
    <Grid container justifyContent="center" width="100%" bgcolor="cornflowerblue" style={{padding:'10px'}}>
      <Grid
        item
        xs={12}
        sm={6}
        style={{
          boxShadow: '0 4px 8px rgba(0.3, 0.3, 0.3, 0.50)',
          padding: '30px',
          borderRadius: '2%',
          width: '70%',
          backgroundColor:'whitesmoke'
        }}
      >
        <Typography
          variant="h5"
        //   bgcolor="lightgray"
          textAlign="center"
          style={{ padding: '10px', marginBottom: '10px' }}
        >
          Company Details
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Company Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                error={validationErrors.companyName}
                helperText={validationErrors.companyName && 'Please enter the company name'}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined" margin="none">
                <InputLabel id="company-type-label">Company Type</InputLabel>
                <Select
                  labelId="company-type-label"
                  label="Company Type"
                  value={companyType}
                  onChange={(e) => setCompanyType(e.target.value)}
                  error={validationErrors.companyType}
                >
                  <MenuItem value="company">Company</MenuItem>
                  <MenuItem value="consultant">Consultant</MenuItem>
                  <MenuItem value="individual">Individual</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined" margin="none">
                <InputLabel id="industrial-type-label">Industrial Type</InputLabel>
                <Select
                  labelId="industrial-type-label"
                  label="Industrial Type"
                  value={industrialType}
                  onChange={(e) => setIndustrialType(e.target.value)}
                  error={validationErrors.industrialType}
                >
                  <MenuItem value="it">IT</MenuItem>
                  <MenuItem value="non-it">Non-IT</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Official Email"
                variant="outlined"
                fullWidth
                margin="none"
                value={officialEmail}
                onChange={(e) => setOfficialEmail(e.target.value)}
                error={validationErrors.officialEmail}
                helperText={
                  validationErrors.officialEmail && 'Please enter the official email'
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Person Name"
                variant="outlined"
                fullWidth
                margin="none"
                value={personName}
                onChange={(e) => setPersonName(e.target.value)}
                error={validationErrors.personName}
                helperText={
                  validationErrors.personName && 'Please enter the person name'
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined" margin="none">
                <InputLabel id="employee-number-label">
                  No of Employees
                </InputLabel>
                <Select
                  labelId="employee-number-label"
                  label="No of Employees"
                  value={numberOfEmployees}
                  onChange={(e) => setNumberOfEmployees(e.target.value)}
                  error={validationErrors.numberOfEmployees}
                >
                  <MenuItem value="0-10">0-10</MenuItem>
                  <MenuItem value="10-50">10-50</MenuItem>
                  <MenuItem value="50-100">50-100</MenuItem>
                  <MenuItem value="100-200">100-200</MenuItem>
                  <MenuItem value="200-500">200-500</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Mobile/Landline"
                variant="outlined"
                fullWidth
                margin="none"
                value={mobileLandline}
                onChange={(e) => setMobileLandline(e.target.value)}
                error={validationErrors.mobileLandline}
                helperText={
                  validationErrors.mobileLandline &&
                  'Please enter the mobile/landline number'
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <input
                  style={{ display: 'none' }}
                  accept="image/*"
                  id="company-logo-upload"
                  type="file"
                  onChange={handleLogoChange}
                />
                <label htmlFor="company-logo-upload">
                  <Button variant="contained" component="span">
                    Upload Company Logo
                  </Button>
                </label>
                {companyLogo && (
                  <div>
                    <Button
                      variant="outlined"
                      style={{marginTop:'10px'}}
                      color="secondary"
                      onClick={handleLogoCancel}
                    >
                      Cancel
                    </Button>
                    <Typography variant="body2" color="green">
                      Logo Uploaded Successfully
                    </Typography>
                    <img
                      src={URL.createObjectURL(companyLogo)}
                      alt="Company Logo"
                      style={{
                        maxWidth: '100px',
                        maxHeight: '100px',
                        marginTop: '5px',
                      }}
                    />
                  </div>
                )}
              </div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Company Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                margin="none"
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
                error={validationErrors.companyDescription}
                helperText={
                  validationErrors.companyDescription &&
                  'Please enter the company description'
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Company Address"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                margin="none"
                value={companyAddress}
                onChange={(e) => setCompanyAddress(e.target.value)}
                error={validationErrors.companyAddress}
                helperText={
                  validationErrors.companyAddress &&
                  'Please enter the company address'
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
              </Button>
              <Button variant="contained" color="secondary" style={{marginLeft:'10px'}} onClick={handleReset}>
                 Reset
                </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Jobposting;