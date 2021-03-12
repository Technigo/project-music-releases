import React from 'react'
import { Artist } from './Artist'

export const Album = (props) => {

        return (
            <div className="album">
                <div className="image-container">
                    <img src={props.imageSrc} alt={props.albumName}></img>
                        <div className="overlay">
                            <div className="icons-container">
                                <img className="heart" src="./icons/heart.svg"/>
                                <img className="play-button" src="./icons/play.svg"/>
                                <img className="dots" src="./icons/dots.svg"/>
                            </div>
                        </div>
                </div>
                <p className="album-title">{props.albumName}</p>
                <div className="artists">
                    <Artist key={props.id} artists={props.artists} />
                </div>
            </div>
        )
    
}
