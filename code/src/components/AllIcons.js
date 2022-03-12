import React from "react";

import HeartIcon from './Icons/heart.png'
import PlayIcon from './Icons/play.png'
import EllipsisIcon from './Icons/ellipsis.png'


export const AllIcons = () => {
    return (
        <div className="overlay">
            <img className="icon-heart icons" src={HeartIcon} alt="A heart icon that works as a button" />
            <img className="icon-play icons" src={PlayIcon} alt="The icon of a play button" />
            <img className="icon-ellipsis icons" src={EllipsisIcon} alt="An elipsis icon that works as a button" />
        </div>
    );
};

