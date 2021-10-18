import React from "react";

const Album = (props) => {
  // console.log('PROPS', props);

  return (
    <>
      <div className="albumCard">
        <div className="banana">
          <div className="albumIcons">
            <img
              src="../icons/heart.svg"
              className="icon heart"
              alt="heart icon"
            />
            <img
              src="../icons/play.svg"
              className="icon play"
              alt="play icon"
            />
            <img
              src="../icons/dots.svg"
              className="icon dots"
              alt="more icon"
            />
          </div>
          <img src={props.albumimage} alt="Cover of album" />
        </div>

        <a className="albumLink" href={props.albumlink}>
          <h1 className="releaseNameText">{props.songtitle}</h1>
        </a>
      </div>
    </>
  );
};

export default Album;
