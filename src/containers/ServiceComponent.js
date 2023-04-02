import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const ServiceComponent = ()=>{
	const services = useSelector((state)=>state.allServices.services);
	const renderITems = services.map((service)=>{
		const {id,title,image,price,category} = service;
		return(

			<tr key={id}>
			<Link to={`/service${id}`}>
         	<td>{title}</td>
         	<td align="center">{category}</td>
         	<td align="center">${price}</td>
         	</Link>
     		 </tr>

			


			
		);
	})
	return(
			<>{renderITems}</>
		);
};

export default ServiceComponent;