import React from 'react';

const Playlist = (props) => {
    console.log(props);
    
    return (
        <aside className="aside">
            <h1 className="playlist-heading">Playlists</h1
            >
            {props.array.map(playlist =>{
                return (
                    <a className="playlist-name" key={playlist.id} href={playlist.external_urls.spotify} alt="spotify">
                        {playlist.name}
                    </a>
                )
            })}
        </aside>
    )
}
export default Playlist;