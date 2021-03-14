import React from 'react'
import { Artist } from './Artist'


export const Album = (props) => {
    if (props.albumType === "album") {
        console.log(props)
        return (
            <div className="album">
                    <div className="image-container">
                        <div className="icons-container">
                            <img className="heart" src="./icons/heart.svg" alt="Heart"/>
                            <img className="play-button" src="./icons/play.svg" alt="Play"/>
                            <img className="dots" src="./icons/dots.svg" alt="More"/>
                        </div>
                        <img src={props.imageSrc} alt={props.albumName} />
                    </div>
                <a className="album-title" href={props.link} target="_blank" rel="noopener noreferrer">{props.albumName}</a>
                <div className="artists">
                    <Artist key={props.id} artists={props.artists} />
                </div>
            </div>
        )
    } else {
        return (null)
    }
    
}
