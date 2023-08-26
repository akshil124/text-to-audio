import logo from './logo.svg';
import React from "react";
import './App.css';
import Blog from "../src/Component/index"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./Component/Header/header";
import AboutUs from "./Component/Footer/About";
import Contact from "./Component/Footer/Contact"
import TermsAndCondition from "./Component/Footer/termsAndConditions";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>} >
          <Route index element={<Blog/>}/>
          <Route path='/aboutUs' element={<AboutUs/>}  />
          <Route path='/termsAndCondition' element={<TermsAndCondition/>}  />
          <Route path='/contact' element={<Contact/>}  />
        </Route>
        <Route path='*' element={<h1>404 Page not found.</h1>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
