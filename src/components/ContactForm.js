import React from 'react';
import './contact.css'; // Import the CSS file

const ContactUs = () => {
  return (
    <section className="contact-us">
      <p className="title_contact">We're Here to Help!</p>
      
      <form className="Contactform">
        <div className="form-row">
          <input type="text" placeholder="First name*" required className="input" />
          <input type="text" placeholder="Last Name*" required className="input" />
        </div>
        <input type="email" placeholder="Email address*" required className="input" />
        
        <textarea placeholder="Please tell us a bit about your goals, what are you hoping to achieve with Grade.ai?" required className="input textarea"></textarea>
        
        <div className="disclaimer">
          We will store and process your personal data on terms defined <a href="#" className="link">here</a>.
        </div>
        
        <button type="submit" className="submit-button">Send</button>
      </form>
    </section>
  );
}

export default ContactUs;
