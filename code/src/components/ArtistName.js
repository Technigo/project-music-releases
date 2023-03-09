import React from 'react';

export const ArtistName = (props) => {
  return (
    <section>
      {props.artistList.albums.items.map((item) => {
        const artistNames = item.artists.map((artist) => artist.name);
        const artistUrl = item.artists.map((artist) => artist.external_urls.spotify);
        const artistId = item.artists.map((artist) => artist.id);
        return (
          <div key={artistId}> {/* Check if id is the right one */}
            <a
              href={artistUrl}
              className="artist-list">
              {artistNames}
            </a>
          </div>
        );
      })}
    </section>
  )
}