import React from 'react';
import { Playlist } from './Playlist'

export const Playlists = (props) => {
  return (
    <>
      <h1>Playlists</h1>
      <hr />
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