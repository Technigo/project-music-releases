import React from "react";
import DescriptionContainer from "./DescriptionContainer";
import { ReactComponent as Logo } from '../assets/heart.svg'

const AlbumCard = props => {
  console.log("props.artist",props.artist)
  console.log("props", props)
  return (
    <div className = "albumCard-container">
    <article className="album-card">
      <div className="img-container">
        <img className="cover-img" src={props.img} alt="album or single cover" />
        <div className = "overlay">
          <div className="icon-container">
            <img className="icon" src="./icons/heart.svg" />
            <img className="icon-play" src="./icons/play.svg" />
            <img className="icon" src="./icons/dots.svg" />
          </div>
        </div>  
      </div>
      </article>
      <DescriptionContainer 
        title = {props.song}
        singer = {props.artist}
        hrefAlbum = {props.hrefAlbum}
      />
   
    </div>
  );
};

export default AlbumCard;
