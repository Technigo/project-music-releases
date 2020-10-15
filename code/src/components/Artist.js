import React from 'react'
import './Artist.css'



export const Artist = (props) => { 

    return (
        <a href={props.artistLink} target="_blank" rel="noopener noreferrer">
          <p>{props.name}</p>
        </a>
    )
}
