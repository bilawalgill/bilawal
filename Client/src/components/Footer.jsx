
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Instagram Appeal <b>Offical</b> Center</p>
        <p>Address: 123 Main St, City, America</p>
        <p>&copy; {new Date().getFullYear()} Insstagrams. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
