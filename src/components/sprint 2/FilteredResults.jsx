import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faMoneyBillAlt, faUser, faTools, faBuilding } from "@fortawesome/free-solid-svg-icons";


const FilteredResults = ({ location }) => {

    const { filtered } = location;
    console.log(filtered);

  // State to hold the fetched data
  const [filteredData, setFilteredData] = useState([]);

  console.log(filteredData, "this is filtered data");

  // Function to Post data to the API


  return (
    <div className="job-container">
      <h1>Filtered Page</h1>
      {filtered && filtered.map((job, index) => (
        <div key={index} className="job-card">
          <p>{job.location}</p>
        </div>
      ))}
    </div>
  );
};


export default FilteredResults;
