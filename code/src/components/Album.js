import React from 'react';
import Artist from './Artist';

const Album = (props) => {
    console.log(props)

    return (
        <>
        <div className="spotify-album">
            <div className="spotify-card-container">
            <div className="image-container">
                <img
                    src={props.album.images[1].url}
                    className="cover-img"
                    alt={props.album.name}
                />
                <div className="icons-container">
                    <img 
                        src="../icons/heart.svg"
                        className="icon heart"
                        alt="heart icon" 
                    />
                    <img 
                        src="../icons/play.svg"
                        className="icon play"
                        alt="play icon"
                    />
                    <img 
                        src="../icons/dots.svg"
                        className="icon dots"
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
            <div className="artists">
                {props.album.artists.map((artist, index) => {
                    return (<Artist key={artist.id} artistLink={artist.external_urls.spotify}
                        artistName={artist.name} />
                    )
                })
                }
            </div>
        </div>
        </>
    )
}

export default Album