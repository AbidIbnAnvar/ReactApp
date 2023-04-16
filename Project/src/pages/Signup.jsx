import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div>
      <div class="signup-overlay" id="sign-up">
            <form action="/action_page.php" class="form-container">
              <h1>Sign Up</h1>

              <label for="name"><b>Name</b></label>
              <input type="text" placeholder="Enter Full Name" name="name" required />
          
              <label for="email"><b>Email</b></label>
              <input type="text" placeholder="Enter Email" name="email" required />
          
              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required />
          
              <button type="submit" class="btn">Sign Up</button>
              <h5>Already have an account? <Link to='/login'>Login</Link></h5>
            </form>
        </div>
    </div>
  )
}

export default Signup
