import React from 'react'
import { ReactComponent as Heart} from 'heart.svg'
import { ReactComponent as Play} from 'play.svg'
import { ReactComponent as Dots} from 'dots.svg'


export const Album = (props) => (
  <div>
    <div className="album-cover">
      <img src={props.image}/>
      <div className="heart-icon"><Heart /></div>
      <div className="play-icon"><Play /></div>
      <div className="dots-icon"><Dots /></div>
    </div>

    <div className="album-name">
      <a className="album-link" href={props.linkalbum} target="_blank" rel="noopener noreferrer">
      {props.album}
      </a>
    </div>

    <div className="artist-name">
      <a className="artist-link" href={props.linkartist} target="_blank" rel="noopener noreferrer">
      {props.artist} 
      </a>
    </div>
  </div>
)