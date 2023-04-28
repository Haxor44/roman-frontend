import React, {useState} from "react";
import axios from '../api/axios';

const REGISTER_URL = '/api/auth/register';


const Register = () => {

	const [name,setName] = useState('');
	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');
	const [phone,setPhone] = useState('');
	const role = "user";


	const handleSubmit = async(e)=>{
		e.preventDefault();

		const registerReq  = await axios.post(REGISTER_URL, 
                JSON.stringify({name,email,password,phone,role}), 
            {
                headers:{'Content-Type':'application/json'},
                withCredentials:true});
  
            }
	
	
	return(
			<React.Fragment>
            <body className="body2">
            <div>
            <form  className="wrapper">
            <h2>REGISTRATION</h2>
            <section className="group">
                <input
                    type="text"
                    size="7"
                    className="input"
                    name="name"
                     placeholder="Enter Name"
                    onChange={(e)=> setName(e.target.value)}
                    required
                />
            </section>
            <section className="group">
                <input
                    type="text"
                    size="7"
                    className="input"
                    name="email"
                     placeholder="Enter email..."
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                />
            </section>
            <section className="group">
                <input
                    type="password"
                    
                    className="input"
                    name="password"
                     placeholder="Enter password"
                    onChange={(e)=> setPassword(e.target.value)}
                    required
                />
            </section>
            <section className="group">
                <input
                    type="text"
                    size="7"
                    className="input"
                    name="phone"
                     placeholder="Enter phone number"
                    onChange={(e)=> setPhone(e.target.value)}
                    required
                />
            </section>
            <button  type="submit" onClick={handleSubmit} className="btn">
                REGISTER
            </button>
            <span className="footer"></span>
        </form>
        </div>
        </body>
        </React.Fragment>
		);
}

export default Register;