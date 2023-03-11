import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/navbar'
import './pages.css'
import GooglePng from '../assets/google.png'
import fbPng from '../assets/fb.png'
import twitterPng from '../assets/twitter.png'
import loginImg from '../assets/login.png'
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState<{ name: String, picture: string, email: String }>({
    picture: "",
    email: "",
    name: ""
  });
  const [wait, setWait] = useState("LOGIN")

  const login = useGoogleLogin({
    onSuccess: (codeResponse: any) => {
      setUser(codeResponse)
      setWait("Logged In")
      navigate("/")
    },
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(
    () => {
      if (user) {
        axios
          .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json'
            }
          })
          .then((res) => {
            console.log(res)
            setProfile(res.data);
          })
          .catch((err) => console.log(err));
      }
    },
    [user]
  );


  const logOut = () => {
    googleLogout();
    setProfile({ email: "", name: "", picture: "" });
  };

  return (
    <div className='login-main'>
      {/* <Navbar /> */}
      <div className="left"><img style={{ width: "574px" }} src={loginImg} /></div>
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
        <div className="login-btn-div">
          <button>{wait}</button>
        </div>
        <p className='register-navigator'>New here?  <a onClick={() => navigate("/register")}> Register</a></p>
        <div className="signin-footer3">
          <p><div className="thin-line"></div> or login with <div className="thin-line"></div></p>
          <div className="social-icons-div" style={{display: "flex", padding: "3px 10px", background: "#fff", justifyContent: "space-evenly", alignItems: "center", borderRadius: "6px", width: "220px", cursor: 'pointer'}}>
            <img src={GooglePng} onClick={() => login()} className="social-icons" /> Sign in with google
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login