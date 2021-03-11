import React from "react";

// Component for the album name and link

export const Album = props => {
    return (
        <a href={props.albumLink} className="album-title">
            {props.albumTitle}
        </a>
    )  
}