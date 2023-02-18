import React from 'react'
import { Grid, Paper, Typography, TextField, Button } from '@mui/material'
import { Radio, RadioGroup, FormControl, FormLabel, Checkbox } from '@mui/material';
import FormControlLabel from "@mui/material/FormControlLabel";

const finalLogin = () => {
    const paperStyle = { padding: 20, height: '100%',width: '100%', margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const marginTop = { marginTop: 5 }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField margin='normal' fullWidth label='Name' placeholder="Enter your name" />
                    <TextField margin='normal' fullWidth label='Email' placeholder="Enter your email" />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField margin='normal' fullWidth label='Phone Number' placeholder="Enter your phone number" />
                    <TextField margin='normal' fullWidth label='Password' placeholder="Enter your password"/>
                    <TextField margin='normal' fullWidth label='Confirm Password' placeholder="Confirm your password"/>
                    <FormControlLabel
                        control={<Checkbox name="checked" />}
                        label="I accept the terms and conditions."
                    />
                    <Button margin='8px 0' type='submit' color='primary' variant="contained" fullWidth>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default finalLogin;