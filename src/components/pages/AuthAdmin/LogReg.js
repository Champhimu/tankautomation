import React, { useState } from 'react'
import { Paper, Tab, Tabs, Typography, Box,createTheme, Card, ThemeProvider  } from '@mui/material';
import Login from './FinalLogin';
import Signup from './FinalRegister'

const LogReg=()=>{

const [value,setValue]=useState(0)
const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle= {padding: 10, height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItem: 'center'}

  const theme = createTheme({
    breakpoints: {
      values: {
        xxs: 0, // small phone
        xs: 300, // phone
        sm: 600, // tablets
        md: 900, // small laptop
        lg: 1200, // desktop
        xl: 1536 // large screens
      }
    }
  });

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
    return (
      <ThemeProvider theme={theme}>
      <Paper style={paperStyle}>
        {/* {isMatch ?} */}
      <Card sx={{
        width: {
          sm: "100%",
          md: "30%",
        }
      }}>
          {/* <Box sx={{ mx: 2, height: '100%' }}> */}
          <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Sign In" />
         
          <Tab label="Sign Up" />
        </Tabs>
        <TabPanel value={value} index={0}>
       <Login handleChange={handleChange}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Signup/>
      </TabPanel>
          {/* </Box> */}
      </Card>
      </Paper>
      </ThemeProvider>
    )
}

export default LogReg;
