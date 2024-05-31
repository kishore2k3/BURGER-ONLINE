import React, { useState } from 'react';
import axios from 'axios';
import '../Register/registration.css'
import { useNavigate } from 'react-router-dom';
const RegistrationForm = () => {
  const navigate = useNavigate();
  const LoginNav = () =>{
    navigate('/login')
  }
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phone_no, setPhone_no] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: {
        email:email,
        password: password
      },
      name: name,
      main_email: email,
      phone_no: phone_no
    };

    axios.post(`http://localhost:8080/register/${email}`, data)
    
      .then(response => {
        if(response.data==="Email Id is already Registered")
        {
          window.alert(response.data);
        }
        else
        {
          window.alert("Registration Sucessfull");
          navigate(`/index/${response.data}`);
        }
      })
      .catch(error => {
        // Handle error
        window.alert(error);
      });
  };

  return (
    <>
    <div className='backgroundSign'></div>
    <div className='registerdiv'>
    <form onSubmit={handleSubmit} className='registration-form'>
      <input type="email" placeholder='email_id' value={email} onChange={(e) => setEmail(e.target.value)} required/><br/><br/>
      <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} required/><br/><br/>
      <input type="text" placeholder='phone_no' value={phone_no} onChange={(e) => setPhone_no(e.target.value)} required/><br/><br/>
      <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required/><br/><br/>
      <button type="submit">Register</button><br/><span className='moveOr'>------------------OR------------------</span><br/> <button id="loginbutton" onClick={LoginNav} type="submit">Log in</button>
    </form>
    </div>
    </>
  );
};

export default RegistrationForm;
