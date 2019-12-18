import React from "react";
import './sidebar.css'

export const Sidebar = (props) => {
  return (
    <section className="playlist-card">
      <a href={props.playlist.external_urls.spotify} target="_blank" rel="noopener noreferrer">  <img className="playlist-cover" src={props.playlist.images[0].url} alt="playlist cover" /></a>
      <a className="playlist-name"
        href={props.playlist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
        {props.playlist.name}</a>
      <a className="playlist-owner" href={props.playlist.owner.external_urls.spotify} target="_blank" rel="noopener noreferrer">by {props.playlist.owner.display_name}</a>
    </section>
  )
}
