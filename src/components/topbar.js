import React from "react";

import { FaUserCircle } from "react-icons/fa";


const Topbar = ()=>{
    return(
        <div className='top-bar'>
          <div className='profile-user'>
          <div className='user-img'>
        <FaUserCircle />    
          </div>
         <div>
          <p>User Name</p>
         </div>
       
        </div>
        
      </div>
    )
}

export default Topbar;