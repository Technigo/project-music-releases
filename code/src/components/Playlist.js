import React from 'react';

const Playlist = (props) => {
  return (
    <section className="playlist-section">
      <div className="playlist-header">
        <h2>Playlists</h2>
      </div>
      {props.playlistData.playlists.items.map((playlist) => {
        return (
          <div className="each-playlist">
            <img
              className="playlist-cover"
              src={playlist.images[0].url}
              alt="playlist cover" />
            <h2>
              <a
                className="playlist-name"
                href={playlist.external_urls.spotify}>
                {playlist.name}
              </a>
            </h2>
            <p className="about-playlist">{playlist.description}</p>
          </div>
        )
      })}
    </section>
  )
};

export default Playlist;
