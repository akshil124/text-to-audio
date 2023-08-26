import React, {useEffect, useState} from "react";
import axios from "axios";
import "../index.css";
import {motion} from "framer-motion"
import {useNavigate} from "react-router-dom"
const Footer = () => {
const navigate =  useNavigate();
  return (<>
    <footer className="footer-distributed">

      <div className="footer-right">
        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-github"></i></a>
      </div>
      <div className="footer-left">
        <p className="footer-links">
          <a className="link-1" href="#">Disclaimer</a>

          <a href="#">Privacy Policy</a>


          <a href="#">Pricing</a>

          <a onClick={()=>navigate('/termsAndCondition')}>Terms and Conditions</a>

          <a onClick={()=>navigate('/contact')}>Contact us</a>

          <div className='footerPages' onClick={()=>navigate('/aboutUS')}>About us</div>
        </p>
        <p>Text to Speech &copy; 2015</p>
      </div>

    </footer>
  </>)
};
export default Footer;