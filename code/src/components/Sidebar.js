import React from 'react'
import './Sidebar.css'

export const Sidebar = (props) => (
  <div className="sidebarWrapper">
    <div className="sidebarContainer">
      <div>
        <img src={'props.urlPlaylistImage'} />
      </div>
      <div>
        <a className="linkPlaylist" href={props.urlPlaylistName} target="_blank"><p className="playlist-name">{props.playlistName}</p>
        </a>
      </div>
    </div>
  </div>
)
