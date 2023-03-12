/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable indent */
import React from 'react';
import Playlist from './Playlist';

const Playlists = (props) => {
    return (
        <>
        <h1 className="playlist-headline">🎧 Playlists</h1>
        <div className="playlists">
            {props.data.playlists.items.map((playlist) => {
                return (
                    <Playlist playlist={playlist} />
                )
            })}
        </div>
        </>
    )
}

export default Playlists;