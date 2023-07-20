import React from "react";
import { Link } from "react-router-dom";
import back from "../images/back.jpg";
import about from "../images/about.jpg";
import icon from "../images/icon.svg";
import kim from "../images/kim.jpg";
import user from "../images/user.jpg";

class Home extends React.Component{

	render(){

		return(
			<React.Fragment>
				<main className="grid-main">
				<div className="head-grid">
					<div className="grid-nav">
						
						<Link  to="/">Home</Link>
						<Link  to="/services">Services</Link>
						<Link  to="/login">Login</Link>
					</div>
					<div className="grid-nav-text">
						<h2>We Offer Our Clients Excellent</h2>
						<h2>Maid Services</h2>
						<button className="grid-nav-btn">Get Started</button>
					</div>
					<div className="back1">
						<img  src={back} width={1600} height={750}/>
					</div>
					</div>


					<div className="grid-about-text">
						<h3>About</h3>
						<h2>Who we are</h2>
						<p>
						Our mission is to ensure that all of our clients are able </p>
						<p>to get a centralized platform
						from where they can acquire services
						</p>
						<p>such as maids...</p>
						<button>Read more</button>	
					</div>
					<div className="grid-about-img">	
						<img  src={about} width={600} height={350}/>
					</div>

					<div className="grid-services"><h2>Services</h2></div>
					<div className="grid-services1">
						<img  src={icon} width={50} height={50}/>
						<p>We offer services in plumbing</p>			
					</div>
					<div className="grid-services2">
						<img  src={icon} width={50} height={50}/>
						<p>We offer services in plumbing</p>
					</div>
					<div className="grid-services3">
						<img  src={icon} width={50} height={50}/>
						<p>We offer services in plumbing</p>
					</div>

					<div className="grid-testimonials"><h2>Testimonials</h2></div>

					<div className="testimonials1">
						<img  src={kim} width={100} height={100}/>
						<blockquote>Kitu safii!!!</blockquote>
						<h3>Kim</h3>
					</div>

					<div className="testimonials2">
						<img  src={user} width={100} height={100}/>
						<blockquote>Nice app!!!</blockquote>
						<h3>Tesla</h3>
					</div>

					<div className="footer">

						<h2 className="grid-footer-heading1">Roman Services App</h2>
						<h4 className="grid-footer-heading2">@2023 RMS Inc. All rights reserved.</h4>

						<div className="grid-footer-links1">
						<h5>Services</h5>
						<h5>Contact</h5>
						</div>

						<div className="grid-footer-links2">
							<h5>About</h5>
							<h5>Blog</h5>
							<h5>Faq</h5>
						</div>

					</div>
				</main>
			</React.Fragment>
			)
	}
}

export default Home;