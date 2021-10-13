import React from "react";

import { ReactComponent as Heart } from '../assets/heart.svg';
import { ReactComponent as Play } from '../assets/play.svg';
import { ReactComponent as Dots } from '../assets/dots.svg';

import "./icons.css";

export const Icons = () => {
    return (
        <div className="icons">
            <div role="img" title="Like button" className="heart-icon">
                < Heart />
            </div>
            <div role="img" title="Play button" className="play-icon">
                < Play />
            </div>
            <div role="img" title="More button" className="dots-icon">
                < Dots />
            </div>
        </div>
    )
}