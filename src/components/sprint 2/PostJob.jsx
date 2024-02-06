import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { MenuItem, Select } from "@mui/base";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

const employmentType = ["Full Time", "Part Time", "Hybrid", "Temporary", "InternShip"];

const PostJob = () => {
  return (
    <div>
      <Container component="main" style={{width:"80%"}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3>Job Details</h3>
          <Box component="form" noValidate style={{ marginTop: "1rem" }}>
            <label>Job Details*</label>
            <br />
            
              <TextField
                margin="normal"
                fullWidth
                id="job-title"
                label="Job Title"
                name="Job Title"
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
              />
              
             <Grid container spacing={2} sx={{mt:1}}>
             <Grid item xs={12} sm={6}>
             <label>Employment Type*</label>
             <Select>
             <TextField
             sx={{mt:2}}
               fullWidth
               margin="normal"
               name="Employment Type"
               id="employ-type"
               label="Employment Type"
             />
             {employmentType.map((employmentType, index)=>(
                <MenuItem key={index} value={employmentType}>

                </MenuItem>
             ))}
            </Select>
           </Grid>
           <Grid item xs={12} sm={6}>
           <label>Job Category*</label>

             <TextField
             sx={{mt:2}}
               fullWidth
               margin="normal"
               id="lastName"
               label="Job Category"
               name="Job Category"
             />
           </Grid>
             </Grid>
            
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default PostJob;
