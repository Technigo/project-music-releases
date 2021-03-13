import React from 'react'


export const Album = (props) => {
    return (
        <div className="card"> 
          <div className="picture">
            <a href={props.albumurl}>         
            <img className="image" src={props.picture} alt="album cover"/></a>
            <div className="icons">
            <img className="heart-icon" src="icons/heart.svg" alt="" />
            <img className="play-icon"  src="icons/play.svg" alt="" />
            <img className="dots-icon"  src="icons/dots.svg" alt="" />
            </div>
        </div>
            <h2 className="albums-name">{props.name}</h2>
            <div>
            <a className="link" href={props.externalurls}>
            <h3 className="artist-name">{props.artist}</h3></a>           
        </div>
        </div>

    )
}
