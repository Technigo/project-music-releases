import React from "react";
import { AllIcons } from 'components/AllIcons';


export const Album = (props) => {
    return (
            <article className="all-albums">
                <div className="album-cover">
                    {/* <a href={props.albumDetails.external_urls.spotify} target="_blank"> */}
                    <img src={props.albumDetails.images[1].url} alt="Album Cover" />
                    <AllIcons />
                    {/* </a> */}
                </div>
                <a href={props.albumDetails.external_urls.spotify} target="_blank">
                    <p className="album-name">{props.albumDetails.name}</p>
                </a>
                <a href={props.albumDetails.artists[0].external_urls.spotify} className="artist-link" target="_blank">
                    <p className="artist-name">{props.albumDetails.artists[0].name}</p>
                </a>
            </article>
    );
};
