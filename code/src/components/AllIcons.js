import React from "react";

import HeartIcon from './Icons/heart.png'
import PlayIcon from './Icons/play.png'
import EllipsisIcon from './Icons/ellipsis.png'


export const AllIcons = () => {
    return (
        <div className="Icon-Container">
            <img className="iconHeart icons" src={HeartIcon} alt="A heart icon that works as a button" />
            <img className="iconPlay icons" src={PlayIcon} alt="The icon of a play button" />
            <img className="iconEllipsis icons" src={EllipsisIcon} alt="An elipsis icon that works as a button" />
        </div>
    );
};