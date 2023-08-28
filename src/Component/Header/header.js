import React from "react";
import "../index.css"
import {useNavigate,Outlet} from "react-router-dom";
import Footer from "../Footer/footer";
const Header = () =>{
  const navigate = useNavigate()
  return( <><div className="header">
    <a href="#default" className="logo">Text to Speech</a>
    <div className="header-right">
      <a className="active" onClick={()=>navigate('/')}>Home</a>
      <a onClick={()=>navigate('/contact')}>Contact</a>
      <a onClick={()=>navigate('/aboutUs')}>About</a>
    </div>
  </div><Outlet/><Footer/></>)
}
export default Header;