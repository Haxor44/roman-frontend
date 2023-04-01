import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const ServiceComponent = ()=>{
	const services = useSelector((state)=>state.allServices.services);
	const renderITems = services.map((service)=>{
		const {id,title,image,price,category} = service;
		return(
			<div className="product-box column" key={id}>
				<Link to={`/service${id}`}>
				<div className="product-item">
					
						<div className="product-item-image">
							<img src={image} alt={title}/>
							<div class="product-item-image-hover">
                        	</div>
						</div>
						<div className="product-item-content">
							<div className="product-item-title">{title}</div>
							<div className="product-item-price">$ {price}</div>
							<div className="product-item-category">{category}</div>
							 <div class="button-pill">
                            <span>Shop Now</span>
                        </div>						</div>
					</div>
				
				</Link>
			</div>
		);
	})
	return(
			<>{renderITems}</>
		);
};

export default ServiceComponent;