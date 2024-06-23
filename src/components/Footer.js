import React from 'react';
import './footer.css'; // Import the CSS file

const Footer = () => (
  <footer className="footer">
    <section className="content">
    <address className="address">

    
      
        <p>Built @UC Berkeley AI Hackathon 2024</p>
        <p>
          Email:
          <a style={{padding:'5px'}} href="mailto:grade.ai94701@gmail.com">grade.ai94701@gmail.com</a>
        </p>
      </address>
      <div className="rights">
        <p>&copy; <span id="year">{new Date().getFullYear()}</span> Grade.ai</p>
      
      </div>
    </section>
  </footer>
);

export default Footer;
