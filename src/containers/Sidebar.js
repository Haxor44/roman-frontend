import React from "react";
import {Box} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import HandymanIcon from '@mui/icons-material/Handyman';
import Face4Icon from '@mui/icons-material/Face4';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import Switch from '@mui/material/Switch';

class Sidebar extends React.Component{

	render(){
		return(
				<Box  flex={1} sx={{display:{xs:"none", sm:"block"}}}>
					<Box position="fixed">
          <h1>Category</h1>
					<List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <PlumbingIcon />
              </ListItemIcon>
              <ListItemText primary="Plumbers" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Face4Icon />
              </ListItemIcon>
              <ListItemText primary="Maids" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <HandymanIcon />
              </ListItemIcon>
              <ListItemText primary="Mechanics" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <ElectricBoltIcon />
              </ListItemIcon>
              <ListItemText primary="Electricians" />
            </ListItemButton>
          </ListItem>


           <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <NightlightRoundIcon />
              </ListItemIcon>
              <Switch onChange={e=>this.props.setMode(this.props.mode === "light" ? "dark" :"light")}/>
            </ListItemButton>
          </ListItem>
          
        </List>
        </Box>
				</Box>
			);
	}
}

export default Sidebar;