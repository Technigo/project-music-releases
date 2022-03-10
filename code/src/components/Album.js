import React from "react";
import { AllIcons } from 'components/AllIcons';

export const Album = (props) => {
    // console.log(props)

    return (
            <article className="all-albums">
                <a href={props.albumDetails.external_urls.spotify} target="_blank">
                    <img src={props.albumDetails.images[1].url} alt="Album Cover" />
                </a>
                    <AllIcons />
                <a href={props.albumDetails.external_urls.spotify} target="_blank">
                    <p className="album-name">{props.albumDetails.name}</p>
                </a>
                <a href={props.albumDetails.artists[0].external_urls.spotify} target="_blank">
                    <p className="artist-name">{props.albumDetails.artists[0].name}</p>
                </a>
            </article>
    );
};
