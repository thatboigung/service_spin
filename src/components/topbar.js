import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { FaCircleXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Topbar = ({ isServiceProvider }) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className='top-bar'>
      <div className='profile-user'>
        <h4>ServiceSpin</h4>
        <div className="menu-icon" onClick={showSidebar}>
          <MdMenu />
        </div>
      </div>
      <div className={sidebar ? 'side-bar active-sidebar' : 'side-bar'}>
        <div className="menu-iconn" onClick={showSidebar}>
          <FaCircleXmark />
        </div>
        <div className='user-p'>
          <div><FaUserCircle /></div>
          <h3>UserName</h3>
        </div>
        <div className='sidebar-items'>
          <NavLink to="/" onClick={showSidebar}>
            <div><p><b>Home</b></p></div>
          </NavLink>
          <NavLink to="/profile" onClick={showSidebar}>
            <div><p><b>Profile</b></p></div>
          </NavLink>
          <div><p><b><NavLink to="/orders">Orders</NavLink>
          </b></p></div>
          <div><p><b>Your Past Bookings</b></p></div>
          {!isServiceProvider && (
            <NavLink to='/create' onClick={showSidebar}>
              <div><p><b>Become A Service Provider</b></p>
                <small>Start Selling Your Services And Earn</small>
              </div>
            </NavLink>
          )}
          <div><p><b>Support</b></p>
            <small>Any Enquiries, any Issues</small>
          </div>
          <div><p><b>Settings</b></p></div>
          <div><p><b>About</b></p></div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
