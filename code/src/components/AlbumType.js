import React from "react";

// Component for the album name and link

export const AlbumType = props => {
    return (
        <p className="album-type">
            {props.type}
        </p>
    )  
}