import React from 'react'

const Playlists = (props) => {
  return (
    <aside className="playlists-wrapper">
      <h2 className="playlists-header">Playlists</h2>
      {props.items.map(playlist => {
        return (
        <div key={playlist.id} className="playlist-card">
          <div className="playlist-cover">
            <img className="playlist-img" src={playlist.images[0].url} alt={playlist.name}/>
            <div className="playlist-icon">
              <img className="play play-big" src="/icons/play.svg" alt="play icon"></img>
            </div>
          </div>
          <a className="playlist-name" href={playlist.external_urls.spotify}>{playlist.name}</a>
          <p className="tracks">{playlist.tracks.total} tracks</p>
        </div>
        )
      })}
    </aside>
  )
}

export default Playlists