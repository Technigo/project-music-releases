import React from 'react';

export const Album  = (props) => {

    return (
    <div className="card">
        <a href={props.href}  target="_blank" rel="noopener noreferrer">
            <img src={props.image} alt="" className="album-img" />
            <p className="albumTitle">{props.title}</p>
            {/* <div className="icons-container">
                <img className="icon" src="./icons/heart.svg" alt="heart-icon"/>
                <img className="icon" src="./icons/play.svg" alt="play-icon" />
                <img className="icon" src="./icons/dots.svg" alt="dots-icon" />
            </div> */}
        </a>
        <a href={props.hrefArtist} className="artistName" target="_blank" rel="noopener noreferrer">
            <p >{props.artist}</p>
        </a>
        {/* <div className="album-artists">
            {props.artists.map((artist, index) => {
                
                return ( 
                <div>
                    <p className="song-name">{props.name}</p>
                    <a key={artist.id} href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                        <p className="artist-name">{artist.name}</p>
                    </a>
                </div>
            )})}
        </div> */}
    </div>
    );
};