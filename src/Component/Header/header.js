import React from "react";
import "../index.css"
import {useNavigate,Outlet} from "react-router-dom";
import Footer from "../Footer/footer";
import {motion} from "framer-motion";
const Header = () =>{
  const navigate = useNavigate()
  return( <><div className="header">
    <div  className="logo" onClick={()=>navigate('/')}>Text cover</div>
    <div className="header-right">
      <a onClick={()=>navigate('/')}>Home</a>
      <a onClick={()=>navigate('/contact')}>Contact</a>
      <a onClick={()=>navigate('/aboutUs')}>About</a>
      <div className="container searchbar">
        <div className="Icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="#e5e4e5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
               className="feather feather-search">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </div>
        <div className="InputContainer">
          <input placeholder="Search for your Voices Card" />
        </div>
      </div>
    </div>
  </div><Outlet/><Footer/></>)
}
export default Header;