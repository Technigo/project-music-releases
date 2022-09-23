import React from 'react';

const Cover = (props) => {
   /*  console.log(props.img) */
   //albumIcons is where we put all the icons & will be styled with flex
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

//line 27: we target picture, it's the 2nd array of the object (img will be connected to a name in app.js)