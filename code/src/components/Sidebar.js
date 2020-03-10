import React from 'react'
import './Sidebar.css'

export const Sidebar = (props) => (
  <div className="sidebarWrapper">
    <div className="sidebarContainer">
      <a className="linkPlaylist" href={props.urlPlaylistName} target="_blank" rel="noopener noreferrer"><p className="playlist-name">{props.playlistName}</p>
      </a>
    </div>
  </div>
)

