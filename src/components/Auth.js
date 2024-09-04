import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import './Auth.css';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";


function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      <h3>Welcome To</h3>
      <h1>ServiceSpin</h1>
      <p>Your one-stop solution for all services.</p>
      {isLogin ? (
        <Login onLogin={onLogin} />
      ) : ( 
        <Signup />
      )}
      <div className="auth-toggle">
        {isLogin ? (
          <p>
            Don't have an account?{' '}
            <span onClick={toggleAuthMode} className="auth-toggle-link">
              Sign Up
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <span onClick={toggleAuthMode} className="auth-toggle-link">
              Log In
            </span>
          </p>
        )}
      </div>
      <div className='auths'>
        <p>Or Continue With</p>
        <div><span><FcGoogle /></span> Google</div>
        <div><span><FaApple /></span> Apple ID</div>
        <div><span ><FaFacebook /></span> Facebook</div>
      </div>
    </div>
  );
}

export default Auth;
