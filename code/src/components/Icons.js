import React from "react";
import "./icons.css";

const Icon = () => {
    return (
        <div className="icons">
            <img src="icons/heart.svg" alt="like button" className="heartIcon" />
            <img src="icons/play.svg" alt="play button" className="playIcon" />
            <img src="icons/dots.svg" alt="more button" className="dotsIcon" />
        </div>
    )
}
export default Icon;