import React from 'react';

<<<<<<< HEAD
export const AlbumCover = (props) => {
  return (
    
    // <section className="album-cover">
    // <div className="cover-icons-container">
    //   <div className="cover-container">
    //     <img src={props.imgUrl} alt="Album cover" />
    //   </div>

    //   <div className="icons-container">
    //     <img className="hart-icon" src="./icons/heart.svg" alt="heart-icon" />
    //     <img className="play-icon" src="./icons/play.svg" alt="play-icon" />
    //     <img
    //       className="dot-icons"
    //       src="./icons/dots.svg"
    //       alt="three dots-icon"
    //     />
    //   </div>
    // </div>
    // </section>
  );
};
=======
const AlbumCover = ({}) => {
  return (
    <div className="cover-icon-container">
      <div className="cover-container">
        <img src={url} alt="Album Cover"></img>
      </div>
      <div className="icon-container">
        <img
          className="heart"
          src="./public/icons/heart.svg"
          alt="Heart Icon"
        ></img>
        <img
          className="play"
          src="./public/icons/play.svg"
          alt="Play Icon"
        ></img>
        <img
          className="dots"
          src="./public/icons/dots.svg"
          alt="Dots Icon"
        ></img>
      </div>
    </div>
  );
};

export default AlbumCover;
>>>>>>> ab59a9f86653c79c4af1d0520c2eaad3f8edd83e
