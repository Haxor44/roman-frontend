import React from "react";
import axios from '../api/axios';

const LOGIN_URL = '/auth/token';
class Login2 extends React.Component {
    constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleSubmit = async (e) => {
    e.preventDefault();
    var email = e.target.email.value;
    var password = e.target.password.value;

    const response = await axios.post(LOGIN_URL, 
        JSON.stringify({email,password}), 
        {
          headers:{'Content-Type':'application/json'},
          withCredentials:true});
      console.log(JSON.stringify(response.data["jwt-token"]));
  }
  render() {
    return (
      <React.Fragment>
            <body className="body2">
            <form onSubmit={this.handleSubmit} className="wrapper">
            <h2>LOGIN</h2>
            <section className="group">
                <input
                    type="text"
                    size="7"
                    className="input"
                    name="email"
                    required
                />
                <label htmlFor="email" className="label">
                    Email
                </label>
            </section>
            <section className="group">
                <input
                    type="password"
                    minLength="8"
                    className="input"
                    name="password"
                    required
                />
                <label htmlFor="password" className="label">
                    Password
                </label>
            </section>
            <button type="button" className="btn">
                LOGIN
            </button>
            <span className="footer"></span>
        </form>
        </body>
        </React.Fragment>
    )
  }
}
export default Login2;