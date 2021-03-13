import React from 'react'

const AlbumArt = (props) => {

    return (
    <div className="albumArt" >
        <img src={props.image} className="cover" alt="album cover image"></img>
        <div className="overlay"></div>

        <div className="icons">
            <img src="icons/heart.svg" className="heart" alt="heart icon"></img>
            <a href={props.albumUrl}>
                <img src="icons/play.svg" className="play" alt="play icon"></img>
            </a>
            <img src="icons/dots.svg" className="dots" alt="ellipses icon"></img>
        </div>
    </div>
    )
}

export default AlbumArt;