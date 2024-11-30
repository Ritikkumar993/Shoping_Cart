import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import Card from './ui/Card';
import { getMovie } from '../services/Getservices';

const Movie = () => {
    const [data, setData] = useState([]);

    //const API ="https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1";

    const getMoviesData = async () => {
        try{
            const res = await getMovie();
            console.log(res.data.Search);
            setData(res.data.Search);
        }
        catch(error){
            console.error("Error messge", error);
            console.error("Error status", error.response.status);
            console.error("Error data", error.response.data);
        }
    }

    useEffect(() => {
        getMoviesData();
    },[])
  return (
    <div>
        <ul className='container mx-auto items-center  grid grid-cols-4 gap-4'>
            {data.map((item) => {
                return <Card key={item.imdbID} movieData={item} />
            })}
        </ul>
    </div>
  )
}

export default Movie