import React from "react";

export const Album = (props) => {
    // console.log(props)

    return (
            <article className="all-albums">
                <a href={props.albumUrl} target="_blank"><img src={props.imageUrl} alt="Album Cover" /></a>
                <a href={props.albumUrl} target="_blank"><p className="album-name">{props.name}</p></a>
                <a href={props.artistUrl} target="_blank"><p className="artist-name">{props.title}</p></a>
            </article>
    );
};
