import React from 'react'

const AlbumImage = ({ hrefAlbum, image }) => {
    return (
        <>
        <div className="overlay">
        <a href={hrefAlbum} aria-label="Go to albums" target="_blank">
            <img className="album-image" src={image} alt='Album Cover Image'/>
            <div className="icons-container">
                    <img className="icons" id="heart" src="./icons/heart.svg" alt="heart"/>
                    <img className="icons" id="play" src="./icons/play.svg" alt="play"/>
                    <img className="icons" id="dots" src="./icons/dots.svg" alt="dots"/>
                </div>   
            </a>
        </div>   
        </>
    )
}


export default AlbumImage