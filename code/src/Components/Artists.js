import React from 'react'
import './Artists.css'

export const Artists = (props) => {

      return (
          <div className="artist-wrapper">
            <a className="artist-name" href={props.artistURL}>
              {props.artist}
            </a>
          </div>
        )
    
}
