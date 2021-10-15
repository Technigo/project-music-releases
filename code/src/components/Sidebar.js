import React from "react"

const Sidebar = ({ playlists }) => {
  return (
    <div className="sidebar-wrapper">
      {playlists.map((playlist) => {
        return (
          <div key={playlist.id} className="individual-wapper">
            <div className="sidebar-image">
              <img src={playlist.images[0].url} alt="Playlist cover" />
            </div>

            <div className="sidebar-text">
              <h2 className="title-name">
                <a className="title" href={playlist.external_urls.spotify}>
                  {playlist.name}{" "}
                </a>
              </h2>
              <p>{playlist.owner.display_name}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Sidebar
