import React from 'react';

// Component which includes structure for image, songname and artist
const Album = props => {
    return ( 
        <>
            <img className="album--image" src={props.image} alt="album" />
            <h2 className="song-name">{props.songName}</h2>
            {/* <p className="artist-name">{props.artistName}</p> */}
        </>
        )
}

export default Album