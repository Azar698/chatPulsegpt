import React, { useContext } from 'react';
import './Main.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/Contxt'

const Main = () => {
  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)
  
  return (
    <div className="main">
        <div className="nav">
            <p>ChatPulse</p>
            <img className = "user-icon" src={assets.user_icon} alt="user icon" />
        </div>
        <div className="main-container">
          {!showResult ? 
            <>
               <div className="greet">
            <p><span>Hello, Azar.</span></p>
            <p>How may I assist you today?</p>
          </div>
          <div className="cards">
            <div className="card">
                <p>List power words for my resume that show teamwork.</p>
                <img src={assets.compass_icon} alt="campus icon" />
            </div>

            <div className="card">
                <p>Come up with a recipe for an upcoming event.</p>
                <img src={assets.bulb_icon} alt="bulb icon" />
            </div>

            <div className="card">
                <p>Explain the key rules of rugby, starting with the basics.</p>
                <img src={assets.message_icon} alt="message icon" />
            </div>

            <div className="card">
                <p>Brainstorm ideas for a mocktail given specific ingredients.</p>
                <img src={assets.code_icon} alt="code icon" />
            </div>
          </div> 
          </> : 
            <div className='result'>
              <div className="result-title">
                <img src={assets.user_icon} alt="user icon"/>
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="gemini icon"/>
                {loading?<div className='loader'>
                  <span className='dot'></span>
                  <span className='dot'></span>
                  <span className='dot'></span>
                  <span className='dot'></span>
                </div> :  <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
              </div>
            </div> 
          }
          
          <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value = {input} type="text" placeholder='Enter prompt here' />
                <div>
                  <img src={assets.gallery_icon} alt="gallery icon" />
                  <img src={assets.mic_icon} alt="mic icon" />
                  {input ? <img onClick={()=>onSent()} src={assets.send_icon} alt="send icon" /> : ""}
                  
                </div>
            </div>
            <p className="bottom-info">
              ChatPulse, Unlock a World of Knowledge and Creativity with Our Cutting-Edge AI Conversational Platform
            </p>
          </div>
        </div>
        
    </div>
  )
}

export default Main 