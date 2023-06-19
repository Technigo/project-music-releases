import React from 'react';

const Album = (props) => {
  console.log(props);
  return (
    <div className="album-containers">
      <p>{props.album.name}</p>
      <div key={props.album.id}>
        <h2>{props.title}</h2>

        <div className="icons-container">
          <a href={props.album.external_urls.spotify}>
            <img className="heart" src="./icons/heart.svg" alt="heart icon" />
            <img className="play" src="./icons/play.svg" alt="play icon" />
            <img className="dots" src="./icons/dots.svg" alt="dots icon" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Album;
