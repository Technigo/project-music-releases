import React from "react";

export const Images = props => {
    return (
    <div class="album-cover">
        <img src={props.image} class="image" alt="album image" />
        <div class="image-icons">
            <img src="./icons/dots.svg" alt="dots" class="dot-icon"/>
            <img src="./icons/play.svg" alt="play icon" class="play-icon" />
            <img src="./icons/heart.svg" alt="heart" class="heart-icon" />
        </div>
    </div>
    )
}
