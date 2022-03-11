import React from "react"

export const Artist = (props) => {
console.log(props)
    return (
        <a className="artist-name" href={props.item.external_urls.spotify} target='_blank' alt='artist name' rel="noopener noreferrer">
           {props.item.name} </a> 
    )
}