import React from 'react'

const Playlist = ( {playlistName, hrefPlaylist} ) => {
    return (   
    <div className="sidePlaylist">
        <div className="navheader">
            <h4>Popular playlists</h4>
            <a className="closebtn" onclick="closeNav()">&times;</a>
        </div>
            <div className="navlinks">
                    <a href={hrefPlaylist} aria-label="Go to playlist" target="_blank">{playlistName}</a>
                    <a href={hrefPlaylist} aria-label="Go to playlist" target="_blank">{playlistName}</a>
                    <a href={hrefPlaylist} aria-label="Go to playlist" target="_blank">{playlistName}</a>
                    <a href={hrefPlaylist} aria-label="Go to playlist" target="_blank">{playlistName}</a>
                </div>
            </div>
        )

}
export default Playlist

