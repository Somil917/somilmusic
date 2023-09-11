import React from 'react'
import { NavLink } from 'react-router-dom'


const Login = () => {
  return (
    <>
        <div className="main-login-container">
          <div className="main-login-content">
            <div className="login-content">
              <h2>SignUp</h2>
              <form action="">
                <input type="text" placeholder="Enter Your Name"/><br />
                <input type="email" placeholder="Enter Your Email"/> <br />
                <input type="password" placeholder="Enter A Password"/><br />
                <input type="password" placeholder="Confirm Your Password"/><br />
              </form>
                <input type="button" id="login-submit" value="Register"/>
                <div className="signup-link">
                  <NavLink to="/login">Already Have an Account!</NavLink>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Login