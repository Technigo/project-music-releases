import React from 'react'

export const Album = (props) => {

    return (
        <article className="Album-container">
            <h1>{props.item.name}</h1>
            <p>{props.item.release_date}</p>
            <p>{props.item.artists[0].name}</p>
        </article>
    )
}