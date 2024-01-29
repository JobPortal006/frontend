import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import SearchBar from './searchBar';

const Home = () => {
const navigate = useNavigate();
    const token = localStorage.getItem('googleToken');
    const otpToken = localStorage.getItem('otpToken');
    const loginToken = localStorage.getItem('loginToken');
    useEffect(()=>{
        if((token === null ) && (otpToken === null) && (loginToken === null)){
          navigate("/login");
          
        }
        
    });
  return (
    <div>

      <SearchBar />
    </div>
  )
}

export default Home
