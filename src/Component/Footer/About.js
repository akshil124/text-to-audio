import React from "react";
import "./footer.css"
import Footer from "./footer";
const AboutUs = () =>{
  return(<><div className='mainContainers'><div className='card'>
    <section className="about-section">
      <div className="about-container">
        <h1 className='title'>About Us</h1>
        <p className='paragraph'>Welcome to DarkSite, where the depths of design meet the elegance of darkness. Our team is composed of
          creative minds who are passionate about crafting unique and immersive web experiences that embrace the dark
          aesthetic.</p>
        <p className='paragraph'>With a focus on innovation and attention to detail, we strive to create websites that not only look stunning
          but also provide exceptional functionality and user experience.</p>
        <p className='paragraph'>At DarkSite, we believe that darkness can evoke emotions, create moods, and captivate audiences in ways that
          traditional designs cannot. Our goal is to push the boundaries of design while ensuring accessibility and
          user-friendliness.</p>
        <p>Join us on this journey into the shadows, and let's create something extraordinary together.</p>
      </div>
    </section></div></div><Footer/></>)
}
export default AboutUs;