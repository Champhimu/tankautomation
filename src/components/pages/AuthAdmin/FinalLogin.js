import React from "react";
import { Button, Grid, TextField, Paper, Typography, Link, Box } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const FinalRegister = ({handleChange}) => {
    const paperStyle={padding :30,height:'80vh',width:500, margin:"0 auto"}
    const btnstyle={margin:'8px 0'}

  return (
      <Grid style={{marginTop: "15px"}}>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <h2>Sign In</h2>
                </Grid>
                <Box component='form' noValidate  id='login-form'>
                <TextField margin='normal' label='Username' name='username' placeholder='Enter username' fullWidth required/>
                <TextField margin='normal' label='Password' name='password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checked"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                 </Box>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link to="/sendpasswordresetemail" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link to="#" onClick={()=>handleChange("event",1)}>
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
  )
}

export default FinalRegister;
