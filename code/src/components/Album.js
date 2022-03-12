import React from "react";

import { AllIcons } from 'components/AllIcons';
import { Artist } from 'components/Artist';


export const Album = (props) => {
    return (
            <article className="all-albums">
                <div className="album-cover">
                    <img src={props.albumDetails.images[1].url} alt="Album Cover" />
                    <AllIcons />
                </div>

                <a href={props.albumDetails.external_urls.spotify} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="album-name">
                    <p>{props.albumDetails.name}</p>
                </a>
                
                <p className="artist-name">{props.albumDetails.artists.map((artist) => {
                    return (
                        <Artist key={artist.id} artist={artist} />
                        )
                    })}
                </p>
            </article>
    );
};
