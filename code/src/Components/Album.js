import React from 'react';
import Artist from 'Components/Artist'; 

// Component which includes structure for image, songname and artist
const Album = props => {
    return ( 
        <div className="album--wrapper">
            <img className="album--image" src={props.image} alt="album" />
            <h2 className="song-name">{props.songName}</h2>
            <p className="artist-name">{props.artistName}</p>
            <Artist />
        </div>
        )
}

export default Album