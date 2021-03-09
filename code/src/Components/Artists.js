import React from 'react';

const Artists = (props) => {
  return (
    <div className="artist-name">
      {props.item.artists.map((artists) => {
        return <a
            key={artists.id}
            href={artists.external_urls.spotify}>
              {artists.name}
            </a>

      })}
    </div>
  )

};

export default Artists;