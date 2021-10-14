import React from 'react';
import Artist from './Artist';

const Album = (props) => {
    console.log(props)

    return (
        <>
        <div className="spotify-album">
            <div className="spotify-card-container">
            <div className="spotify-card">
                <img
                    src={props.album.images[1].url}
                    className="cover-img"
                    alt={props.album.name}
                />
                <div className="icons-container">
                    <img 
                        src="../icons/heart.svg"
                        className="heart"
                        alt="heart icon" 
                    />
                    <img 
                        src="../icons/play.svg"
                        className="play"
                        alt="play icon"
                    />
                    <img 
                        src="../icons/dots.svg"
                        className="dots"
                        alt="more icon"
                    />
                </div>
            </div>
            </div>
            <h2>
            {' '}
            <a href={props.album.external_urls.spotify} className="albumUrl" target="_blank" rel="noopener noreferrer">
                {' '}
                {props.album.name}
            </a>
            </h2>
            <h3>{props.album.artists[0].name}</h3>
        </div>
        </>
    )
}

export default Album