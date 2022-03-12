import React from "react";
import { AllIcons } from 'components/AllIcons';
import { AlbumList } from "./AlbumList";




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
                <a href={props.albumDetails.artists[0].external_urls.spotify} 
                // className="artist" 
                target="_blank" 
                rel="noopener noreferrer">
                    <p className="artist">{props.albumDetails.artists[0].name}</p>
                </a>
            </article>
    );
};

export function ArtistList () {
    return (
        <div className= "artist-list">
        {
            Album && Album.map((album, index) => {
                return(
                <span key={ album.id }> 
                { ( index ? ',' : '') + album.title}
                </span>
            )
        })
    }
    </div>
    );
}

