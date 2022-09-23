import React from 'react';

/* import dots from "./public/icons/heart.svg";
import hearth from "./public/icons/play.svg";
import play from "./public/icons/dots.svg"; */ 

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
            <a href='https://open.spotify.com/search' target='_blank'><img
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



 {/* <div className="albumCard">
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
          </div>  */}