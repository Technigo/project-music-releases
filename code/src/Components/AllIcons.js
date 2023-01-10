import React from "react";

import heart from './heart.svg'
import play from './play.svg'
import dots from './dots.svg'


export const AllIcons = () => {
    return (
      <>  <img className="heartIcon" src={heart} alt="heart icon" />
        <img className="playIcon" src={play} alt="play icon" />
        <img className="dotsIcon" src={dots} alt="dots icon" /></>
    );
};
