
import React, { useState, useRef } from 'react';
import {
    Button,
    TextField,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Container,
    styled,
    Input,
    Avatar,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Select, MenuItem } from '@mui/material';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';


// Container styling
const FormContainer = styled(Container)({
    maxWidth: '600px',
    margin: 'auto',
    marginTop: (theme) => theme.spacing(4),
});

// Styled Accordions
const AccordionWrapper = styled(Accordion)({
    marginBottom: (theme) => theme.spacing(2),
});

const ResumeAccordionWrapper = styled(Accordion)({
    marginBottom: (theme) => theme.spacing(2),
});

const UserForm = () => {
    // State for user details
    const [userDetails, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        mobileNumber: '',
        gender: '',
    });

    // State for address
    const [address, setAddress] = useState({
        current: {
            street: '',
            city: '',
            pincode: '',
            state: '',
            country: '',
        },
        permanent: {
            street: '',
            city: '',
            pincode: '',
            state: '',
            country: '',
        },
    });
    // State for education details
    const [education, setEducation] = useState({
        sslc_school_name: '',
        sslc_start_date: '',
        sslc_end_date: '',
        sslc_percentage: '',
        hsc_school_name: '',
        hsc_start_date: '',
        hsc_end_date: '',
        hsc_percentage: '',
        college_name: '',
        college_start_date: '',
        college_end_date: '',
        college_percentage: '',
        department: '',
        degree: '',


    });

    const [jobPreference, setJobPreference] = useState({
        key_skills: '',
        industries: '',
        department: '',
        prefered_locations: ''
    })

    // State for professional details
    const [professionalDetails, setProfessionalDetails] = useState({
        isExperienced: true,
        numberOfCompanies: '',
        companies: [{ companyName: '', position: '', startDate: '', endDate: '' }],
    });



    // Handle changes in professional details fields
    const handleProfessionalDetailsChange = (event, index) => {
        const { name, value } = event.target;

        // If the field is for a specific company, update the corresponding company's details
        if (index !== undefined) {
            const updatedCompanies = [...professionalDetails.companies];
            updatedCompanies[index] = {
                ...(updatedCompanies[index] || {}), // Ensure the array element exists
                [name]: value,
            };

            setProfessionalDetails((prevDetails) => ({
                ...prevDetails,
                companies: updatedCompanies,
            }));
        } else {
            // If the field is for the number of companies, update the state
            const newNumberOfCompanies = value || 0;
            const updatedCompanies = professionalDetails.companies.slice(0, newNumberOfCompanies);

            setProfessionalDetails((prevDetails) => ({
                ...prevDetails,
                numberOfCompanies: newNumberOfCompanies,
                companies: updatedCompanies,
            }));
        }
    };

    // Handle experience/fresher checkbox change
    const handleExperienceFresherChange = (event) => {
        const isExperienced = event.target.checked;
        setProfessionalDetails({
            isExperienced,
            numberOfCompanies: '',
            companies: isExperienced ? [{ companyName: '', position: '', startDate: '', endDate: '' }] : [],
        });
        setProfessionalDetailsExpanded(isExperienced);
    };

    // State for resume upload
    const [resume, setResume] = useState(null);

    // State for resume accordion expansion
    const [resumeExpanded, setResumeExpanded] = useState(false);

    // State for experience checkbox
    const [experienceOption, setExperienceOption] = useState(''); // Default to 'experienced'

    // Handle resume upload
    const handleResumeChange = (event) => {
        const file = event.target.files[0];
        setResume(file);
    };

    // Handle removing the resume
    const handleRemoveResume = () => {
        setResume(null);

        // Clear the file input value
        const fileInput = document.getElementById('resume-input');
        if (fileInput) {
            fileInput.value = '';
        }
    };

    // Handle resume accordion expansion/collapse
    const handleResumeExpand = () => {
        setResumeExpanded(!resumeExpanded);
    };

    // State for profile picture
    const [profilePicture, setProfilePicture] = useState(null);

    // State for accordion expansion
    const [userDetailsExpanded, setUserDetailsExpanded] = useState(false);
    const [addressExpanded, setAddressExpanded] = useState(false);
    const [educationExpanded, setEducationExpanded] = useState(false);
    const [jobPreferenceExpanded, setjobPreferenceExpanded] = useState(false);
    // State for professional details accordion expansion
    const [professionalDetailsExpanded, setProfessionalDetailsExpanded] = useState(false);

    // Handle changes in user details fields
    const handleUserDetailsChange = (event) => {
        setUserDetails({
            ...userDetails,
            [event.target.name]: event.target.value,
        });
    };

    // Handle changes in address fields
    const handleAddressChange = (type, event) => {
        setAddress((prevAddress) => ({
            ...prevAddress,
            [type]: {
                ...prevAddress[type],
                [event.target.name]: event.target.value,
            },
        }));
    };
    // Handle changes in education fields
    const handleEducationChange = (event) => {
        setEducation({
            ...education,
            [event.target.name]: event.target.value,
        });
    };


    const handlejobPreferenceChange = (event) => {
        setJobPreference({
            ...jobPreference,
            [event.target.name]: event.target.value,
        });
    };
    // Handle profile picture upload
    const handleProfilePictureChange = (event) => {
        const file = event.target.files[0];
        setProfilePicture(file);
    };

    // Handle removing the profile picture
    const handleRemoveProfilePicture = () => {
        setProfilePicture(null);

        // Clear the file input value
        const fileInput = document.getElementById('profile-picture-input');
        if (fileInput) {
            fileInput.value = '';
        }
    };

    // Handle user details accordion expansion/collapse
    const handleUserDetailsExpand = () => {
        setUserDetailsExpanded(!userDetailsExpanded);
    };

    // Handle address accordion expansion/collapse
    const handleAddressExpand = () => {
        setAddressExpanded(!addressExpanded);
    };

    // Handle education accordion expansion/collapse
    const handleEducationExpand = () => {
        setEducationExpanded(!educationExpanded);
    };
    // Handle jobpreference accordion expansion/collapse
    const handlejobPreferenceExpand = () => {
        setjobPreferenceExpanded(!jobPreferenceExpanded);
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Address type determination
        let addressType;

        if (address.permanent.street && address.current.street) {
            addressType = 'Both';
        } else if (address.permanent.street) {
            addressType = 'Permanent';
        } else if (address.current.street) {
            addressType = 'Current';
        } else {
            console.log('Please fill at least one address type');
            return;
        }

        // Consolidated log statement for all data
        console.log({
            userDetails: userDetails,
            address: {
                type: addressType,
                permanent: {
                    ...address.permanent,
                    address_type: 'Permanent',
                },
                current: {
                    ...address.current,
                    address_type: 'Current',
                },
            },
            education: education,
            professionalDetails: professionalDetails.isExperienced
                ? professionalDetails
                : 'Fresher',
            resume: resume ? 'Uploaded' : 'Not uploaded',
            jobPreference: jobPreference,
        });

        // Resetting states
        event.target.reset();
        setUserDetails({
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            mobileNumber: '',
            gender: '',
        });
        setAddress({
            current: {
                street: '',
                city: '',
                pincode: '',
                state: '',
                country: '',
            },
            permanent: {
                street: '',
                city: '',
                pincode: '',
                state: '',
                country: '',
            },
        });
        setEducation({
            sslc_school_name: '',
            sslc_start_date: '',
            sslc_end_date: '',
            sslc_percentage: '',
            hsc_school_name: '',
            hsc_start_date: '',
            hsc_end_date: '',
            hsc_percentage: '',
            college_name: '',
            college_start_date: '',
            college_end_date: '',
            college_percentage: '',
            department: '',
            degree: '',
        });
        setProfessionalDetails({
            isExperienced: true,
            numberOfCompanies: '',
            companies: [{ companyName: '', position: '', startDate: '', endDate: '' }],
        });
        setExperienceOption('');
        setResume(null);
        setJobPreference({
            key_skills: '',
            industries: '',
            department: '',
            prefered_locations: '',
        });
        setProfilePicture(null);
        // Reset resume state
        setResume(null);

        // Collapse accordion sections
        setUserDetailsExpanded(false);
        setAddressExpanded(false);
        setEducationExpanded(false);
        setProfessionalDetailsExpanded(false);
        setResumeExpanded(false);
        setjobPreferenceExpanded(false)
    };
    const formRef = useRef(null);
    return (
        <FormContainer >
            <Typography variant="h4" align="center" gutterBottom>
                User Form
            </Typography>

            <form ref={formRef} onSubmit={handleSubmit} >
                {/* User Details Accordion */}
                <AccordionWrapper expanded={userDetailsExpanded} onChange={handleUserDetailsExpand} >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">User Details</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                {/* First Column */}
                                <TextField
                                    label="First Name"
                                    name="firstName"
                                    value={userDetails.firstName}
                                    onChange={handleUserDetailsChange}
                                    fullWidth
                                    margin="dense"

                                />
                                <TextField
                                    label="Last Name"
                                    name="lastName"
                                    value={userDetails.lastName}
                                    onChange={handleUserDetailsChange}
                                    fullWidth
                                    margin="dense"
                                />
                                <TextField
                                    label="Date-of-birth  (month/date/year)"
                                    name="dateOfBirth"
                                    value={userDetails.dateOfBirth}
                                    onChange={handleUserDetailsChange}
                                    fullWidth
                                    margin="dense"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                {/* Second Column */}
                                <TextField
                                    label="Mobile Number"
                                    name="mobileNumber"
                                    value={userDetails.mobileNumber}
                                    onChange={handleUserDetailsChange}
                                    fullWidth
                                    margin="dense"
                                />
                                <Select
                                    label="Gender"
                                    name="gender"
                                    value={userDetails.gender}
                                    onChange={handleUserDetailsChange}
                                    fullWidth
                                    displayEmpty
                                    margin="dense"
                                >
                                    <MenuItem value="" disabled>Select Gender</MenuItem>
                                    <MenuItem value="male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>
                                    <MenuItem value="other">Other</MenuItem>
                                </Select>
                                <label htmlFor="profile-picture-input">Upload Profile Picture:</label>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleProfilePictureChange}
                                    margin="dense"
                                    id="profile-picture-input"
                                />
                            </Grid>
                        </Grid>

                        {profilePicture && (
                            <div>
                                <Avatar
                                    alt="Profile Picture"
                                    src={URL.createObjectURL(profilePicture)}
                                    sx={{ width: 100, height: 100, marginTop: 2 }}
                                />
                                <Button color="secondary" onClick={handleRemoveProfilePicture}>
                                    Remove Picture
                                </Button>
                            </div>
                        )}
                    </AccordionDetails>
                </AccordionWrapper>

                {/* Address Accordion */}
                <AccordionWrapper expanded={addressExpanded} onChange={handleAddressExpand}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">Address</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="h6"> Permanent Address</Typography>

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                {/* First Column */}
                                <TextField
                                    label="Street"
                                    name="street"
                                    value={address.permanent.street}
                                    onChange={(e) => handleAddressChange('permanent', e)}
                                    fullWidth
                                    margin="dense"
                                />
                                <TextField
                                    label="City"
                                    name="city"
                                    value={address.permanent.city}
                                    onChange={(e) => handleAddressChange('permanent', e)}
                                    fullWidth
                                    margin="dense"
                                />
                                <TextField
                                    label="Pincode"
                                    name="pincode"
                                    value={address.permanent.pincode}
                                    onChange={(e) => handleAddressChange('permanent', e)}
                                    fullWidth
                                    margin="dense"
                                />
                                {/* </Grid> */}
                                {/* <Grid item xs={12} sm={6}> */}
                                {/* Second Column */}
                                <TextField
                                    label="Country"
                                    name="country"
                                    value={address.permanent.country}
                                    onChange={(e) => handleAddressChange('permanent', e)}
                                    fullWidth
                                    margin="dense"
                                />
                                <TextField
                                    label="State"
                                    name="state"
                                    value={address.permanent.state}
                                    onChange={(e) => handleAddressChange('permanent', e)}
                                    fullWidth
                                    margin="dense"
                                />

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h6">Current Address</Typography>
                                <TextField
                                    label="Street"
                                    name="street"
                                    value={address.current.street}
                                    onChange={(e) => handleAddressChange('current', e)}
                                    fullWidth
                                    margin="dense"
                                />
                                <TextField
                                    label="City"
                                    name="city"
                                    value={address.current.city}
                                    onChange={(e) => handleAddressChange('current', e)}
                                    fullWidth
                                    margin="dense"
                                />
                                <TextField
                                    label="Pincode"
                                    name="pincode"
                                    value={address.current.pincode}
                                    onChange={(e) => handleAddressChange('current', e)}
                                    fullWidth
                                    margin="dense"
                                />

                                <TextField
                                    label="Country"
                                    name="country"
                                    value={address.current.country}
                                    onChange={(e) => handleAddressChange('current', e)}
                                    fullWidth
                                    margin="dense"
                                />
                                <TextField
                                    label="State"
                                    name="state"
                                    value={address.current.state}
                                    onChange={(e) => handleAddressChange('current', e)}
                                    fullWidth
                                    margin="dense"
                                />

                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </AccordionWrapper>

                {/* Educatiom Accordion */}

                <AccordionWrapper expanded={educationExpanded} onChange={handleEducationExpand}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}> <Typography variant="h6">Education details</Typography></AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                {/* First Column */}
                                <TextField
                                    label="SSLC-school-name"
                                    name="sslc_school_name"
                                    value={education.sslc_school_name}
                                    onChange={handleEducationChange}
                                    fullWidth
                                    margin="dense"
                                />
                                <TextField
                                    label="SSLC-start-date"
                                    name="sslc_start_date"
                                    value={education.sslc_start_date}
                                    onChange={handleEducationChange}
                                    fullWidth
                                    margin="dense"
                                />
                                <TextField
                                    label="SSLC-end-date"
                                    name="sslc_end_date"
                                    value={education.sslc_end_date}
                                    onChange={handleEducationChange}
                                    fullWidth
                                    margin="dense"
                                />
                                <TextField
                                    label="SSLC-percentage"
                                    name="sslc_percentage"
                                    value={education.sslc_percentage}
                                    onChange={handleEducationChange}
                                    fullWidth
                                    margin="dense"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                {/* Second Column */}
                                <TextField
                                    label="HSC-school-name"
                                    name="hsc_school_name"
                                    value={education.hsc_school_name}
                                    onChange={handleEducationChange}
                                    fullWidth
                                    margin="dense"
                                />
                                <TextField
                                    label="HSC-start-date"
                                    name="hsc_start_date"
                                    value={education.hsc_start_date}
                                    onChange={handleEducationChange}
                                    fullWidth
                                    margin="dense"
                                />
                                <TextField
                                    label="HSC-end-date"
                                    name="hsc_end_date"
                                    value={education.hsc_end_date}
                                    onChange={handleEducationChange}
                                    fullWidth
                                    margin="dense"
                                />
                                <TextField
                                    label="HSC-percentage"
                                    name="hsc_percentage"
                                    value={education.hsc_percentage}
                                    onChange={handleEducationChange}
                                    fullWidth
                                    margin="dense"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                {/* Third Column */}
                                <TextField
                                    label="College-name"
                                    name="college_name"
                                    value={education.college_name}
                                    onChange={handleEducationChange}
                                    fullWidth
                                    margin="dense"
                                />
                                <TextField
                                    label="College-start-date"
                                    name="college_start_date"
                                    value={education.college_start_date}
                                    onChange={handleEducationChange}
                                    fullWidth
                                    margin="dense"
                                />
                                <TextField
                                    label="College-end-date"
                                    name="college_end_date"
                                    value={education.college_end_date}
                                    onChange={handleEducationChange}
                                    fullWidth
                                    margin="dense"
                                />
                                <TextField
                                    label="College-percentage"
                                    name="college_percentage"
                                    value={education.college_percentage}
                                    onChange={handleEducationChange}
                                    fullWidth
                                    margin="dense"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                {/* Fourth Column */}
                                <TextField
                                    label="Department"
                                    name="department"
                                    value={education.department}
                                    onChange={handleEducationChange}
                                    fullWidth
                                    margin="dense"
                                />
                                <TextField
                                    label="Degree"
                                    name="degree"
                                    value={education.degree}
                                    onChange={handleEducationChange}
                                    fullWidth
                                    margin="dense"
                                />
                            </Grid>


                            {/* pg and diplamo */}
                            <Grid item xs={12}>
                                {/* Radio Buttons for PG/Diploma */}
                                <FormControl component="fieldset">
                                    <RadioGroup
                                        row
                                        aria-label="education-type"
                                        name="education_type"
                                        value={education.education_type}
                                        onChange={handleEducationChange}
                                    >
                                        <FormControlLabel
                                            value="pg"
                                            control={<Radio />}
                                            label="PG"
                                        />
                                        <FormControlLabel
                                            value="diploma"
                                            control={<Radio />}
                                            label="Diploma"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>

                            {/* Additional Fields based on Radio Button selection */}
                            {education.education_type === 'pg' && (
                                <>
                                    {/* Additional PG Fields */}
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="PG-College-name"
                                            name="pg_college_name"
                                            value={education.pg_college_name}
                                            onChange={handleEducationChange}
                                            fullWidth
                                            margin="dense"
                                        />
                                        <TextField
                                            label="PG-College-start-year"
                                            name="pg_college_start_year"
                                            value={education.pg_college_start_year}
                                            onChange={handleEducationChange}
                                            fullWidth
                                            margin="dense"
                                        />
                                        <TextField
                                            label="PG-College-end-year"
                                            name="pg_college_end_year"
                                            value={education.pg_college_end_year}
                                            onChange={handleEducationChange}
                                            fullWidth
                                            margin="dense"
                                        />
                                        <TextField
                                            label="PG-College-percentage"
                                            name="pg_college_percentage"
                                            value={education.pg_college_percentage}
                                            onChange={handleEducationChange}
                                            fullWidth
                                            margin="dense"
                                        />
                                        {/* Add other PG fields here */}
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="PG-College-department"
                                            name="pg_college_department"
                                            value={education.pg_college_department}
                                            onChange={handleEducationChange}
                                            fullWidth
                                            margin="dense"
                                        />
                                        <TextField
                                            label="PG-College-degree"
                                            name="pg_college_degree"
                                            value={education.pg_college_degree}
                                            onChange={handleEducationChange}
                                            fullWidth
                                            margin="dense"
                                        />
                                    </Grid>
                                </>
                            )}

                            {education.education_type === 'diploma' && (
                                <>
                                    {/* Additional Diploma Fields */}
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="Diploma-college-name"
                                            name="diploma_college_name"
                                            value={education.diploma_college_name}
                                            onChange={handleEducationChange}
                                            fullWidth
                                            margin="dense"
                                        />
                                        <TextField
                                            label="Dipoma-college-start-year"
                                            name="diploma_college_start_year"
                                            value={education.diploma_college_start_year}
                                            onChange={handleEducationChange}
                                            fullWidth
                                            margin="dense"
                                        />
                                        <TextField
                                            label="Dipoma-college-end-year"
                                            name="diploma_college_end_year"
                                            value={education.diploma_college_end_year}
                                            onChange={handleEducationChange}
                                            fullWidth
                                            margin="dense"
                                        />
                                           <TextField
                                            label="Dipoma-college-percentage"
                                            name="diploma_college_percentage"
                                            value={education.diploma_college_percentage}
                                            onChange={handleEducationChange}
                                            fullWidth
                                            margin="dense"
                                        />
                                        {/* Add other Diploma fields here */}
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                    <TextField
                                            label="Dipoma-college-department"
                                            name="diploma_college_department"
                                            value={education.diploma_college_department}
                                            onChange={handleEducationChange}
                                            fullWidth
                                            margin="dense"
                                        />
                                         <TextField
                                            label="Dipoma-college-degree"
                                            name="diploma_college_degree"
                                            value={education.diploma_college_degree}
                                            onChange={handleEducationChange}
                                            fullWidth
                                            margin="dense"
                                        />
                                    </Grid>
                                </>
                            )}
                        </Grid>
                    </AccordionDetails>
                </AccordionWrapper>

                {/* Professional Details Accordion */}
                <AccordionWrapper
                    expanded={professionalDetailsExpanded}
                    onChange={() => setProfessionalDetailsExpanded(!professionalDetailsExpanded)}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">Professional Details</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                {/* Experience/Fresher Radio Buttons */}
                                <label>
                                    <input
                                        type="radio"
                                        name="experienceOption"
                                        value="experienced"
                                        checked={experienceOption === 'experienced'}
                                        onChange={() => setExperienceOption('experienced')}
                                    />
                                    {/* non-breaking space  */}
                                    &nbsp;  Experience
                                </label> <br></br>
                                <label>
                                    <input
                                        type="radio"
                                        name="experienceOption"
                                        value="fresher"
                                        checked={experienceOption === 'fresher'}
                                        onChange={() => setExperienceOption('fresher')}
                                    />
                                    &nbsp; Fresher
                                </label>
                            </Grid>
                            {experienceOption === 'experienced' && (
                                <>
                                    {/* Number of Companies */}
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="Number of Companies"
                                            name="numberOfCompanies"
                                            type="number"
                                            value={professionalDetails.numberOfCompanies}
                                            onChange={(e) => handleProfessionalDetailsChange(e)}
                                            fullWidth
                                            margin="dense"
                                        />
                                    </Grid>

                                    {/* Company Details */}
                                    {Array.from({ length: Number(professionalDetails.numberOfCompanies) || 0 }).map(
                                        (_, index) => (
                                            <Grid item xs={12} key={index}>
                                                <Typography variant="subtitle1">Company {index + 1}</Typography>
                                                <TextField
                                                    label="Company Name"
                                                    name="companyName"
                                                    value={professionalDetails.companies[index]?.companyName || ''}
                                                    onChange={(e) => handleProfessionalDetailsChange(e, index)}
                                                    fullWidth
                                                    margin="dense"
                                                />
                                                <TextField
                                                    label="Position"
                                                    name="position"
                                                    value={professionalDetails.companies[index]?.position || ''}
                                                    onChange={(e) => handleProfessionalDetailsChange(e, index)}
                                                    fullWidth
                                                    margin="dense"
                                                />
                                                <TextField
                                                    label="Start Date"
                                                    name="startDate"
                                                    value={professionalDetails.companies[index]?.startDate || ''}
                                                    onChange={(e) => handleProfessionalDetailsChange(e, index)}
                                                    fullWidth
                                                    margin="dense"
                                                />
                                                <TextField
                                                    label="End Date"
                                                    name="endDate"
                                                    value={professionalDetails.companies[index]?.endDate || ''}
                                                    onChange={(e) => handleProfessionalDetailsChange(e, index)}
                                                    fullWidth
                                                    margin="dense"
                                                />

                                            </Grid>
                                        )
                                    )}
                                </>
                            )}
                        </Grid>
                    </AccordionDetails>
                </AccordionWrapper>
                {/* job preference */}
                <AccordionWrapper expanded={jobPreferenceExpanded} onChange={handlejobPreferenceExpand}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}> <Typography variant="h6">Job Preference</Typography></AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                {/* First Column */}
                                <TextField
                                    label="Key-skills"
                                    name="key_skills"
                                    value={jobPreference.key_skills}
                                    onChange={handlejobPreferenceChange}
                                    fullWidth
                                    margin="dense"
                                />
                                <TextField
                                    label="Industries"
                                    name="industries"
                                    value={jobPreference.industries}
                                    onChange={handlejobPreferenceChange}
                                    fullWidth
                                    margin="dense"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Department"
                                    name="department"
                                    value={jobPreference.department}
                                    onChange={handlejobPreferenceChange}
                                    fullWidth
                                    margin="dense"
                                />
                                <TextField
                                    label="Prefered locations"
                                    name="prefered_locations"
                                    value={jobPreference.prefered_locations}
                                    onChange={handlejobPreferenceChange}
                                    fullWidth
                                    margin="dense"
                                />
                            </Grid>

                        </Grid>

                    </AccordionDetails>
                </AccordionWrapper>

                {/* Resume Accordion */}
                <ResumeAccordionWrapper expanded={resumeExpanded} onChange={handleResumeExpand}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">Resume</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                {/* First Column */}
                                <label htmlFor="resume-input">Upload Resume:</label>
                                <Input
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleResumeChange}
                                    margin="dense"
                                    id="resume-input"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                {/* Second Column */}
                                {resume && (
                                    <div>
                                        <Typography variant="subtitle1">Uploaded Resume:</Typography>
                                        <Typography>{resume.name}</Typography>
                                        <Button color="secondary" onClick={handleRemoveResume}>
                                            Remove Resume
                                        </Button>
                                    </div>
                                )}
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </ResumeAccordionWrapper>
                {/* Submit Button */}
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit
                </Button>
            </form>
        </FormContainer>
    );
};

export default UserForm;








