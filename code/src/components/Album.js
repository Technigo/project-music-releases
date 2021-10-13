import React from 'react'
import { Icons } from './Icons'

export const Album = props => {
    return (

        <section>
            <div className="album-image-container">
                <div className="album-cover-overlay">
                    <Icons />
                </div>
                <img className="album-image" src={props.src} alt="album-cover" />
            </div>

            <a href={props.titleUrl} target="_blank" rel="noopener noreferrer"><h1 className="album-title">{props.title}</h1></a>
            <a href={props.artistUrl} target="_blank" rel="noopener noreferrer"><h1 className="album-artist">{props.artist}</h1></a>
        </section>

    )
}
