import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const ServiceComponent = ()=>{
	const services = useSelector((state)=>state.allServices.services);
	const renderITems = services.map((service)=>{
		const {id,title,image,price,category} = service;
		return(
			
			
			<div className="card">
			<div class="cards">
			<img src={image} alt="Avatar" className="images"/>
         			<p>{title}</p>
         			
         		<p>{category}</p>
         		<p>${price}</p>
         		<Link className="purchase" to={`/service${id}`}>Buy</Link>
 			 </div>
 			 </div>
			
     		 
     		


			
		);
	})
	return(
			<>{renderITems}</>
		);
};

export default ServiceComponent;

