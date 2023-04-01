import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
	const auth = useSelector((state)=>state.authentication.auth);
	return(

			<div className="headers">
				<div className="">
					<h2>Roman Services</h2>
				</div>
				<div className="header">
					{
						!auth ? 
						<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/login">Login</Link></li>
						<li><Link to="/register">Register</Link></li>
					</ul>
						 : 
						 <ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/login">Logout</Link></li>
					</ul>
					
					 }
					
				</div>
			</div>
		)
}

export default Header;