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
            <h2>LOGIN</h2>
            <section className="group">
                <input
                    type="text"
                    size="7"
                    className="input"
                    name="name"
                    onChange={(e)=> setName(e.target.value)}
                    required
                />
                <label htmlFor="Name" className="label">
                    Name
                </label>
            </section>
            <section className="group">
                <input
                    type="text"
                    size="7"
                    className="input"
                    name="email"
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                />
                <label htmlFor="email" className="label">
                    Email
                </label>
            </section>
            <section className="group">
                <input
                    type="password"
                    
                    className="input"
                    name="password"
                    onChange={(e)=> setPassword(e.target.value)}
                    required
                />
                <label htmlFor="password" className="label">
                    Password
                </label>
            </section>
            <section className="group">
                <input
                    type="text"
                    size="7"
                    className="input"
                    name="phone"
                    onChange={(e)=> setPhone(e.target.value)}
                    required
                />
                <label htmlFor="phone" className="label">
                    Phone
                </label>
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