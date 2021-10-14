import React from 'react';
import ArtistName from './ArtistName';

const AlbumCard = (props)=> {
    // console.log(props.artistUrl)

    

        return (
    <div className="album-card-container">
        <div className="album-image-container">
            <img className="album-image" src={props.image} alt="Album cover" />
            <div className="album-image-overlay">
                <img className="heart-icon" src="icons/heart.svg" alt="heart" /> 
            </div>
        </div>
        <div className="album-name">{props.album}</div>
         <div className="album-artist">{props.artist.map( (name, index) => {
            return (
            <a href={props.artistUrl[index]} target="_blank">{<ArtistName name={name} amount={index}/>}</a>
            )
        })
            }  
        </div>
        
    </div>
    );
};

export default AlbumCard;