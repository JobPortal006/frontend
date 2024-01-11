import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';

import {
     Typography, Grid, Radio,
    RadioGroup,
} from '@material-ui/core';
const MyForm = () => {
   
    const [willingToRelocate, setWillingToRelocate] = useState('');
    const [formData, setFormData] = useState({
        relocate: "",
        notRelocate: ""
    });


    const handleFormData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleRelocateChange = (event) => {
        setWillingToRelocate(event.target.value);
    };
   

    return (

        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <form>
                        <RadioGroup
                            aria-label="willingToRelocate"
                            name="willingToRelocate"
                            value={willingToRelocate}
                            onChange={handleRelocateChange}
                        >

                            <FormControlLabel
                                value="yes"
                                control={<Radio />}
                                label="Willing to relocate (Yes)"
                            />
                            <FormControlLabel
                                value="no"
                                control={<Radio />}
                                label="Not willing to relocate (No)"
                            />
                           
                        </RadioGroup>
                    </form>

                </Grid>



                <Grid item xs={12} sm={6}>
                    <Typography>Resume upload:</Typography>
                    <input type="file" accept="pdf/*" />
                </Grid>
                <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Desired job title" name="relocate" value={formData.relocate} onChange={handleFormData} />

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Location Preference" name="notRelocate" value={formData.locationPreference} onChange={handleFormData} />
                            </Grid>
            </Grid>

        </div>
    );
};

export default MyForm;
