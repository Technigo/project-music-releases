import React from 'react';

const Cover = (props) => {
    console.log("Hello")
    console.log(props.img)
    return (
       <>
      <div className='cover-card'>
        <div className="albumIcons">
            <img
            src="../icons/heart.svg"
            className="heart"
            alt="heart icon"
            />
            <a href='https://open.spotify.com/search' target='_blank' rel="noopener noreferrer"><img
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

export default Cover;
