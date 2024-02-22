import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faMoneyBillAlt, faUser, faTools, faBuilding } from "@fortawesome/free-solid-svg-icons";
import "../sprint 2/FIlteredResults.css";

const FilteredResults = () => {


  // Function to fetch data from the API

  const [filterData, setFilterData] = useState([]);
  console.log(filterData, "this is filtered data");

  useEffect(() => {
    const fetchJobRoles = async () => {
      try {
        const response = await fetch("http://192.168.1.57:8000/filter_select_jobs/");
        if (!response.ok) {
          console.error("Failed to fetch Filtered Data");
          return;
        }else{
          
        }
        const data = await response.json();
        console.log(data, "<====Filtered Data====>");
        setFilterData(data);
      } catch (error) {
        console.error("Error fetching job roles:", error.message);
      }
    };

    fetchJobRoles();
  }, []);
  console.log("Type of filteredData:", typeof filteredData);



  return (
    <div className="job-container">
   <h1>Filtered Results</h1>
    {filterData && filterData.map((job, index) => (
        <div key={index} className="job-card" >
            <div className="job-header">
                <div className="job-title">{job.job_title}</div>
                <div className="company-name">{job.company_name}</div>
            </div>
            <div className="job-details">
                <div className="detail">
                    <span className="detail-label"><FontAwesomeIcon icon={faMapMarkerAlt} /> Location:</span> {job.location}
                </div>
                <div className="detail">
                    <span className="detail-label"><FontAwesomeIcon icon={faMoneyBillAlt} /> Salary:</span> {job.salary_range}
                </div>
                <div className="detail">
                    <span className="detail-label"><FontAwesomeIcon icon={faUser} /> Job Type:</span> {job.employee_type}
                </div>
                <div className="detail">
                    <span className="detail-label"><FontAwesomeIcon icon={faTools} /> Qualification:</span> {job.job_role}
                </div>
                <div className="detail">
                    <span className="detail-label"><FontAwesomeIcon icon={faUser} /> Experience:</span> {job.experience}
                </div>
                <div className="detail">
                    <span className="detail-label"><FontAwesomeIcon icon={faBuilding} /> Vacancies:</span> {job.no_of_vacancies}
                </div>
                <div className="detail">
                    <span className="detail-label"><FontAwesomeIcon icon={faTools} /> Skills:</span> {job.skills ? job.skills.join(', ') : ''}
                </div>
            </div>
        </div>
    ))}
</div>
  );
};


export default FilteredResults;
