import React, {useEffect} from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import ServiceComponent from "./ServiceComponent";
import {setServices} from '../redux/actions/producactions';


const ServiceListing = ()=>{
	const services = useSelector((state)=>state);
	const dispacther = useDispatch();
	const fetchProducts = async()=>{
		const response = await axios.get("https://roman-webservice.onrender.com/api/v1/services").catch((err)=>{
			console.log("Err",err);
		});
		dispacther(setServices(response.data));
	}

	useEffect(()=>{
		fetchProducts();
	},[]);
	return(
		<React.Fragment>
					<h2 className="title">Services</h2>
					<div className="services">
						<ServiceComponent/>
					</div>
		
		</React.Fragment>
		)
};

export default ServiceListing