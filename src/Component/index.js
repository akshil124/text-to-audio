import React, {useEffect, useState} from "react";
import axios from "axios";
import "../Component/index.css";

const Blog = () => {
  const [allVoices, setAllVoices] = useState([]);
  const [text, setText] = useState('')
  const [open, setOpen] = useState({show: false, voiceId: null})
  const [file, setFile] = useState()
  const [search ,setSearch] = useState('')
  useEffect(() => {
    fetch("https://demo-api-kappa.vercel.app/api/voices")
      .then(response => response.json())
      .then(response => {
        setAllVoices(response.voices);
      });
  }, []);
  const handleChange = (e) => {
    let {value} = e.target;
    setText(value)
  }
  const handleSubmit = async (voiceId) => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: text,
          voice_id: voiceId,
        }),
      };
      const response = await fetch('https://demo-api-kappa.vercel.app/api/speech', requestOptions);
      const audioData = await response.arrayBuffer();
      const audioBlob = new Blob([audioData], {type: 'audio/mpeg'});
      const url = URL.createObjectURL(audioBlob);
      setText('')
      setFile(url);
    } catch (error) {
      console.error('Error fetching audio data:', error);
    }
  };
  const Modal = () => {
    return (<div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={() => {setOpen({show: !open.show, voiceId: null}); setFile("")}}>&times;</span>
        <h2>Modal Title</h2>
        <input type="text" placeholder="Something" onChange={(e) => handleChange(e)}/>
        <button className="submit-btn" onClick={() => handleSubmit(open?.voiceId)}>Submit</button>
        {file ? <audio controls id='audioSource' src={file}/>
          : null}
      </div>
    </div>)
  }
  return (
<div className="containers">
  <div className="Card">
    <div className="CardInner">
      <label>Search for your Voices Card</label>
      <div className="container">
        <div className="Icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="#e5e4e5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
               className="feather feather-search">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </div>
        <div className="InputContainer">
          <input placeholder="Search" onChange={(e)=>{setSearch(e.target.value)}}/>
        </div>
      </div>
    </div>
  </div>
  <div className="voices-container"> {open.show && Modal()}
      {allVoices && allVoices?.filter(ele => {
        if (search) {
          return ele.name.toLowerCase().includes(search.toLowerCase())
        } else {
          return true;
        }
      }).map((ele, index) => (<>
          <div className="card-container">
                <div className="card-front" key={index} onClick={() => setOpen({show: !open.show, voiceId: ele?.voice_id})}>
                  <div className="user-profile">
                    <img src={ele?.avatar} alt="Profile Picture"/>
                  </div>
                  <h2 className="name">{ele?.name}</h2>
                  <div><p className="category">Category: {ele.category}</p><p className="labels">Accent: {ele?.labels.accent}</p></div>
                  <audio controls>
                    <source
                      src={ele?.preview_url}
                      type="audio/mpeg"/>
                  </audio>
                </div>
          </div>
        </>
      ))}</div>
</div>)

};
export default Blog;