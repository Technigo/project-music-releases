import React from "react";
import './albumcover.css'
import { ReactComponent as Dots } from 'icons/dots.svg'
import { ReactComponent as Heart } from 'icons/heart.svg'
import { ReactComponent as Play } from 'icons/play.svg'

export const AlbumCover = (props) => (

  <div className="albumCover">
    <img src={props.item.images[1].url} alt="Album cover" className="albumCoverImage"></img>

    <div className="albumIcons">
      <div className="heart-icon"><Heart /></div>
      <div className="play-icon"><Play /></div>
      <div className="dots-icon"><Dots /></div>
    </div>
  </div>


)