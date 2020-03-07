import React from 'react'


export const Album = (props) => {
  return (
    <div className="card">
    

       <div className="container">
        <a href={props.AlbumUrl} target="_blank">
            <img className="cardImg" src={props.AlbumImg.url}></img>
        </a>
        <div className="middle">
          <div className="text">
            <img className="heart" src="./icons/heart.svg"></img>
            <img className="play" src="./icons/play.svg"></img>
            <img className="dots" src="./icons/dots.svg"></img>
          </div>
        </div>
      </div>

      
      <div>
        <a href={props.AlbumUrl} target="_blank">
          <p>Album: {props.AlbumName}</p>
        </a>
        <a href={props.AlbumArtistUrl} target="_blank">
          <p>Artist: {props.AlbumArtist}</p>
        </a>
      </div>
    </div>
  )
}