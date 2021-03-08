import React from 'react'


const Artist = (props) => {
    return(
        <>
            {props.item.artists.map((artist) => {
                return <a target="_blank" rel="noopener noreferrer" href={artist.external_urls.spotify} key={artist.id}> <h3 className="artist-name">{artist.name}</h3></a>
            })}
        </>
    )
}

export default Artist
  
