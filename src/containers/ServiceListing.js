import React, {useEffect} from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Service from "./Service";
import {Box} from "@mui/material";
import {setServices} from '../redux/actions/producactions';



const ServiceListing = ()=>{
	const services = useSelector((state)=>state);
	const dispacther = useDispatch();
	const token = useSelector((state)=>state.authentication.auth);

	const fetchProducts = async()=>{
		const response = await axios.get("https://service-api-0nnq.onrender.com/api/v2/services").catch((err)=>{
			console.log("Err",err);
		});
		dispacther(setServices(response));
	}

	useEffect(()=>{
		fetchProducts();
	},[]);
	return(
			<Box  flex={4}>
				<h1 className="service-header">Services</h1>
				<Service/>
			</Box>
		)
};

export default ServiceListing;
