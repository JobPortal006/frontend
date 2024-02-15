import React, { useState, useEffect } from "react";
import './myJob.css';
import { Grid, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useLocation } from 'react-router-dom';


function MyJob() {
    const [jobView, setJobView] = useState([]);
    const [employee_id, setEmployeeId] = useState("");


    console.log(employee_id,"ididididid");
    console.log(jobView,"///////////");

    useEffect(() => { 
    async function fetchJobs() {
        try {
            const response = await fetch('http://192.168.1.38:8000/employer_post_jobs_view/');
            if (!response.ok) {
                throw new Error('Failed to fetch jobs');
            }
            const data = await response.json();
            console.log(data,'====================');

            if (data !== null) {
                setJobView(data);
                console.log(jobView,"qqqqqqqqqqqq");
            } else {
                console.error('Invalid data format received from API');
            }
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    }
    fetchJobs();
}, []);

    const location = useLocation();
    
    useEffect(() => {
        if (location.state && location.state.id) {
            const id = location.state.id;
            setEmployeeId(id);

            // Function to post id data to API
            async function postID() {
                try {
                    const response = await fetch('http://192.168.1.38:8000/employer_post_jobs/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ employee_id: id }),
                    });
                    if (!response.ok) {
                        throw new Error('Failed to post id data to API');
                    }
                    console.log('ID data posted successfully:', id);
                } catch (error) {
                    console.error('Error posting id data to API:', error);
                }
            }

            // Call the function to post id data
            postID();
        }
    }, [location.state]);
   return(
    <div>
    {location.state.id}
    <h1>My Job</h1>
    
        <Grid  container alignItems="center" justifyContent="space-between" className="job-container">
          <Grid item xs={3}>
            <div>
              <h1 className="title">Title</h1>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <h3 className="location">Location</h3>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <h3 className="date">Date</h3>
            </div>
          </Grid>
          <Grid item xs={3}>
            <IconButton style={{ color: '#666' }} >
              <MoreVertIcon />
            </IconButton>
          </Grid>
        </Grid>
       
        {jobView.map((job, index)=>(
        <Grid key={index}  container alignItems="center" justifyContent="space-between" className="job-container">
      
          <Grid item xs={3}>
            <div>
              <h1 className="title">{job.job_title}</h1>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <h3 className="location">{job.location}</h3>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <h3 className="date">{job.created_at}</h3>
            </div>
          </Grid>
          <Grid item xs={3}>
            <IconButton style={{ color: '#666' }} >
              <MoreVertIcon />
            </IconButton>
          </Grid>
         
        </Grid>
        ))}
    </div>
   )
}

export default MyJob;
