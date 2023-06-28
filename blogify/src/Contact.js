
import React from "react";

import './Contact.css';


const Contact = () => {
  return (
   
<div id="contact">
<div className="container">
  <div className="row">
    <div className="contact-left">
      <h1 className="sub-title">Contact</h1>
      <p><i className="fa-solid fa-paper-plane"></i>prateeksha8177@gmail.com</p>
      <p><i className="fa-solid fa-phone"></i>6387859200</p>
      <div className="social-icons">
        <a href="https://www.instagram.com/argh.urgh/"> <i className="fa-brands fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/prateeksha-pandey-75898223a/"> <i className="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/prateeksha17"> <i className="fa-brands fa-github"></i></a>
        <a href="https://www.freelancer.com/hireme/prateekshapande5"> <i className="fa-solid fa-dove"></i></a>
</div>
    
</div>
    <div className="contact-right">
      <form action="https://formspree.io/f/xdovrwqe" method="post">
        <input id="text" type="text" name="Name" placeholder="Your Name" required/>
        <input id="email" type="email" name="email" placeholder="Your Email" required/>
        <textarea id="message" name="message" rows="6" placeholder="Your Message"></textarea>
        <button type="submit" className="btn btn2">Send</button>
      </form>
    </div>
  </div>
</div>
</div>


  );
}


export default Contact;



