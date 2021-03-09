import React from 'react'
import data from 'data.json'

export const Albums = (data) => {

  return ( 
    <div className="AlbumContainer">
      {/* <img src="https://via.placeholder.com/300" alt="Album cover"/> */}
      <img src={data.url} alt={data.name}></img>
      <p>
        <strong>Album name</strong>
      </p>
      <p>Artist</p>
    </div>
  );
}
