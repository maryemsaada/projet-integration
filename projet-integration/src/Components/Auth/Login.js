import React, { useState } from 'react'
import './Login.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
function Login() {
  const navigate = useNavigate();
  const [email , setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("RH")

  const signInEmploye = async (event) => {
    event.preventDefault()
    try {
      await axios.post ("http://localhost:5000/SignInEmploye" , { email, password })
      
      if (role) {
        navigate ("/Dashboard-RH")
      }
    } catch (error) {
      console.error (error)
    }
  }


  return (
    <div className="containerr">
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="signup">
        <form onSubmit={signInEmploye}>
          <label htmlFor="chk" aria-hidden="true" className ="labelLogin">
            Sign in
          </label>
          <input onChange={(e) => {setEmail(e.target.value)}} type="email" name="email" placeholder="Email" required="" />
          <input onChange={(e) => {setPassword(e.target.value)}} type="password" name="pswd" placeholder="Password" required="" />
          <button className = "btn-login" >Confirm</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Login