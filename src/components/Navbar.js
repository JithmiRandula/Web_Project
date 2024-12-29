import {AppBar, Box, Toolbar, Typography, Button} from '@mui/material';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <Box sx={{flexGrow:1}}>
        <AppBar position="static" sx={{ backgroundColor: '#000000' }}>
          <Toolbar>
            <Typography variant='h5' component= "div" sx={{
              flexGrow:1}}>
                  Learn Academy
            </Typography>
            <Button component={NavLink} to='/' style={({ isActive}) => { return { backgroundColor: isActive ? '#6d1b7b' :''}}} sx={{ color:'white'}}>Home</Button>
            <Button component={NavLink} to='/contact' style={({ isActive}) => { return { backgroundColor: isActive ? '#6d1b7b' :''}}} sx={{ color:'white'}}>Contact</Button>
            <Button component={NavLink} to='/login' style={({ isActive}) => { return { backgroundColor: isActive ? '#6d1b7b' :''}}} sx={{ color:'white'}}>Login/Registration</Button>
          </Toolbar>
        </AppBar>

      </Box>


      
    </>
  )
}

export default Navbar
