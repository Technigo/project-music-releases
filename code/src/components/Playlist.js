import React from "react";
import "./playlist.css"

export const Playlist = (props) => {

    return (
        <div className="playlist-sidebar">
            <img className="playlist-cover" src={props.item.images[0].url} alt="playlist-cover" />
            <a className="playlist-title" href={props.item.external_urls.spotify}>{props.item.name}</a>
            <a className="playlist-owner" href={props.item.owner.external_urls.spotify}>by {props.item.owner.display_name}</a>
            <p className="playlist-tracks">{props.item.tracks.total} tracks</p>
        </div>
    )
}