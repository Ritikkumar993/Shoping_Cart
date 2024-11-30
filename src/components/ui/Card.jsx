import React from 'react'

const Card = ({movieData}) => {
    const {Poster, imdbID} =movieData;
  return (
    <li className='box-border rounded-md shadow-lg justify-center p-4'>
        <div className=''>
            <div className='shadow-lg rounded-md'>
                <img src={Poster} alt={imdbID} />
            </div>
            <div className='mt-4 '>
                <div className='flex flex-col items-center justify-center'>
                    <a href={`/movie/${imdbID}`} >
                        <button className='bg-red-500 rounded-md px-4 py-2 text-white hover:bg-red-600'>Watch now</button>
                    </a>
                </div>
            </div>
        </div>
    </li>
  )
}

export default Card