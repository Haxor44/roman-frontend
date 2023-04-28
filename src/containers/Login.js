import React, {useState} from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from '../api/axios';
import {setLogin} from '../redux/actions/authActions';

const LOGIN_URL = '/api/auth/login';
const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const authenticated = useSelector((state)=>state);
    const dispatcher = useDispatch();

    const handleSubmit = async(e) => {
        e.preventDefault();
        //console.log(email);
        //console.log(password);

       
            const loginRes  = await axios.post(LOGIN_URL, 
                JSON.stringify({email,password}), 
            {
                headers:{'Content-Type':'application/json'},
                withCredentials:true});
                //console.log(JSON.stringify(loginRes.data["jwt-token"]));
                dispatcher(setLogin(loginRes.data["jwt-token"]));
                <Navigate to="/" />
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
                     placeholder="Enter your password..."
                    onChange={(e)=> setPassword(e.target.value)}
                    required
                />
            </section>
            <button  type="submit" onClick={handleSubmit} className="btn">
                LOGIN
            </button>
            <span className="footer"></span>
        </form>
        </div>
        </body>
        </React.Fragment>
        )
};

export default Login;