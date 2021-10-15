import React from 'react';
import ArtistName from './ArtistName';

import { ReactComponent as Heart} from "../icons/heart.svg";
import { ReactComponent as Play} from "../icons/play.svg";
import { ReactComponent as Dots} from "../icons/dots.svg";

// This function will be called after each artist name display and will determine what kind of seperator should be used
const insertSeperator = (index, length) => {
    if (index === length - 2) { //Between the second to last and last artist " & " will show
        return " & ";
      } else if (index < length - 2) { //If more than 2 artists, they will seperate with ","
        return ", ";
      }
}

const AlbumCard = (props)=> {
    return (
        <div className="album-card-container">
            <div className="album-image-container">
                <img className="album-image" src={props.image} alt="Album cover" />
                <div className="album-image-overlay"> {/* In order to style svg-icons we imported them as react-components*/}
                    <Heart className="heart-icon"/>
                    <Play className="play-icon"/>
                    <Dots className="dots-icon"/>
                </div>
            </div>
            <a className="album-name" href={props.albumUrl} target="_blank" rel="noopener noreferrer">{props.album}</a> 
            <div className="album-artist">{props.allArtists.map( (artist, index) => {
                return (
                    <span>
                    <a 
                        key={artist.artistId} 
                        href={props.artistUrl[index]} 
                        target="_blank" 
                        rel="noopener noreferrer">
                            {<ArtistName name={artist.artistName} />}
                    </a>
                    
                    {insertSeperator(index, props.allArtists.length)}
                    </span>
                )
            })
        }  
            </div>
        </div>
    );
};

export default AlbumCard;