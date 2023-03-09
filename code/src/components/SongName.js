import React from 'react';
import data from '../data.json';

/* const songInfo = data.albums.items.map((song) => {
  return {
    songTitle: song.name,
    songId: song.id
  }
}) */

export const SongName = (props) => {
  return (
    <section>
      {props.songTitle.albums.items.map((song) => {
        return (
          <div key={songId}>
            <h3> ${songTitle} </h3>
          </div>
        );
      })}
    </section>
  );
};
