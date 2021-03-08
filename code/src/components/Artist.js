import React from 'react'


const Artist = (props) => {
    return(
        <>
        {props.item.artists.map((artist) => {
            return <a target="_blank" rel="noopener noreferrer" href={artist.external_urls.spotify} key={artist.id}>name {artist.name}</a>
        })}
        </>
    )
}

export default Artist
  
    //     {props.item.artists.map((artist) => {
    //         return <p key={artist.id}>name {artist.name}</p>
    //     })
    // )

