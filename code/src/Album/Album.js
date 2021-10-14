import React from 'react'

const Album = ({ image, albumTitle, albumLink }) => {
    return (
        <>
            <div className="album-cover">
                <img src={image} alt="album-card" className="image" />
                <div className="icons">
                    <img className="heart-icon" src="./icons/heart.svg" alt="heart icon" />
                    <a href={albumLink} target="_blank" rel="noreferrer noopener" title="Listen"><img className="play-icon" src="./icons/play.svg" alt="play icon" /></a>
                    <img className="dot-icon" src="./icons/dots.svg" alt="dot icon" />
                </div>
            </div>
            <a href={albumLink} title="View the album" target="_blank" rel="noreferrer noopener" className="album-title">{albumTitle}</a>
        </>
    )
}

export default Album