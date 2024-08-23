  import React from 'react';
  import './Home.css';
  import { IoMdSearch } from "react-icons/io";  
  import { FaPlus } from "react-icons/fa";
  import { NavLink } from 'react-router-dom';

  const Home = () => {
  
    return (
      <div className='home'>
        <div className='main-cont'>
      
        <p>Your one-stop solution for all services.</p>
        <div className='search-input'>
      <span><IoMdSearch /></span>  <input placeholder='What Are You Looking For'></input>
        </div>
        <div className='services-container'>
          <div>
          <div className='services'>
              <div>
                <h2>Plumbers</h2>
                <img src='./imgs/samples/plamber.jpeg' alt='plumber'/> 
              </div>
              <div>
              <h2>Electrician</h2>
              <img src='./imgs/samples/elecrician.jpg' alt='electrician'/> 
              </div>
              <div>
              <h2>Mechanics</h2>
              <img src='./imgs/samples/mechanic.jpg' alt='mechanic'/> 
              </div>
              <div>
              <h2>Maids</h2>
              <img src='./imgs/samples/maid.jpg' alt='maid'/> 
              </div>
          </div>
          <div>
            <NavLink to="/listings">
              <button><FaPlus /> More Services</button>
            </NavLink>
            
          </div>
          </div>
          <div className='past-bkings'>
            <h3>Your Past Bookings</h3>
          </div>
        </div>
        </div>
      </div>
    );
  };

  export default Home;
