import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import SearchBar from './searchBar';

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

      <SearchBar />
    </div>
  )
}

export default Home
