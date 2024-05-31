import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import '../User/user.css'; // Import your CSS file for styling if necessary
import { useNavigate, useParams } from "react-router-dom";

export const Dropdown = ({ id }) => {
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const navLogin =() =>{
    navigate('/login');
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    // Handle the selected item here
    console.log(`Selected item: ${item}`);
    setIsOpen(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/getData/${id}`);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        <img id={`GameIcon1`} src={require('./userprofile.png')} alt="GameIcon" />
        {data ? (<h1>{data.name}</h1>):(<h1>user</h1>)}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item" onClick={() => handleItemClick('Item 2')}>
            {data ? (<h1>Email: {data.main_email}</h1>):(<h1>user</h1>)}
          </div>
          <div className="dropdown-item" onClick={() => handleItemClick('Item 1')}>
            <button onClick={navLogin}>Log out</button>
          </div>
        </div>
      )}
    </div>
  );
};

const Guest = ({ id }) => {
  const navigate = useNavigate();
  const loginNav = () => {
    navigate(`/login`);
  };
  const currentPath = window.location.pathname;

  return (
    <div className="headdiv">
      <h1>Welcome hungry mate! You arrived at the right place</h1>
      {currentPath === '/' ? (
        <button className='signLogin' onClick={loginNav}>Signup/Login</button>
      ) : (
        <Dropdown id={id}/>
      )}
    </div>
  );
};

const BuyType =({id})=>{
  const navigate=useNavigate();
  const currentPath = window.location.pathname;
  const orderNav =()=>{
    if(currentPath==='/')
    {
      window.alert("Please Sign in to continue")
      navigate(`/register`)
    }
    else
    {
      navigate(`/order/${id}`)
    }
  }
  const customizeNav =()=>{
    if(currentPath==='/')
    {
      window.alert("Please Sign in to continue")
      navigate(`/register`)
    }
    else
    {
      navigate(`/customize/${id}`)
    }
  }
  return(
    <>
    <div className='OrderTypes'>
      <button onClick={orderNav} className='burger-item'>
      <img className="product-image" src={require('./Order.png')} alt="ordername"/>
      <h2 className="product-name">Instant Burger</h2>
      </button>
    </div>
    <div className='OrderTypes'>
      <button onClick={customizeNav}>
      <img className="product-image" src={require('./MakeBurgerImage.png')} alt="ordername"/>
      <h2 className="product-name">Customize Burger</h2>
      </button>
    </div>
    </>
  );
};
export default function UserPage() {
  const { id } = useParams();
  return (
    <>
    <div className='userpage'>
      <Guest id={id} />
      <BuyType id={id}/>
    </div>
    </>
  );
}
