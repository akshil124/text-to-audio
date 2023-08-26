import React from "react";
import "./footer.css"
import Footer from "./footer";

const Contact = () => {
  return (<>
    <div className='mainContainers contactContainer'>
      {/*<div className='card'>*/}
      <div>
        <h1>Contact Us</h1>
        <div>Loerem</div>
      </div>
      <div className='contact-content'>
        <div>
          <div className="direct-contact-container">

            <ul className="contact-list">
              <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">City, State</span></i>
              </li>
              <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a
                href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>
              <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a
                href="mailto:#" title="Send me an email">hitmeup@gmail.com</a></span></i></li>
            </ul>
          </div>
        </div>
        <div className='card'>
          <div className="InputContainer">
            <input placeholder="Name"/>
            <input placeholder="Email"/>
            <input placeholder="Type Messages"/></div>
        </div>
      </div>
    </div>
    {/*</div>*/}
    <Footer/>
  </>)
}
export default Contact;