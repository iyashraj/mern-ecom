import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import './pages.css'
import GooglePng from '../assets/google.png'
import fbPng from '../assets/fb.png'
import twitterPng from '../assets/twitter.png'
import registerImg from '../assets/register.png'

const Signup = () => {
  const navigate = useNavigate()
  return (
    <div className='login-main'>
      {/* <Navbar /> */}
      <div className="left"><img style={{ width: "400px" }} src={registerImg} /></div>
      <div className="right">
        <div className="form-title">Register</div>
        <div className="input-wrapper">

          <label>Email</label>
          <input type={"email"} placeholder="Email" />
        </div>
        <div className="input-wrapper">

          <label>Name</label>
          <input type={"text"} placeholder="Name" />
        </div>
        <div className="input-wrapper">
          <label>Mobile</label>
          <input type={"text"} placeholder="Mobile" />
        </div>
        <div className="login-btn-div">
          <button>Register</button>
        </div>
        <p className='register-navigator'>Already have an account?  <a onClick={() => navigate("/login")}> Login</a></p>
        <div className="signin-footer3">
          <p><div className="thin-line"></div> or register with <div className="thin-line"></div></p>
          <div className="social-icons-div">
            <img src={GooglePng} className="social-icons" />
            <img src={fbPng} className="social-icons" />
            <img src={twitterPng} className="social-icons" />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup