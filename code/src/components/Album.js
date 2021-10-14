import React from "react";

import { Icons } from "./Icons";
import { Artist } from "./Artist";

import "./album.css";

    // Here we provide the album covers and import the <Icons/> component,
    // we go on to provide the album title with a link
    // and finally the artist(s) imported from the <Artist/> component
    // where we add a key to them
export const Album = (props) => {
    return (
        <article className="album-container">
            <figure className="album-wrapper">
                <img
                    className="album-cover"
                    src={props.item.images[1].url}
                    alt={'Cover of ' + props.item.name}
                />
                <Icons />
            </figure>
            <figcaption className="album-title">
                <a className="album-title" href={props.item.external_urls.spotify}>
                    {props.item.name}
                </a>
            </figcaption>
            <figcaption className="artist-bar">
                {props.item.artists.map(item => {
                    return (
                        < Artist key={item.id} item={item} />
                    )
                })}
            </figcaption>
        </article>
    )
}