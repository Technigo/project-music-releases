import React from 'react';
import data from '../data.json';

const songInfo = data.albums.items.map((song) => {
  return {
    songTitle: song.name,
    songId: song.id
  }
})

export const SongName = () => {
  return
    songInfo.map(({ songTitle, songId }) => (
     <div key={songId}>
      <h3> ${songTitle} </h3>
    </div>
    ))}

 