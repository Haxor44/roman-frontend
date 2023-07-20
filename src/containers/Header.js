import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
	const auth = useSelector((state)=>state.authentication.auth);
	
	return(
				<div>
				<header role="banner">
  					<h1>Home</h1>
  
				</header>

					{
						
						!auth ?  

						<ul>
						<br/>
						<li className="users"><Link style={{textDecoration:'none'}} to="/login">Accounts</Link></li>
						<li ><Link style={{textDecoration:'none'}} to="/login">Login</Link></li>
					</ul>
						 : 
					<ul>
						<li><Link style={{textDecoration:'none'}} to="/">Home</Link></li>
						<li className="logout warn"><Link style={{textDecoration:'none'}} to="/login">Logout</Link></li>
					</ul>
					 }
					
				
			</div>
		)
}

export default Header;