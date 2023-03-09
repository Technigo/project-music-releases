import React from 'react';

const Artwork = (props) => {
    return (
       <>
      <div className='album-overlay'>
        <div className="albumIcons">
            <img
            src="../icons/heart.svg"
            className="heart"
            alt="like icon"
            />
            <a href={props.item.external_urls.spotify} target="_blank" rel="noopener noreferrer"><img
            src="../icons/play.svg"
            className="play"
            alt="play icon"
            /></a>
            <img
            src="../icons/dots.svg"
            className="dots"
            alt="more icon"
            />
        </div>
            <img src={props.img[1].url} /> 
      </div>
         </>    
)}

export default Artwork;