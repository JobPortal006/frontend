import React, { useState } from 'react';
import {
     Grid, TextField, FormControlLabel, Checkbox, FormGroup
} from '@material-ui/core';




const Myform2 = () => {

    const [fresher, setFresher] = useState(Boolean);
    const [experienced, setExperienced] = useState(Boolean);
    const [twelfthChecked, setTwelfthChecked] = useState(false);

    const handleCheckFresher = (e) => {
        if (fresher === true) {
            setExperienced(false)
        } else {
            setFresher(true)
        }
    }
    const handleCheckExperienced = (e) => {
        if (experienced === true) {
            setFresher(false)
        } else {
            setExperienced(true)
        }

    }
  return (
    <div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <FormGroup>
                        <FormControlLabel
                            checked={fresher}
                            control={<Checkbox />}
                            label="Fresher"
                            onChange={handleCheckFresher}
                        />
                    </FormGroup>

                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        checked={experienced}
                        control={<Checkbox />}
                        label="Experienced"
                        onChange={handleCheckExperienced}
                    />
                </Grid>
                {fresher === true ? (
                    <>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="10th Percentage" type="number" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControlLabel
                                control={<Checkbox onChange={(e) => setTwelfthChecked(e.target.checked)} />}
                                label="12th"
                                checked={twelfthChecked}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {twelfthChecked ? (
                                <TextField fullWidth label="12th Percentage" type="number" />
                            ) : (
                                <TextField fullWidth label="Diploma Percentage" type="number" />
                            )}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="College Name" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Department" />
                        </Grid>
                    </>
                ) : ""}
                {experienced && (
                    <>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Years of Experience" type="number" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Previous Company Name" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Previous Role" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField fullWidth label="Department" />
                        </Grid>
                    </>
                )}
            </Grid>
        </div>
  )
}

export default Myform2;