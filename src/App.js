import logo from './logo.svg';
import React from "react";
import './App.css';
import Blog from "../src/Component/index"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./Component/Header/header";
import AboutUs from "./Component/Footer/About";
import Contact from "./Component/Footer/Contact";
import Pricing from "./Component/Footer/pricing";
import Faq from "./Component/Footer/faq";
import TermsAndCondition from "./Component/Footer/termsAndConditions";
import PrivacyPolicy from "./Component/Footer/privacyPolicy";
import Disclaimer from "./Component/Footer/disclaimer"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>} >
          <Route index element={<Blog/>}/>
          <Route path='/aboutUs' element={<AboutUs/>}  />
          <Route path='/contact' element={<Contact/>}  />
          <Route path='/privacy_policy' element={<PrivacyPolicy />}/>
          <Route path='/terms_and_conditions' element={<TermsAndCondition />}/>
          <Route path='/disclaimer' element={<Disclaimer />}/>
        </Route>
        <Route path='*' element={<h1>404 Page not found.</h1>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
