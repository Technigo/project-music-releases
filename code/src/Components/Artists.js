import React from 'react';

const Artists = (props) => {
  return (
    <div className="artists">

      {props.item.artists.map((artists) => {
        return (
          <a
          key={artists.id}
          href={artists.external_urls.spotify}>
          <h2 className="artist-name">{artists.name}</h2>
          </a>
          )
        })
      }
    </div>
  )
};

export default Artists;