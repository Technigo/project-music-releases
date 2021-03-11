import React from "react";


// Component for the artist name and link

export const Artist = props => {
    return (
        <a href={props.artistLink} className="artist">
            {props.artistName}
        </a>
    )
}
