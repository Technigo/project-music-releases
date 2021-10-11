import React from 'react'


export const Album = props => {
    return (
        <section className="album-container" >
            <img className="album-cover" src={props.src} alt="album-cover" />
            <a href={props.titleUrl} target="_blank"><h1 className="album-title">{props.title}</h1></a>
            <a href={props.artistUrl} target="_blank"><h1 className="album-artist">{props.artist}</h1></a>
        </section>

    )
}
