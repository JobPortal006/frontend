import React from 'react';
import { Typography, Paper, Grid } from '@mui/material';
import YourImage from './Login Image/JL logo design.jpg'; // Adjust the path accordingly
import SearchBar from './searchBar';

const Home1 = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h4" gutterBottom>
             Heading
             <SearchBar />
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Paper
            elevation={3}
            style={{
              padding: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={YourImage}
              alt="Your Image"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                borderRadius: '10px', // Example: Add border-radius for a rounded look
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Example: Add a subtle shadow
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home1;
