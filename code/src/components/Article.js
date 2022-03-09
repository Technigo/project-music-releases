import React from "react";

export const Article = (props) => {
    return (
    <article className="album">

      <div className="album-cover">
                    <img className="album-image" src="https://www.placecage.com/328/328" alt="album cover" />

                    <div className="icons">
                      <img className="icon" src="/icons/heart.svg" alt="heart icon" />
                      <img className="play" src="/icons/play.svg" alt="play icon" />
                      <img className="icon" src="/icons/dots.svg" alt="dots icon" />
                    </div>
      </div>



      <p className="title">{props.type}</p>
      <p className="artist">{props.artist}</p>
    </article>
    )
}