// import React from "react";
// import "./footer.css"
// import Footer from "./footer";
// const TermsAndCondition = () =>{
//   return(<><div className='mainContainers'><div className='card'>
//       <section className="about-section">
//         <div className="about-container">
//           <h1 className='title'>Terms And condition</h1>
//           <h5 className='terms-content-title'>1. Acceptance of Terms</h5>
//           <p className='paragraph'>Welcome to our website. By accessing and using this site, you agree to comply with and be bound by the
//             following terms and conditions.</p>
//
//           <h5 className='terms-content-title'>2. Intellectual Property</h5>
//           <p className='paragraph'>All content and images on this website are protected by intellectual property laws. Unauthorized use or
//             reproduction is prohibited.</p>
//           <h5 className='terms-content-title'>3. Limitation of Liability</h5>
//           <p className='paragraph'>We are not liable for any damages or losses arising from the use of this website. Use it at your own risk.</p>
//         </div></section></div></div></>
//   )
// }
// export default TermsAndCondition



import React from "react";
import "./footer.css"
import Footer from "./footer";
const TermsAndCondition = () =>{
  return(<>
      <div className="contact-container">
        <div className="contact-section">
          <div className="about-container">
            <div className="right-col">
              <h1 className='title'>Terms And condition</h1>
              <p className='terms-content-title'>1. Acceptance of Terms</p>
              <p className='paragraph'>Welcome to our website. By accessing and using this site, you agree to comply with and be bound by the
                following terms and conditions.</p>
              <p className='terms-content-title'>2. Intellectual Property</p>
              <p className='paragraph'>All content and images on this website are protected by intellectual property laws. Unauthorized use or
                reproduction is prohibited.</p>
              <p className='terms-content-title'>3. Limitation of Liability</p>
              <p className='paragraph'>We are not liable for any damages or losses arising from the use of this website. Use it at your own risk.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default TermsAndCondition;