import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const handelClick = () =>{
        navigate('/about?name=Ritik&age=20');
    }

  return (
    <div>
        <Navbar />
        <p>This is the home page</p>
        <button onClick={handelClick}>Got to details</button>

    </div>
  )
}

export default Home