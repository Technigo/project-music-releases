import React from 'react';

const Artists = (props) => {
    return (
    <div className="artists">
      {props.item.artists.map((artist) => {
        return(
          <a
          key={artist.id}
          href={artist.external_urls.spotify}>
          <h2 className="artist-name">{artist.name}<span>,&nbsp;</span></h2>
        </a>);
      })}
    </div>
  )
}



export default Artists;



