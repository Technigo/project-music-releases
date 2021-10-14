import React from 'react';
import ArtistName from './ArtistName';

import { ReactComponent as Heart} from "../icons/heart.svg";
import { ReactComponent as Play} from "../icons/play.svg";
import { ReactComponent as Dots} from "../icons/dots.svg";

const AlbumCard = (props)=> {
    // console.log(props.artistUrl)

    

        return (
    <div className="album-card-container">
        <div className="album-image-container">
            <img className="album-image" src={props.image} alt="Album cover" />
            <div className="album-image-overlay">
                {/* <img className="heart-icon" src="icons/heart.svg" alt="heart" /> */}
                <Heart className="heart-icon"/>
                <Play className="play-icon"/>
                <Dots className="dots-icon"/>
            </div>
        </div>
            <a className="album-name" href={props.albumUrl} target="_blank">{props.album}</a>
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