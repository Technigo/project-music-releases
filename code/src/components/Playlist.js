import React from 'react'

const Playlist = ( {playlistName, hrefPlaylist} ) => {
    return (   
            <li className="navlinks">
                <a href={hrefPlaylist} aria-label="Go to playlist" target="_blank">{playlistName}</a>
            </li>
            
        )
        
}
export default Playlist

