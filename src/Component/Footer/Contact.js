import React ,{useState} from "react";
import "./footer.css"
import Footer from "./footer";

const Contact = () => {
  const [user, setUser] = useState({name:'', email:'', message:''});
  const [modal, setModal] = useState(false)
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setUser({...user, [name] :value})
  }
  const onSubmit = () =>{
    setModal(true)
    setUser({name:'', email:'',message:''})
  }
  const {name, email, message} = user;
  return (<>
    <div className="contact-container">
      <div className="contact-section">
        <div className="about-container">
          <div className="right-col">
            <h1 className='title'>Contact Us</h1>
            <p className='paragraph1'>Planning to visit Indonesia soon? Get insider tips on where to go,
              things to do and <br/> find best deals for
              your next adventure.</p>
            <div className='card-form'>
            <form id="contact-form" >
              <label htmlFor="name">Full name</label>
              <input className='contact-input' value={name} type="text" id="name" name="name" placeholder="Your Full Name" onChange={(e)=>handleChange(e)} required />
              <label htmlFor="email">Email Address</label>
              <input className='contact-input' type="email" value={email} id="email" name="email" placeholder="Your Email Address" onChange={(e)=>handleChange(e)} required/>
              <label htmlFor="message">Message</label>
              <textarea className='contact-input' value={message} rows="6" placeholder="Your Message" id="message" name="message" onChange={(e)=>handleChange(e)} required/>
              <button type="button" id="submit" name="submit" className='send-button' onClick={()=>onSubmit()}>Send</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}
export default Contact;