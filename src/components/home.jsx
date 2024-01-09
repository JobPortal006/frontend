import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import SearchBar from './searchBar';
import Home1 from './Home1';
const Home = () => {
const navigate = useNavigate();
    const token = localStorage.getItem('googleToken');
    useEffect(()=>{
        if(token === null || token === undefined){
            navigate('/login');
        }
    });
  return (
    <div>
      <Home1 />

      <SearchBar />
    </div>
  )
}

export default Home
