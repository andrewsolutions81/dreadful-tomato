import React from 'react'

export default function SingleMovie({movie}) {
  const poster = movie.images['Poster Art'].url
  return (
    <ul>
      <li className='single-container' >
        <h1 className='single-title'>{movie.title}</h1>
        <p className='single-description'>{movie.description}</p>
        <img className="single-image" src={poster?poster:<div>Loading...</div>} alt="Cool Poster"></img>
      </li>
    </ul>
  )
}
