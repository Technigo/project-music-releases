import React from 'react';

const AlbumCard = (props)=> {
    return (
    <div className="album-card-container">
        <div className="album-image-container">
            <img className="album-image" src={props.image} alt="Album cover" />
            <div className="album-image-overlay">
                <img className="heart-icon" src="icons/heart.svg" alt="heart" /> 
            </div>
        </div>
        <div className="album-name">{props.album}</div>
        <div className="album-artist">{props.artist.join(", ")}</div>
    </div>
    );
};

export default AlbumCard;