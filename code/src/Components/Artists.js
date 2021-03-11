import React from 'react'
import './Artists.css'

export const Artists = (props) => {

  return (
      <>
        {props.albumContent.artists.map((artists) => {
          
          return <div 
                  key={artists.id} 
                  className="artist-name">
                  <a href={artists.external_urls.spotify}>{artists.name}</a>
                  </div>
          
        })}
      </>
  )
}
