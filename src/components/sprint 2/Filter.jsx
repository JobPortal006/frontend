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

  const renderOptions = showAll
    ? experienceOptions
    : experienceOptions.slice(0, 5);

  //   const handleOptionClick = (option) => {
  //     const newSelectedOptions = selectedOptions.includes(option)
  //       ? selectedOptions.filter((selectedOption) => selectedOption !== option)
  //       : [...selectedOptions, option];
  //     setSelectedOptions(newSelectedOptions);
  //     console.log('Selected options:', newSelectedOptions);
  //   };

  useEffect(() => {
    console.log("Selected options:", renderOptions);
  }, [renderOptions]);

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.1.38:8000/location/");
        if (!response) {
          console.error("Failed to fetch locations");
        }
        const data = await response.json();
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

  return (
    <div style={{ width: "30%", marginLeft: "1rem" }}>
      <div>
        <h1>Filter</h1>
        <h3>Experience level</h3>
        <div>
          <FormGroup>
            <Grid container>
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
        <Box sx={{ height: 300, overflow: "auto" }}>
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

      <div>
      <h3 variant="h6">Employment Type</h3>
      <FormGroup>
        <RadioGroup name="employment-type" defaultValue="">
          {employmentType.map((type, index) => (
            <FormControlLabel key={index} value={type} control={<Radio />} label={type} />
          ))}
        </RadioGroup>
      </FormGroup>
    </div>
    </div>
  );
};

export default Filter;
