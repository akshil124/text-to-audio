import React from "react";
import "../index.css"
import {useNavigate,Outlet,useParams,useLocation } from "react-router-dom";
import Footer from "../Footer/footer";
import {motion} from "framer-motion";
const Header = () =>{
  const params= useParams ();
  const location= useLocation ();
  console.log("params0",params,location)
  const navigate = useNavigate()
  return( <><header className="header">

    <div  className="logo" onClick={()=>navigate('/')}>Text cover</div>
    <div className="header-right">
      <a style={{backgroundColor:location.pathname === '/'? '#ddd':null,color:location.pathname === '/'? 'black':null  }} onClick={()=>navigate('/')}>Home</a>
      <a style={{backgroundColor:location.pathname === '/contact'? '#ddd':null,color:location.pathname === '/contact'? 'black':null }} onClick={()=>navigate('/contact')}>Contact</a>
      <a style={{backgroundColor:location.pathname === '/aboutUs'? '#ddd' :null,color:location.pathname === '/aboutUs'? 'black':null }} onClick={()=>navigate('/aboutUs')}>About</a>
    </div>
  </header><div style={{marginBottom:'120px'}} className='content-render'/><Outlet/><Footer/></>)
}
export default Header;