import React from "react";
import "./album.css";
import { Artist } from "./Artist";
import { Icons } from "./Icons";

export const Album = (props) => {
    return (
        <div className="albumContainer">
            <div className="albumWrapper">
                <img src={props.item.images[1].url} alt="album cover" className="albumCover" />
                <Icons />
            </div>
            <div>
                <a className="albumTitle" href={props.item.external_urls.spotify}>{props.item.name}</a>
            </div>

            <div className="artistTitle">
                {props.item.artists.map(item => {
                    return (
                        < Artist key={item.id} item={item} />
                    )
                })}

            </div>
        </div>
    );
};
