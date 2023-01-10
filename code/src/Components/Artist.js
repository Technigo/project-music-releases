import React from "react"

export const Artist = (props) => {
    return (
        props.artist.map((artist, index) => {
          return (
            <a href={artist.external_urls.spotify} key={artist.name[index]}>
             {artist.name}
            </a>
          )
        })
        
    )

}