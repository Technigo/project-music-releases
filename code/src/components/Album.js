import React from "react";

const Album = (props) => {
 const {images, artists , name} = props.items
  return (
    <>
    <div className="single-album">

      <div className="img-container">
        <img className="album-cover" src={images[1].url} alt="Album cover" />  
          <div className="album-icons">
            <img src="../icons/heart.svg" className="heart" alt="heart icon" />
            <a rel="noopener noreferrer" href={props.playLink} target='_blank' ><img src="../icons/play.svg" className="play" alt="play icon"/></a>
            <img src="../icons/dots.svg" className="dots" alt="more icon"/>
          </div>
      </div> 

      <h2>
        {name && name}
      </h2>
        
        {artists.map((artist) => {

          return(
            <h3>
            {artist.name}
            </h3>
          )
        })}  
         
    </div>
    </>
  );

};

export default Album;