import React, { useContext, useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/Contxt'


const Sidebar = () => {

   const [extended,setExtended] = useState(false)
   const {onSent,prevPrompt,setRecentPrompt,newChat} = useContext(Context)
  
   const loadPrompt = async(prompt) =>{
       setRecentPrompt(prompt)
       await onSent(prompt)
   }

   return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="menu" />
            <div onClick={()=>newChat()} className='newchat'>
               <img className='plus-icon' src={assets.plus_icon} alt="plus-icon"/>
               {extended&&<p>New Chat</p>}
            </div>
            {extended && <div className="recent">
                <p className="recent-title">Recent</p>
                {prevPrompt.map((item,i)=>{
                    return (
                        <div onClick={()=>loadPrompt(item)} className="recent-entry">
                           <img src={assets.message_icon} alt="message-icon"/>
                           <p>{item.slice(0,15)}...</p>
                        </div>
                    )
                })}
            </div>}
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="question-icon" />
                {extended && <p>Help</p>}
            </div>

            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="history-icon" />
                {extended && <p>Activity</p>}
            </div>

            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="setting icon" />
                {extended && <p>Settings</p>}
            </div>

            
        </div>
            
    </div>
  )
}

export default Sidebar 