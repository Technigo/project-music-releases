import React from "react";

// Component for the image and icons on top

export const Images = props => {
    return (
        <div className="album-cover">
            <img src={props.image} className="image" alt="album cover" />
            <div className="image-icons">
                <img src="./icons/heart.svg" alt="heart" className="heart-icon" />
                <img src="./icons/play.svg" alt="play icon" className="play-icon" />
                <img src="./icons/dots.svg" alt="dots" className="dot-icon"/>
            </div>
        </div>
    )
}
