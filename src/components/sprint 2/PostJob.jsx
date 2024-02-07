// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import { Autocomplete } from "@mui/material";

// const PostJob = () => {
//   const employmentType = [
//     "Full Time",
//     "Part Time",
//     "Hybrid",
//     "Temporary",
//     "InternShip",
//   ];

//   const jobCategories = [
//     "Engineering",
//     "Marketing",
//     "Sales",
//     "Finance",
//     "Operations",
//   ];
//   const jobSkills = [
//     "JavaScript",
//     "React",
//     "Node.js",
//     "HTML",
//     "CSS",
//     "Python",
//     "Java",
//     "SQL",
//   ];

//   const [postJob, setJobPost] = {
//     job_title: "",
//     job_description: "",
//     employee_type: "",
//     job_category: "",
//     location: "",
//     skill_set: "",
//     qualification: "",
//     experience: "",
//     salary_range: "",
//     no_of_vacancies: "",
//   };

//   const [employment, setEmployment] = useState("");
//   console.log(employment);
//   const [jobCategory, setJobCategory] = useState("");
//   console.log(jobCategory);
//   const [skills, setSkills] = useState([]);
//   console.log(skills);

//   const Submit =async (e) =>{
// e.preventDefault()

// const jobData = {
//     postJob
// }
//   }

//   return (
//     <div>
//       <Container
//         component="main"
//         style={{ width: "80%", marginBottom: "10rem" }}
//       >
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 10,
//             display: "flex",
//             flexDirection: "column",
//           }}
//         >
//           <Box component="form" noValidate style={{ marginTop: "1rem" }}>
//             <h3>Job Details</h3>
//             <br />
//             <label>Company Name*</label>
//             <br />
// <form onChange={Submit}>
//             <TextField
//               margin="normal"
//               fullWidth
//               id="company-name"
//               label="Company Name"
//               name="Company Name"
//               value={postJob.job_title}
//             />
//             <br />
//             <br />

//             <label>Job Title*</label>
//             <br />

//             <TextField
//               margin="normal"
//               fullWidth
//               id="job-title"
//               label="Job Title"
//               name="Job Title"
//             />

//             <p style={{ marginTop: "1rem" }}>Job Description*</p>
//             <TextField
//               margin="normal"
//               fullWidth
//               name="Job Description"
//               label="Job Description"
//               type="text"
//               id="job-description"
//               multiline
//               rows={4}
//             />

//             <Grid container spacing={2} sx={{ mt: 1 }}>
//               <Grid item xs={12} sm={6} md={6} xl={6} xxl={6}>
//                 <label>Employment Type*</label>

//                 <Autocomplete
//                   sx={{ mt: 2 }}
//                   options={employmentType}
//                   value={employment}
//                   onChange={(event, newValue) => {
//                     setEmployment(newValue);
//                   }}
//                   renderInput={(text) => (
//                     <TextField {...text} label="Employment Type" />
//                   )}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6} md={6} xl={6} xxl={6}>
//                 <label>Job Category*</label>
//                 <Autocomplete
//                   sx={{ mt: 2 }}
//                   options={jobCategories}
//                   value={jobCategory}
//                   onChange={(event, newValue) => {
//                     setJobCategory(newValue);
//                   }}
//                   renderInput={(job) => (
//                     <TextField {...job} label="Job Category" />
//                   )}
//                 />
//               </Grid>
//             </Grid>
//             <br />
//             <label>Location*</label>
//             <br />

//             <TextField
//               margin="normal"
//               fullWidth
//               id="job-location"
//               label="Location"
//               name="Location"
//             />
//             <br />
//             <br />
//             <label>Skills*</label>
//             <br />
//             <br />
//             <Autocomplete
//               multiple
//               options={jobSkills}
//               value={skills}
//               onChange={(event, newEvent) => {
//                 setSkills(newEvent);
//               }}
//               renderInput={(params) => <TextField {...params} label="Skills" />}
//             />
//             <br />
//             <label>Qualification*</label>
//             <TextField
//               margin="normal"
//               fullWidth
//               id="job-qualification"
//               label="Qualification"
//               name="Qualification"
//             />

//             <Grid container spacing={2} sx={{ mt: 1 }}>
//               <Grid item xs={4} sm={4} md={4} xl={4} xxl={4}>
//                 <label>Experience*</label>
//                 <TextField
//                   margin="normal"
//                   fullWidth
//                   id="job-experience"
//                   label="Experience"
//                   name="Experience"
//                 />
//               </Grid>
//               <Grid item xs={4} sm={4} md={4} xl={4} xxl={4}>
//                 <label>No.of.Vacancies*</label>
//                 <TextField
//                   fullWidth
//                   margin="normal"
//                   id="job-vacancy"
//                   label="Vacancy"
//                   name="Vacancy"
//                 />
//               </Grid>
//               <Grid item xs={4} sm={4} md={4} xl={4} xxl={4}>
//                 <label>Salary Range*</label>
//                 <TextField
//                   fullWidth
//                   margin="normal"
//                   id="job-salary"
//                   label="Salary Range"
//                   name="Salary Range"
//                 />
//               </Grid>
//             </Grid>
//             <br />
//             <div>
//               <Button variant="contained" color="secondary" type="submit">
//                 Submit
//               </Button>
//             </div>
//             </form>
//           </Box>
//         </Box>
//       </Container>
//     </div>
//   );
// };

// export default PostJob;

import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Autocomplete } from "@mui/material";

const PostJob = () => {
  const employmentType = [
    "Full Time",
    "Part Time",
    "Hybrid",
    "Temporary",
    "InternShip",
  ];

  const jobCategories = [
    "Engineering",
    "Marketing",
    "Sales",
    "Finance",
    "Operations",
  ];

  const jobSkills = [
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "Python",
    "Java",
    "SQL",
  ];

  const [postJob, setJobPost] = useState({
    job_title: "",
    job_description: "",
    employee_type: "",
    job_category: "",
    location: "",
    skill_set: [],
    qualification: "",
    experience: "",
    salary_range: "",
    no_of_vacancies: "",
  });

  const [employment, setEmployment] = useState("");
  const [jobCategory, setJobCategory] = useState("");
  const [skills, setSkills] = useState([]);


  const handleSubmit = (event) => {
    event.preventDefault();
    const jobData = {
      ...postJob,
      employee_type: employment,
      job_category: jobCategory,
      skill_set: skills,
    };
    console.log(jobData);
    // Perform any action with formData, such as sending it to a server
  };

  return (
    <div>
      <Container
        component="main"
        style={{ width: "80%", marginBottom: "10rem" }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            component="form"
            noValidate
            style={{ marginTop: "1rem" }}
            onSubmit={handleSubmit}
          >
            <h3>Job Details</h3>
            <br />
            <label>Company Name*</label>
            <br />
            <TextField
              margin="normal"
              fullWidth
              id="company-name"
              label="Company Name"
              name="Company Name"
              value={postJob.job_title}
              onChange={(e) =>
                setJobPost({ ...postJob, job_title: e.target.value })
              }
            />
            <br />
            <br />

            <label>Job Title*</label>
            <br />

            <TextField
              margin="normal"
              fullWidth
              id="job-title"
              label="Job Title"
              name="Job Title"
              value={postJob.job_description}
              onChange={(e) =>
                setJobPost({ ...postJob, job_description: e.target.value })
              }
            />

            <p style={{ marginTop: "1rem" }}>Job Description*</p>
            <TextField
              margin="normal"
              fullWidth
              name="Job Description"
              label="Job Description"
              type="text"
              id="job-description"
              multiline
              rows={4}
              value={postJob.job_description}
              onChange={(e) =>
                setJobPost({ ...postJob, job_description: e.target.value })
              }
            />

            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={6} md={6} xl={6} xxl={6}>
                <label>Employment Type*</label>

                <Autocomplete
                  sx={{ mt: 2 }}
                  options={employmentType}
                  value={employment}
                  onChange={(event, newValue) => {
                    setEmployment(newValue);
                  }}
                  renderInput={(text) => (
                    <TextField {...text} label="Employment Type" />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} xl={6} xxl={6}>
                <label>Job Category*</label>
                <Autocomplete
                  sx={{ mt: 2 }}
                  options={jobCategories}
                  value={jobCategory}
                  onChange={(event, newValue) => {
                    setJobCategory(newValue);
                  }}
                  renderInput={(job) => (
                    <TextField {...job} label="Job Category" />
                  )}
                />
              </Grid>
            </Grid>
            <br />
            <label>Location*</label>
            <br />

            <TextField
              margin="normal"
              fullWidth
              id="job-location"
              label="Location"
              name="Location"
            />
            <br />
            <br />
            <label>Skills*</label>
            <br />
            <br />
            <Autocomplete
              multiple
              options={jobSkills}
              value={skills}
              onChange={(event, newEvent) => {
                setSkills(newEvent);
              }}
              renderInput={(params) => <TextField {...params} label="Skills" />}
            />
            <br />
            <label>Qualification*</label>
            <TextField
              margin="normal"
              fullWidth
              id="job-qualification"
              label="Qualification"
              name="Qualification"
            />

            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={4} sm={4} md={4} xl={4} xxl={4}>
                <label>Experience*</label>
                <TextField
                  margin="normal"
                  fullWidth
                  id="job-experience"
                  label="Experience"
                  name="Experience"
                />
              </Grid>
              <Grid item xs={4} sm={4} md={4} xl={4} xxl={4}>
                <label>No.of.Vacancies*</label>
                <TextField
                  fullWidth
                  margin="normal"
                  id="job-vacancy"
                  label="Vacancy"
                  name="Vacancy"
                />
              </Grid>
              <Grid item xs={4} sm={4} md={4} xl={4} xxl={4}>
                <label>Salary Range*</label>
                <TextField
                  fullWidth
                  margin="normal"
                  id="job-salary"
                  label="Salary Range"
                  name="Salary Range"
                />
              </Grid>
            </Grid>
            <br />
            <div>
              <Button variant="contained" color="secondary" type="submit">
                Submit
              </Button>
            </div>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default PostJob;
