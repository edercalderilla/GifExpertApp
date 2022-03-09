import React from 'react'
import 'animate.css';

export const GifGridItem = ({id, title, url}) => {
    
  return (
    <div className='card animate__animated animate__fadeIn'>
        <img src={url} alt='img'></img>
        <p>{title}</p>
    </div>
  )
}
