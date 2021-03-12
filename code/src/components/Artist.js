import React from 'react'


const Artist = (props) => {
    return(
        <div>
            {props.item.artists.map((artist) => {
                return (
                    <a target="_blank" rel="noopener noreferrer" href={artist.external_urls.spotify} key={artist.id} className="artist-container"> 
                        <h3 className="artist-name">
                            {artist.name}
                        </h3>
                    </a>
                )
            })}
        </div>
    )
}

export default Artist
  
