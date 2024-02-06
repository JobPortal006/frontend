import React, { useState, useEffect } from "react";
import jobsData from "./jobdata.json"; 
import './JobPostSampleStyle.css' 

function JobPostSample() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Set the state with the imported JSON data
    setJobs(jobsData);
  }, []);

  return (
    <div className="job-container">
    {jobs.map((job) => (
      <div key={job.id} className="job-card">
        <div className="job-title">{job.title}</div>
        <div className="job-details">
          <div className="detail">
            <span className="detail-label">Job Type:</span> {job.type}
          </div>
          <div className="detail">
            <span className="detail-label">Location:</span> {job.location}
          </div>
          <div className="detail">
            <span className="detail-label">Qualification:</span> {job.qualification}
          </div>
          <div className="detail">
            <span className="detail-label">Experience:</span> {job.experience}
          </div>
          <div className="detail">
            <span className="detail-label">Salary:</span> {job.salary}
          </div>
          <div className="detail">
            <span className="detail-label">Vacancies:</span> {job.vacancies}
          </div>
          <div className="detail">
            <span className="detail-label">Company:</span> {job.company}
          </div>
        </div>
      </div>
    ))}
  </div>
  

  );
}

export default JobPostSample;
