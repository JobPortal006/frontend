import React, { useState } from 'react';
import {Typography, Grid, TextField} from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const Myform1 = () => {
    const [selectedDate, handleDateChange] = useState(new Date());
   
  return (
    <div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="First Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Last Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Email" type="email" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Gender" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Address" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Mobile Number" type="tel" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography>Profile Picture Upload:</Typography>
                    {/* File input for profile picture upload */}
                    <input type="file" accept="image/*" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <TextField
                            fullWidth
                            label="Date of Birth"
                            type="date"
                            defaultValue={selectedDate.toISOString().split('T')[0]}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => handleDateChange(new Date(e.target.value))}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>
            </Grid>
        </div>
  )
}

export default Myform1
