import React from 'react'
import { ReactComponent as DotsFromBundle } from 'icons/dots.svg'
import { ReactComponent as HeartFromBundle } from 'icons/heart.svg'
import { ReactComponent as PlayFromBundle } from 'icons/play.svg'

export const Album = (props) => {
  return (
    <div className="Album">
      <div className="songImage" >
        <div className="songIcons">
          <HeartFromBundle />
          <PlayFromBundle className="play" />
          <DotsFromBundle />
        </div>
        <a href={props.url}><img id="albumCover" src={props.src} alt="" width="250px" height="auto" /></a>
      </div>
      <div className="songName">
        <h2><a href={props.url}>{props.songName}</a></h2>
      </div>
      <div className="songArtist">
        <p><a href={props.artistUrl}>{props.songArtist}</a></p>
      </div>
    </div>
  );
};