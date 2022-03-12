import React from "react";
import { AllIcons } from 'components/AllIcons';
import { Artist } from 'components/Artist';




export const Album = (props) => {
    return (
            <article className="all-albums">
                <div className="album-cover">
                    {/* <a href={props.albumDetails.external_urls.spotify} target="_blank"> */}
                    <img src={props.albumDetails.images[1].url} alt="Album Cover" />
                    <AllIcons />
                    {/* </a> */}
                </div>
                <a href={props.albumDetails.external_urls.spotify} 
                target="_blank" 
                rel="noopener noreferrer">
                    <p className="album-name">{props.albumDetails.name}</p>
                </a>
                <Artist />
            </article>
    );
};



