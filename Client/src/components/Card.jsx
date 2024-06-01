import React from 'react';
import './Card.css';
import NavBar from './Navbar';
import Footer from './Footer';
import instagram from './assets/instagram.png';  
import { Link } from 'react-router-dom';
const Card = () => {
  return (
    <>
    <NavBar></NavBar>
    <div className="card-container">
      <img src={instagram} alt="Left" className="side-image left-image" />
      <div className="card">
        <h2>Instagram Account Delete Appeal</h2>
        <p>Your account will be deleted in next 24 hours. If you want send appeal to <b>Instagram Team</b>.</p>
        <p>Then Click n next button,We want your some account details <b>Thanks You!</b></p>
        <Link to="/detail"> <button>Next</button></Link>
      </div>
      <img src={instagram} alt="Right" className="side-image right-image" />
    </div>
    <Footer></Footer>
    </>
  );
};

export default Card;
