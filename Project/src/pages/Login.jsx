import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <div className="login-overlay" id="login-in">
            <form action="/action_page.php" className="form-container">
                {/* <button className="close_button" onclick="close_signin()"><span className="material-symbols-outlined">
                    close
                </span> </button>  */}
              <h1>Login</h1>
          
              <label for="email"><b>Email</b></label>
              <input type="text" placeholder="Enter Email" name="email" required />
          
              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required />
          
              <button type="submit" className="btn">Login</button>
              <h5>Don't have an account yet? <Link to='/signup' className="sign-up-link" >Sign up</Link></h5>
              {/* <h5>------------------  Or -------------------</h5>
              <button type="button" className="btn google" onclick="close_signin()">
                <i className="fa-brands fa-google"></i>
              <h4>Sign in using Google</h4></button> */}
            </form> 
        </div>
    </div>
  )
}

export default Login
