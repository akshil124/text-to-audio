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
    </div>
  </div><Outlet/><Footer/></>)
}
export default Header;