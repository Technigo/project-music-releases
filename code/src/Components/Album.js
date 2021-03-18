import React from 'react';
import { Artists } from './Artists.js';

export const Album = (props) => {
    console.log(props);
    return (
        <>
            <div className="album-container">
                <div className="image-container">
                    <img className="albumcover" src={props.image} alt="Album cover" />
                    <div className="icon-container hidden">
                        <img className="heart-icon" src="/icons/heart.svg" alt="Like-bottom"/>
                        <img className="play-icon" src="/icons/play.svg" alt="Play"/>
                        <img className="dots-icon" src="/icons/dots.svg" alt="Menue"/>
                    </div>
                </div>
                <div className="text-container">
                    <a href={props.albumURL} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <h2 className="album-name">{props.albumName}</h2>
                    </a>
                    <div className="artist-container">
                    {
                        props.artists.map(artist => (
                            <Artists artistName={artist.name} artistURL={artist.external_urls.spotify}/>
                        ))
                    }
                    </div>
                </div>
            </div>
        </>
    );
};