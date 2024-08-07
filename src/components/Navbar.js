import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { AiFillHome } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa6";
import { IoChatbubbleSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="navbar-nav">
      <ul>
        <li><NavLink exact to="/" activeClassName="active"> <AiFillHome /> Home</NavLink></li>
        <li><NavLink to="/listings" activeClassName="active"><FaClipboardList /> Listings</NavLink></li>
        <li><NavLink to="/chat" activeClassName="active"><IoChatbubbleSharp /> Chat</NavLink></li>
        <li><NavLink to="/profile" activeClassName="active"><FaUser /> Profile</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
