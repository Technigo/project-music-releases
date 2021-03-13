import React from 'react'

const Artists = (props) => {

            return props.artists.map((artist) => {
            return (
                
                <a href={artist.external_urls.spotify} key={artist.id}>
                  <h5 className="artist-name">
                     {artist.name}
                  </h5>
                </a>
            )
            })
    
    
}

export default Artists