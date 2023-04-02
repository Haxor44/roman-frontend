import React, {useEffect} from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import ServiceComponent from "./ServiceComponent";
import {setServices} from '../redux/actions/producactions';


const ServiceListing = ()=>{
	const services = useSelector((state)=>state);
	const dispacther = useDispatch();
	const fetchProducts = async()=>{
		const response = await axios.get("https://fakestoreapi.com/products").catch((err)=>{
			console.log("Err",err);
		});
		dispacther(setServices(response.data));
	}

	useEffect(()=>{
		fetchProducts();
	},[]);
	return(
		<React.Fragment>
	
			<div class="grid-container">
        		<div class="grid-x grid-margin-x small-up-1 medium-up-2 large-up-4 grid-x-wrapper">
					<ServiceComponent/>
			</div>
		</div>
		</React.Fragment>
		)
};

export default ServiceListing