import React, { useState, useEffect } from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "../sprint 2/filter.css";
const Filter = () => {
  const [showAll, setShowAll] = useState(false);
  //   const [selectedOptions, setSelectedOptions] = useState([]);

  const experienceOptions = [
    "0-1 year",
    "1-2 years",
    "2-3 years",
    "3-4 years",
    "4-5 years",
    "5-6 years",
    "6-7 years",
    "7-8 years",
    "8-9 years",
    "9-10 years",
    "11-13 years",
    "14-16 years",
    "17-19 years",
    "20-22 years",
    "23-25 years",
    "26-28 years",
    "29-30 years",
    "30+ years",
  ];

  const employmentType = [
    "Full Time",
    "Part Time",
    "Hybrid",
    "Temporary",
    "InternShip",
  ];

  const salaryType = [
    "Less than 2 LPA",
    "2 - 4 LPA",
    "4 - 6 LPA",
    "6 - 8 LPA",
    "8 - 10 LPA",
    "11 - 14 LPA",
    "15 - 18 LPA",
    "19 - 22 LPA",
    "23 - 26 LPA",
    "27 - 30 LPA",
    "More than  30 LPA",
  ];

  const renderOptions = showAll
    ? experienceOptions
    : experienceOptions.slice(0, 5);

  const render = showAll ? salaryType : salaryType.slice(0, 5);

  //   const handleOptionClick = (option) => {
  //     const newSelectedOptions = selectedOptions.includes(option)
  //       ? selectedOptions.filter((selectedOption) => selectedOption !== option)
  //       : [...selectedOptions, option];
  //     setSelectedOptions(newSelectedOptions);
  //     console.log('Selected options:', newSelectedOptions);
  //   };

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.1.38:8000/location/");
        if (!response) {
          console.error("Failed to fetch locations");
        }
        const data = await response.json();
        console.log(data, "<====Location====>");
        setLocations(
          data.map((location) => ({ ...location, selected: false }))
        );
      } catch (error) {
        console.error("Error fetching locations:", error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(
      "Selected locations:",
      locations.filter((location) => location.selected)
    );
  }, [locations]);

  const handleLocationClick = (index) => {
    const newLocations = [...locations];
    newLocations[index].selected = !newLocations[index].selected;
    setLocations(newLocations);
  };

  const [selectedEmploymentType, setSelectedEmploymentType] = useState("");

  const handleEmploymentTypeChange = (event) => {
    setSelectedEmploymentType(event.target.value);
    console.log("Selected employment type:", event.target.value);
  };

  const [jobRoles, setJobRoles] = useState([]);

  useEffect(() => {
    const fetchJobRoles = async () => {
      try {
        const response = await fetch("http://192.168.1.38:8000/job_role/");
        if (!response.ok) {
          console.error("Failed to fetch job roles");
          return;
        }
        const data = await response.json();
        console.log(data, "<====Roles====>");
        setJobRoles(data.map((role) => ({ ...role, selected: false })));
      } catch (error) {
        console.error("Error fetching job roles:", error.message);
      }
    };

    fetchJobRoles();
  }, []);

  useEffect(() => {
    console.log(
      "Selected job roles:",
      jobRoles.filter((role) => role.selected)
    );
  }, [jobRoles]);

  const handleRoleClick = (index) => {
    const updatedRoles = [...jobRoles];
    updatedRoles[index].selected = !updatedRoles[index].selected;
    setJobRoles(updatedRoles);
  };

  const [selectedSalaryType, setSelectedSalaryType] = useState("");

  const handleSalaryTypeChange = (event) => {
    setSelectedSalaryType(event.target.value);
    console.log("Selected salary type:", event.target.value);
  };

  return (
    <div style={{ width: "30%", marginLeft: "1rem" }}>
      <div>
        <h1>Filter</h1>
        <h3>Experience level</h3>
        <div>
          <FormGroup>
            <Grid container >
              {renderOptions.map((option, index) => (
                <Grid item xs={6} key={index}>
                  {" "}
                  {/* Divide into two columns */}
                  <div style={{ marginLeft: "1.5rem" }}>
                    <FormControlLabel control={<Checkbox />} label={option} />
                  </div>
                </Grid>
              ))}
            </Grid>
          </FormGroup>
        </div>
        {experienceOptions.length > 5 && (
          <IconButton
            onClick={() => setShowAll(!showAll)}
            color="primary"
            sx={{ fontSize: 15 }}
          >
            {showAll ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            {showAll ? "Hide" : "Show More"}
          </IconButton>
        )}
      </div>
      <div>
        <h3>Locations</h3>
        <Box sx={{ width:"80%", height: 300, overflow: "auto" }}>
          <List>
            {locations.map((location, index) => (
              <ListItemButton
                key={index}
                onClick={() => handleLocationClick(index)}
              >
                <Checkbox checked={location.selected} />
                <ListItemText primary={location.location} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </div>

      <div >
        <h3> Employment Type </h3>
        
        <FormGroup>
          <RadioGroup
            style={{ marginLeft: "1rem" }}
            name="employment-type"
            value={selectedEmploymentType}
            onChange={handleEmploymentTypeChange}
            defaultValue=""
          >
            {employmentType.map((type, index) => (
              <FormControlLabel
                key={index}
                value={type}
                control={<Radio />}
                label={type}
              />
            ))}
          </RadioGroup>
        </FormGroup>
        
      </div>

      <div>
        <h3>Job Roles</h3>
        <Box sx={{width:"80%", height: 300, overflow: "auto" }}>
          <List>
            {jobRoles.map((role, index) => (
              <ListItemButton
                key={index}
                onClick={() => handleRoleClick(index)}
              >
                <Checkbox checked={role.selected} />
                <ListItemText primary={role.role} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </div>

      <div>
        <h3>Salary Range</h3>
        <RadioGroup
          style={{ marginLeft: "1rem" }}
          name="salary-type"
          value={selectedSalaryType}
          onChange={handleSalaryTypeChange}
        >
          {render.map((type, index) => (
            <FormControlLabel
              key={index}
              value={type}
              control={<Radio />}
              label={type}
            />
          ))}
        </RadioGroup>
        {salaryType.length > 5 && (
          <IconButton
            onClick={() => setShowAll(!showAll)}
            color="primary"
            sx={{ fontSize: 15 }}
          >
            {showAll ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            {showAll ? "Hide" : "Show More"}
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default Filter;
