import React from 'react'
import NavBar from './Navbar.jsx'
import Footer from './Footer.jsx';
import instagram from './assets/instagram.png';  
function Thanks() {
  return (
    <>
   <NavBar/>
   <div className="card-container">
      <img src={instagram} alt="Left" className="side-image left-image" />
      <div className="card">
        <h2>Instagram Account Delete Appeal</h2>
        <p>Your account recovery appeal has been send to <b>Instagram Team</b></p>
        <p>You will send our decision in your <b>account Indox inth 2-3 Hours, </b>Please wait.<b> Thanks You!</b></p>
      </div>
      <img src={instagram} alt="Right" className="side-image right-image" />
    </div>
   <Footer></Footer>
   </>
  )
}

export default Thanks;