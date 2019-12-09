import React from "react";
import './sidebar.css'

export const Sidebar = (props) => {
  return (
    <section className="playlist-card">
      <img className="playlist-cover" src={props.playlist.images[0].url} alt="playlist cover" />
      <a className="playlist-name"
        href={props.playlist.external_urls.spotify}>
        {props.playlist.name}</a>
      <a className="playlist-owner" href={props.playlist.owner.external_urls.spotify}>by {props.playlist.owner.display_name}</a>
    </section>
  )
}
