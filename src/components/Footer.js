import { Box, Typography, styled, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "@mui/icons-material/";
import CallRoundedIcon from '@mui/icons-material/CallRounded';

const SocialBox = styled(Box)({
  display: "flex",
  gap: 10,
  color: "white",
});

const Footer = () => {

  const navigate = useNavigate();

  return (
    <Box sx={{  backgroundColor: "#26201d", width: '100%', marginTop: "20px"}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <Box marginTop="20px">
          <Typography color={"white"} fontSize={"20px"} align={'center'}>
            Tank Automation
          </Typography>
          <Typography color={"white"} align={"center"} padding={"5px"}>
          This project focuses primarily on optimizing water use and to save energy and our natural resources. It aims to help assess the water level inside the water tank and display it accordingly on the screen while preventing any water overflow which is achieved through the controller. All things are connected
through an app that makes the whole process much more efficient and easier to manage.
          </Typography>
        </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box marginTop="20px">
          <Typography color={"white"} variant={"h6"} align={"center"}>
            Quick Links
          </Typography>
          <Typography color={"white"} fontSize={"15px"} margin={'5px'} variant={"body2"} align={"center"}>
            Home 
          </Typography>
          <Typography color={"white"} fontSize={"15px"} margin={'5px'} variant={"body2"} align={"center"}>
            About Us
          </Typography>
          <Typography color={"white"} fontSize={"15px"} margin={'5px'} variant={"body2"} align={"center"}>
            Contact
          </Typography>
          <Typography color={"white"} fontSize={"15px"} margin={'5px'} variant={"body2"} align={"center"}>
            Admin
          </Typography>
          <Typography color={"white"} fontSize={"15px"} variant={"body2"} align={"center"}>
            User
          </Typography>
        </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box marginTop="20px">
          <Typography color={"white"} align={"center"} marginBottom="10px">
            Follow Us
          </Typography>
          <SocialBox style={{justifyContent: "center", textalign: "center"}}>
            <Facebook />
            <Instagram />
            <Twitter />
          </SocialBox>
          <Typography color={"white"} align={"center"} marginTop="30px">
            Contact Us
          </Typography>
            
          <Typography style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: 'wrap',
          color: "white", 
          marginTop: "15px",}} >
            <CallRoundedIcon /> 
            <span>8849164949</span>
          </Typography>
        </Box>
        </Grid>
      </Grid>
      {/* #503118 */}
      <Box sx={{  backgroundColor: "#503118", width: '100%', marginTop: "20px"}}>
      <Typography color={"white"} align={"center"}>
            Copyright &copy; {new Date().getFullYear()} All Rights Reserved by Tank Automation
      </Typography>
      </Box>
    </Box>
    
  );
};

export default Footer;
