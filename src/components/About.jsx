import React from 'react'
import Navbar from './Navbar'
import { useSearchParams } from 'react-router-dom'

const About = () => {
    const [ searchPramps ] = useSearchParams();

    const name =searchPramps.get('name')|| 'Unknown';
    const age = searchPramps.get('age')|| 'Unknown';

    // const name =searchPramps.get('name');
    // const age = searchPramps.get('age');

  return (
    <div>
        <Navbar />
        <h1>About</h1>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
    </div>
  )
}

export default About