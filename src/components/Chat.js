import React, { useState } from 'react';
import { IoArrowBack } from "react-icons/io5";
import './chat.css';
import { FaPlus, FaLocationPin } from "react-icons/fa6"
import { IoMdSend } from "react-icons/io";
import { useLocation } from 'react-router-dom'; 
import { FaUserCircle } from "react-icons/fa";
import { MdPermMedia } from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";

const Chat = () => {
  const location = useLocation(); 
  const [openChatMenu , setOpenChatMenu] = useState(true);
  const { booking } = location.state || {}; 

  const showChaMenu = () => setOpenChatMenu(!openChatMenu);

  if (!booking) {
    return <div>Booking not found.</div>;
  }

  return (
    <div className='chat-page'>
      <div className='topbar'><IoArrowBack /> Back</div>
      <div className='chat-content'>
        <div>
          <div className='listing'>
            <div className='listing-cover'>
            <FaUserCircle />
            </div>
            <div className='listing-details'>
            <h3>{booking.client_name}<small> {booking.booking_date}</small></h3>
            <p>{booking.issue_description}</p>
            </div>
          </div>
          
          <div className={openChatMenu ? 'chat-menu active-chat_menu' : 'chat-menu'}>
            <div><span><FaLocationPin /></span> Share Location</div>
            <div><span> <MdPermMedia /></span> Share Image/Video </div>
            <div><span> <AiFillSchedule /></span> Make Arrangements </div>
          </div>
        
        </div>
        <div className='chat'>
        <div onClick={showChaMenu}>
        <FaPlus />
        </div>
        <div className='chat-input'><textarea placeholder='chat'></textarea></div>
        <div><span><IoMdSend /></span></div>
        </div>
      </div>

    </div>
  );
};

export default Chat;
