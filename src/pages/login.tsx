import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import './pages.css'

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className='login-main'>
      {/* <Navbar /> */}
      <div className="left"></div>
      <div className="right">
        <div className="form-title">Sign In</div>
        <div className="input-wrapper">

          <label>Username</label>
          <input type={"text"} placeholder="Username" />
        </div>
        <div className="input-wrapper">
          <label>Password</label>
          <input type={"password"} placeholder="Password" />
        </div>
        <div className="signin-footer1">
          <a>Forgot Password</a>
        </div>
        {/* <div className="signin-footer2">
          New here? <a onClick={() => navigate("/register")}>Register</a>
        </div> */}
        <div className="login-btn-div">
          <button>Log In</button>
        </div>
        <div className="signin-footer3">
          <p><div className="thin-line"></div> or login with <div className="thin-line"></div></p>
          <div className="social-icons-div">
            fb, google, throw new Error("");

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login