import { AppBar, Box, Toolbar, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { NavLink } from 'react-router-dom';
import DrawerComp from '../components/DrawerComp';
import logo from '../images/logo4.png'

const Navbar = () => {

  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: '#503118'}}>
        <Toolbar>
          {isMatch ? 
          (
            <>
            <img src={logo} alt='logo' width={"70"} height={"50"} />
            <Typography sx={{ paddingLeft: "2%", paddingTop: "5px" }} variant='h5' component="div">
                Tank Automation
              </Typography>
              <DrawerComp />
            </>
          ) : 
          (
            <>
            <img src={logo} alt='logo' width={"80"} height={"70"} />
            <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>Tank-Automation</Typography >
  
            <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? '#26201d' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Home</Button>
  
            <Button component={NavLink} to='/contact' style={({ isActive }) => { return { backgroundColor: isActive ? '#26201d' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Contact</Button>
  
            <Button component={NavLink} to='/login' style={({ isActive }) => { return { backgroundColor: isActive ? '#26201d' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>Admin</Button>
            
            <Button component={NavLink} to='/logreg' style={({ isActive }) => { return { backgroundColor: isActive ? '#26201d' : '' } }} sx={{ color: 'white', textTransform: 'none' }}>User</Button>
            </>
            )}
            
        </Toolbar>
      </AppBar>
    </Box>
  </>;
};

export default Navbar;
