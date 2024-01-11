import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, Paper } from '@material-ui/core';
import MyForm from './myform3';
import Myform2 from './Myform2';
import Myform1 from './Myform1';

const RegistrationForm = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const steps = ['Step 1', 'Step 2', 'Step 3'];

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <Step1 />;
            case 1:
                return <Step2 />;
            case 2:
                return <Step3 />;
            default:
                return 'Unknown step';
        }
    };



    const Step1 = () => (
        <div>
            <Myform1 />
        </div>
    );

    const Step2 = () => (
        <div>
            <Myform2 />
        </div>
    );

    const Step3 = () => (
        <div>
            <MyForm />
        </div>

    );

    return (
        <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>

            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography>All steps completed - you're finished</Typography>
                    </div>
                ) : (
                    <div>
                        {getStepContent(activeStep)}
                        <div style={{ marginTop: '20px' }}>
                            <Button disabled={activeStep === 0} onClick={handleBack}>
                                Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </Paper>
    );
};

export default RegistrationForm;
