import React from 'react';

const ArtistInfo = (props) => {
  return (
    <>
      <div className="artist-container">
        {props.data.artists.map((artist, index) => {
          return (
            <a
              key={artist.id}
              href={artist.external_urls.spotify}
              target="_blank">
              <div>
                <h3 className='artist-name'>
                  {artist.name}
                  {props.data.artists.length - 1 > index ? ', ' : ''}
                </h3>
              </div>
            </a>
          )
        })
        }
      </div>
    </>
  );
}

export default ArtistInfo