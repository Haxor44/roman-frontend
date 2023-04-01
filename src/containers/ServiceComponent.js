import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const ServiceComponent = ()=>{
	const services = useSelector((state)=>state.allServices.services);
	const renderITems = services.map((service)=>{
		const {id,title,image,price,category} = service;
		return(


			<div className="product-card" key={id}>
			<Link to={`/service${id}`}/>
  			<img src={image} alt={title}/>
  <h3 className="product-name"> {title}</h3>
  <p className="product-description">Product Description</p>
  <div className="product-price">${price}</div>
  <button className="add-to-cart-button">Add to Cart</button>
</div>

			


			
		);
	})
	return(
			<>{renderITems}</>
		);
};

export default ServiceComponent;