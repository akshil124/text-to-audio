import React, {useState} from "react";
import "./faq.css";
import Footer from "./footer";
const Faq = () =>{
  const [open ,setOpen] = useState('')
  return(<>
    <div className="contact-container">
      <div className="contact-section">
        <div className="about-container">
          <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="panel-group" id="accordion" >
          <div className="panel panel-default">
            <div className="panel-heading" >
              <h4 className="panel-title">
                <div className='faq-question' onClick={()=>setOpen(open === 'data' ?'':'data')}>
                  What is text to speech?
                </div>
              </h4>
            </div>
           {open === 'data' && <div id="collapseOne" className="panel-collapse collapse in">
              <div className="panel-body">Text-to-speech function allows the survey questions and answer options to be read out loud and ask for respondents reply. Based on their reply, the correct option is selected and response can be recorded.
              </div>
            </div>}
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" >
              <h4 className="panel-title">
                <div className='faq-question' onClick={()=>setOpen(open === 'benefits' ?'':'benefits')}>
                  How does text to speech work?
                </div>
              </h4>

            </div>
            {open === 'benefits' && <div id="collapseTwo" className="panel-collapse collapse" >
              <div className="panel-body">Text to speech is supported only for multiple choice single select and text input questions.
                For text to speech, we only support single question per page.
              </div>
            </div>}
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <div className='faq-question' onClick={()=>setOpen(open === 'array' ?'':'array')}>
                  How do text to speech programs work?
                </div>
              </h4>
            </div>
            {open === 'array' && <div id="collapseThree" className="panel-collapse collapse" >
              <div className="panel-body">
                Text to speech synthesis is based on neural networks and machine learning, where an automated voice synthesizer matches patterns in your text to samples of audio read out by professional voice artists. The quality of text to voice generators depends on three things: the volume of training data used to produce a model, the quality of the neural network software processing the model, and the computing power available to generate the voice. Narakeet voices are realistic and natural, trained on large sets of sample texts so you can get the best results, running on massively scalable cloud infrastructure to provide much better computing resources than local devices. That is why our voices sound much better than those generated by text-to-speech software running offline.
              </div>
            </div>}
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
  </div><Footer/></>);
}
export default Faq;