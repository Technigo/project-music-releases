import React from 'react'
import { MenuBtns } from './MenuBtns'

export const Album = (props) => {
  return <div className="gallery-item">
            <div className='album-container'>
              <div className='albumFront-container'>
              <MenuBtns />
              <div className='image-container'>
                <img src={props.image} alt="album front"/> 
              </div>
              </div>
             <div className='title-container'>  
              <a className="album-name" href={props.albumLink}> {props.albumName}</a>
              <div className='artist-names'> 
                {props.artist}
              </div>
              <div className='info'>
              <p>Total tracks: {props.tracks}</p>
                <p>Release date: {props.release}</p>
              </div>
              </div>
            </div>
          </div>

}