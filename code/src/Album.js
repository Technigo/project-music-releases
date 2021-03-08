import React from 'react'

export const Album = (props) => {
  return <div className="gallery-item">
            <div className='album-container'>
              <div className='image-container'> 
                <img src={props.image} /> 
              </div>
             <div className='title-container'>
              <h3> {props.albumName}</h3>
              <h4> {props.artist}</h4>
              </div>
            </div>
          </div>

}