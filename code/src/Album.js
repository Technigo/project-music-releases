import React from "react"
import './album.css'


export const Album = (props) => {
    // console.log('props', props)
    //console.log(props.artists)

return (

    <div className="album-card">
    <div className="album-cover" style={{ backgroundImage: `url(${props.image}) `}}>
    <h3 class="name">{props.name}</h3>
    {props.artists.map(artist => (
    <h3 class="artist">{artist.name}</h3>
    ))}


  <div className="moreDetails">
    <div className="icons">
      <img className="icon-heart" src="icons/heart.svg" alt="Heart" />
      <img className="icon-play" src="icons/play.svg" alt="Play" />
      <img className="icon-dots" src="icons/dots.svg" alt="Dots" />
    </div>
</div>
</div>


<div className="links">
<a href={props.link}><h1>{props.name}</h1></a>
{props.artists.map(artist => (
<a href={artist.href}><h2>{artist.name}</h2></a>))}
</div>
</div>

    );
};