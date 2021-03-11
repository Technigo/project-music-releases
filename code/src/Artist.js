import React from 'react'

export const Artist = (props) => {
    return(
        // console.log(props.artists)


        // <div className="artist-container">
        //     key={artist.id} 
        //     artistUrl={artist.external_urls.spotify}
        //     artistName={artist.name}
        // </div>
        // return (null)
        <>
            {
            props.artists.map(artist => {
                return(
                    <a key={artist.id} className="artist" href={artist.external_urls} target="_blank" rel="noopener noreferrer">
                      {artist.name}
                    </a>
                    )
                })
            }
        </>
    )
}
