import React from 'react';

const SideBar = (props) => {
  return (
    <section className="sidebar">
      <h2 className="playlist-title">Editors pick</h2>
      <div className="playlist-items">
        {props.sidebarData.playlists.items.map((singlePlaylist) => {
          return (
            <a target="_blank" className="playlist" href={singlePlaylist.external_urls.spotify} alt="playlist name" rel="noreferrer">{singlePlaylist.name}</a>
          )
        })}
      </div>
    </section>
  )
}
export default SideBar;