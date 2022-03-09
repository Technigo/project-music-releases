import React from 'react'

import {Artist} from './Artist'

// Named export
const Album = (props) => {
    return (
    <article className="Album">
        <img src={props.img} />
        <h2>{props.albumName}</h2>
        <a href={props.albumLink}>
            <p>{props.artistName}</p>
        </a>

         
    </article>
    )
}

export default Album