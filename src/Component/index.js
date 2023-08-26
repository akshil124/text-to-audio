import React, {useEffect, useState} from "react";
import axios from "axios";
import "../Component/index.css";
import downloadIcons from "../Icons/icons8-download-64.png";
import refreshIcons from "../Icons/icons8-refresh-30 (1).png";
import fAvatar from "../Icons/f_avatar.jpg";
import mAvatar from "../Icons/m_avatar.jpg";
import {motion} from "framer-motion"
import Footer from "./Footer/footer";
const Blog = () => {
  const [allVoices, setAllVoices] = useState([]);
  const [text, setText] = useState('')
  const [open, setOpen] = useState({show: false, voiceId: null,name:null})
  const [file, setFile] = useState();
  const [search ,setSearch] = useState('');
  const [error, setError] = useState();
  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL+"/voices")
      .then(response => response.json())
      .then(response => {
        setAllVoices(response.voices);
      });
  }, []);

  useEffect(()=> {
    allVoices.length &&
      allVoices.map((ele) => {
          const audioPlayer = document.querySelector(`.${ele.name}`);
          const audio = new Audio(
            ele.preview_url
          );

          audio.addEventListener(
            "loadeddata",
            () => {
              audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(
                audio.duration
              );
              audio.volume = .75;
            },
            false
          );

          const timeline = audioPlayer.querySelector(".timeline");
          timeline.addEventListener("click", e => {
            const timelineWidth = window.getComputedStyle(timeline).width;
            const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
            audio.currentTime = timeToSeek;
          }, false);

//click volume slider to change volume
          const volumeSlider = audioPlayer.querySelector(".controls .volume-slider");
          volumeSlider.addEventListener('click', e => {
            const sliderWidth = window.getComputedStyle(volumeSlider).width;
            const newVolume = e.offsetX / parseInt(sliderWidth);
            audio.volume = newVolume;
            audioPlayer.querySelector(".controls .volume-percentage").style.width = newVolume * 100 + '%';
          }, false)

//check audio percentage and update time accordingly
          setInterval(() => {
            const progressBar = audioPlayer.querySelector(".progress");
            progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
            audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
              audio.currentTime
            );

            if(audio.currentTime / audio.duration * 100 === 100){
              playBtn.classList.remove("pause");
              playBtn.classList.add("play");
              audio.pause();
              progressBar.style.width = "0%";
              audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
                audio.currentTime
              );
            }
          }, 500);

//toggle between playing and pausing on button click
          const playBtn = audioPlayer.querySelector(".controls .toggle-play");
          playBtn.addEventListener(
            "click",
            () => {
              if (audio.paused) {
                playBtn.classList.remove("play");
                playBtn.classList.add("pause");
                audio.play();
              } else {
                playBtn.classList.remove("pause");
                playBtn.classList.add("play");
                audio.pause();
              }
            },
            false
          );

          audioPlayer.querySelector(".volume-button").addEventListener("click", () => {
            const volumeEl = audioPlayer.querySelector(".volume-container .volume");
            audio.muted = !audio.muted;
            if (audio.muted) {
              volumeEl.classList.remove("icono-volumeMedium");
              volumeEl.classList.add("icono-volumeMute");
            } else {
              volumeEl.classList.add("icono-volumeMedium");
              volumeEl.classList.remove("icono-volumeMute");
            }
          });

//turn 128 seconds into 2:08
          function getTimeCodeFromNum(num) {
            let seconds = parseInt(num);
            let minutes = parseInt(seconds / 60);
            seconds -= minutes * 60;
            const hours = parseInt(minutes / 60);
            minutes -= hours * 60;

            if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
            return `${String(hours).padStart(2, 0)}:${minutes}:${String(
              seconds % 60
            ).padStart(2, 0)}`;
          }
        })
  },[allVoices])
  const handleChange = (e) => {
    let {value} = e.target;
    setText(value)
    setFile()
  }
  const handleSubmit = async (voiceId) => {
   if(text.length < 333){
     try {
       const requestOptions = {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           text: text,
           model_id: "v1"
         }),
       };
       const response = await fetch(`${process.env.REACT_APP_BASE_URL}/text-to-speech/${voiceId}/stream`, requestOptions);
       const audioData = await response.arrayBuffer();
       const audioBlob = new Blob([audioData], {type: 'audio/mpeg'});
       const url = URL.createObjectURL(audioBlob);
       setFile(url);
       setError();
     } catch (error) {
       console.error('Error fetching audio data:', error);
     }
   }
   else{
     setError('333 character limit per search')
   }
  };
  const handleReplay=()=>{
    const replay = document.getElementById('audioSource');
    replay.currentTime = 0;
    replay.play();
  };
  const Modal = () => {
    return (<div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={() => {setOpen({show: !open.show, voiceId: null,name:null}); setFile("");setText('')} }>&times;</span>
        <h2>Get your text cover</h2>
        <textarea  placeholder="Something" value={text} className='modal-input' onChange={(e)=>handleChange(e)}/>
        {error && <dvi className='error-msg'>{error}</dvi>}
        <div className='title-content'>
          <div className="card-name">-{open?.name}</div>
          <div className='message-length'>{text.length}/333</div>
        </div>
        <button className="submit-btn" onClick={() => handleSubmit(open?.voiceId)}>Submit</button>
        {(text && file) ? <div className='audio-container'><audio controls id='audioSource' src={file} controlsList="nodownload noplaybackrate " />
            <img src={refreshIcons} className='refreshIcons' onClick={()=>handleReplay()}/>
              <a download={`${open?.name}.mp3`} href={file} ><img src={downloadIcons} className='downloadIcons'/></a></div>
          : null}
      </div>
    </div>)
  };
  return (<>
<div className="containers">

  {allVoices.length ? <div className="Card">
    <motion.div initial={{ y: -100}}
                whileInView={{ y: 0 }}  className="CardInner">
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
          <input placeholder="Search for your Voices Card" onChange={(e)=>{setSearch(e.target.value)}}/>
        </div>
      </div>
    </motion.div>
  </div> : null}
  <div className="voices-container"> {open.show && Modal()}
      {allVoices && allVoices?.filter(ele => {
        if (search) {
          return ele.name.toLowerCase().includes(search.toLowerCase())
        } else {
          return true;
        }
      }).map((ele, index) => (<>
          <motion.div
            initial={{ x: index/2 ? 100 : -100}}
            whileInView={{ x: 0 }} className="card-container">
                <div className="card-front" key={index}>
                  <div onClick={() => setOpen({show: !open.show, voiceId: ele?.voice_id, name:ele?.name})}><h2 className="name">{ele?.name}</h2>
                  <div className="user-profile">
                    <img src={ele.labels.gender === "male" ? mAvatar : fAvatar} alt="Profile Picture"/>
                  </div>
                  <div className='subDetail'><p className="category">Category: {ele.category}</p><p className="labels">Accent: {ele?.labels.accent}</p></div>
                  </div><div className={`audio-player ${ele.name}`}>
                    <div className="timeline">
                      <div className="progress"></div>
                    </div>
                    <div className="controls">
                        <div className="play-btn"></div><div className="toggle-play play">
                        </div>
                      <div className="play-container">
                      </div>
                      <div className="time">
                        <div className="current">0:00</div>
                        <div className="divider">/</div>
                        <div className="length"></div>
                      </div>
                      <div className="name">Voice</div>
                      <div className="volume-container">
                        <div className="volume-button">
                          <div className="volume icono-volumeMedium"></div>
                        </div>

                        <div className="volume-slider">
                          <div className="volume-percentage"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </motion.div>
        </>
      ))}
     </div>
</div>
    <Footer/>
  </>)
};
export default Blog;
