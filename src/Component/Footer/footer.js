import React, {useEffect, useState} from "react";
import axios from "axios";
import "../index.css";
import {motion} from "framer-motion"
import {useNavigate} from "react-router-dom"

const Footer = () => {
  const navigate = useNavigate();
  window.scrollTo(0, 0);
  return (<>
      <div className="footer-distributed">
        <div className="footer-left">
          <div className="footer-links">
            <div className='footer-nav'>
              <div onClick={() => navigate('/disclaimer')}>Disclaimer</div>
              <div onClick={() => navigate('/privacy_policy')}>Privacy Policy</div>
              <div onClick={() => navigate('/terms_and_conditions')}>Terms and Conditions</div>
              <div onClick={() => navigate('/aboutUs')}>About</div>
              <div onClick={() => navigate('/contact')}>Contact</div>
            </div>
          </div>
    <p className='footer-cover'>&copy;  Text cover 2023 - All rights reserved.</p>
        </div>
      </div>
  </>)
};
export default Footer;