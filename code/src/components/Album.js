import React from "react";

import { Artist } from "./Artist";
import { Icons } from "./Icons";

import "./album.css";

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
            <figcaption className="artist-title">
                {props.item.artists.map(item => {
                    return (
                        < Artist key={item.id} item={item} />
                    )
                })}
            </figcaption>
        </article>
    )
}