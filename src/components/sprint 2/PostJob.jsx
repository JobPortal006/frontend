import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Autocomplete } from "@mui/material";
import axios from "axios";

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

  const [jobPost, setJobPost] = useState({
    company_name:"",
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

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const jobPostData = {
      ...jobPost,
      employee_type: employment,
      job_category: jobCategory,
      skill_set: skills,
    };
    console.log(jobPostData);


    let headers = new Headers();
   
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Origin", "http://192.168.1.38:8000/job_post/");
    const apiUrl = "http://192.168.1.38:8000/job_post/";

    try{
        const response = await axios.post(apiUrl, jobPostData, headers);
        console.log(response, "post JobData ===>");
        console.log(response.data.status,  "Job Post Status==========>");

        if(response.data.status === true){
            console.log('Job posted Successfully');
            window.location.reload();

            alert('Job posted Successfully');
           
        }else{
            console.log('Error in posting the Job')
        }

       

    }catch(error){
        console.log(error);
    }


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
            noValidate="false"
            style={{ marginTop: "1rem" }}
           
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
              value={jobPost.company_name}
              onChange={(e) =>
                setJobPost({ ...jobPost, company_name: e.target.value })
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
              value={jobPost.job_title}
              onChange={(e) =>
                setJobPost({ ...jobPost, job_title: e.target.value })
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
              value={jobPost.job_description}
              onChange={(e) =>
                setJobPost({ ...jobPost, job_description: e.target.value })
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
              value={jobPost.location}
              onChange={(e)=> setJobPost({...jobPost, location:e.target.value})}
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
              renderInput={(para) => <TextField {...para} label="Skills" />}
            />
            <br />
            <label>Qualification*</label>
            <TextField
              margin="normal"
              fullWidth
              id="job-qualification"
              label="Qualification"
              name="Qualification"
              value={jobPost.qualification}
              onChange={(e)=>setJobPost({...jobPost, qualification : e.target.value})}
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
                  value={jobPost.experience}
                  onChange={(e)=>setJobPost({...jobPost, experience:e.target.value})}
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
                  value={jobPost.no_of_vacancies}
                  onChange={(e)=> setJobPost({...jobPost, no_of_vacancies : e.target.value})}
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
                  value={jobPost.salary_range}
                  onChange={(e)=>setJobPost({...jobPost, salary_range:e.target.value})}
                />
              </Grid>
            </Grid>
            <br />
            <div>
              <Button variant="contained" color="secondary" onClick={handleSubmit}>
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



