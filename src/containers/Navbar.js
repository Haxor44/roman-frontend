import {AppBar, styled,Toolbar,Typography,InputBase} from "@mui/material";
import React from "react";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})

const Search = styled("div")(({ theme }) =>({
  backgroundColor:"whitesmoke",
  padding:"0 30px",
  borderRadius:theme.shape.borderRadius,
  width:"40%",
  [theme.breakpoints.up("sm")]:{
    display:"flex",
  }
}));

const Icons = styled("box")(({ theme }) =>({
  display:"flex", 
  alignItems:"center",
  gap:"20px",
}));

const User = styled("box")(({ theme }) =>({
  display:"flex", 
  alignItems:"center",
  gap:"10px",
  [theme.breakpoints.up("sm")]:{
    display:"none",
  }
}));

const Navbar = () => {
  const [open,setOpen] = useState(false)
  return (
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography variant="h4" sx={{display:{xs:"none",sm:"block"}}}>RMS</Typography>
          <Search><InputBase placeholder="search..."/></Search>
          <Icons>
            <Badge badgeContent={4} color="primary">
                <MailIcon color="action" />
            </Badge>
             <Badge badgeContent={4} color="secondary">
                <NotificationsIcon color="action" />
            </Badge>
            <Avatar onClick={e=>setOpen(true)} sx={{width:30, height:30}} alt="USer"/>
          </Icons>
          <User onClick={e=>setOpen(true)}>
            <Avatar  sx={{width:30, height:30}} alt="USer"/>
          </User>
        </StyledToolbar>

          <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
        
      </AppBar>
    )
}

export default Navbar;