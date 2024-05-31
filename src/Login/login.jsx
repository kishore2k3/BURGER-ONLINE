import axios from 'axios';
import React, { useState } from 'react';
import '../Login/login.css'
import {useNavigate} from 'react-router-dom';
// import imageBackground from '../Login/burgerWallpaper.webp'
export default function LoginForm(){
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const RegisterNav = () =>{
    navigate('/register');
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password
    };

    axios.post('http://localhost:8080/verifyLogin', data)
      .then(response => {
        if(response.data==="Login Unsuccessfull! Check email and password"|| response.data==="Login Unsuccessfull! Incorrect Password" || response.data==="Account isn't found or email incorrect")
        {
          window.alert(response.data);
        }
        else
        {
          navigate(`/index/${response.data}`);
        }
      })
      .catch(error => {
        window.alert(error);
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value); 
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
    <div className='backgroundSign'>
    </div>
      <div className="logindiv">
        <form onSubmit={handleFormSubmit} id='loginform'>
          <div className='emailInput'>
          <input type="text" placeholder="email" id="email" required value={email} onChange={handleEmailChange}/><br /></div>

          <div>
          <input type="password" placeholder="password" id="password" required value={password} onChange={handlePasswordChange}/><br /></div>
          <button type="submit">Log In</button><br/> <span className='moveOr'>------------------OR------------------</span><br/> <button  onClick={RegisterNav}>Sign in</button>
        </form>
    </div>
    </>
  );
};

