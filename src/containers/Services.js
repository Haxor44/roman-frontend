import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import {Box,Stack} from "@mui/material";
import Sidebar from "./Sidebar";
import ServiceListing from "./ServiceListing";
import Suggestions from "./Suggestions";
import Navbar from "./Navbar";
import HomeNavbar from "./HomeNavbar";
import { useState } from "react";
import {createTheme,ThemeProvider} from "@mui/material";
import '../styles/services.css';


function Services (){

	const auth = useSelector((state)=>state.authentication.auth);
	

	const [mode,setMode] = useState("dark");
  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })
	
		return(
			
				<ThemeProvider theme={darkTheme}>
					<Box bgcolor={"background.default"} color={"text.primary"}>
						<HomeNavbar/>
						<Stack direction="row" spacing={2} justifyContent="space-between">
							<Sidebar setMode={setMode} mode={mode}/>
							<ServiceListing/>
							<Suggestions/>
						</Stack>
					</Box>
					</ThemeProvider>
		
				

				
			)
	
}





export default Services;