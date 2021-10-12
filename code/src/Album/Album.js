import React from 'react'

const Album = ({ image, albumTitle, albumLink }) => {
    return (
        <>
            <div className="album-cover">
                <img src={image} alt="album-card" className="image" />
                <div className="icons">
                    <img className="heart-icon" src="./icons/heart.svg" />
                    <img className="play-icon" src="./icons/play.svg" />
                    <img className="dot-icon" src="./icons/dots.svg" />
                </div>
            </div>
            <a href={albumLink} target="_blank" rel="noreferrer noopener" className="album-title">{albumTitle}</a>
        </>
    )
}

export default Album