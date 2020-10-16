import React from "react";
import "./album.css";
import { Artist } from "./Artist";
import { Icons } from "./Icons";

export const Album = (props) => {
    return (
        <div className="album-container">
            <div className="album-wrapper">
                <img src={props.item.images[1].url} alt="album cover" className="album-cover" />
                <Icons />
            </div>
            <div>
                <a className="album-title" href={props.item.external_urls.spotify}>{props.item.name}</a>
            </div>

            <div className="artist-title">
                {props.item.artists.map(item => {
                    return (
                        < Artist key={item.id} item={item} />
                    )
                })}

            </div>
        </div>
    );
};
