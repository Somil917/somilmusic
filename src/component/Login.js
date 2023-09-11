import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <div className="main-login-container">
          <div className="main-login-content">
            <div className="login-content">
              <h2>SignIn</h2>
              <form action="">
                <input type="email" placeholder="Enter Your Email"/> <br />
                <input type="password" placeholder="Enter Your Password"/><br />
              </form>
                <input type="button" id="login-submit" value="LogIn"/>
                <div className="signup-link">
                  <NavLink to="/signup">Don't have an account?</NavLink>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Login