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
          <a onClick={()=>navigate('/disclaimer')}>Disclaimer</a>
          <a onClick={()=>navigate('/privacy_policy')}>Privacy Policy</a>
          <a onClick={()=>navigate('/terms_and_conditions')}>Terms and Conditions</a>
          <a onClick={()=>navigate('/aboutUs')}>About</a>
          <a onClick={()=>navigate('/contact')}>Contact</a>
        </p>

        <p>&copy;  Text cover 2023 - All rights reserved.</p>
      </div>

    </footer>
  </>)
};
export default Footer;