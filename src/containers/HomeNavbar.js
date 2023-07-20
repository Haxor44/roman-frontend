import * as React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';




const HomeNavbar = () => {
  return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            RMS
          </Typography>
          <Button color="inherit"><Link  to="/">Home</Link></Button>
          <Button color="inherit"><Link  to="/login">Login</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default HomeNavbar;