import React from 'react';
import data from 'data.json';
import Album from 'Components/Album';
import Artist from 'Components/Artist';

const AlbumList = () => {
  const listOfAlbums = data.albums.items;

  return (
    <>
      {/* Mapping over the data-variable, returning an album-wrapper containing 
      image, song title and artist for each album */}
      {listOfAlbums.map((album) => {
        return (
          <article className="album--wrapper" key={album.images[1].url}>
            {/* Importing Album image, name and link for both image and name.  */}
            <Album
              image={album.images[1].url}
              albumName={album.name}
              albumURL={album.external_urls.spotify}
            />

            {/* Importing artist(s), separating commas and link to each artist */}
            <Artist
              names={album.artists.map((artist, i) => {
                return (
                  <span key={artist.id}>
                    {/* Returning a complete HTML link with a data-path as href-element, 
                    containing the artist name(s) */}
                    <a
                      href={artist.external_urls.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="artist-name--link"
                    >
                      {artist.name}
                    </a>
                    {/* Adding an ampersand between each artist if there are more than one,
                    and a comma if there are more than 2. */}
                    <span className="last-child-comma">
                      {album.artists.length >= 2
                        ? i === album.artists.length - 2
                          ? ' & '
                          : ', '
                        : ''}
                    </span>
                  </span>
                ); // Second return ends here
              })}
            />
          </article>
        ); // First return ends here
      })}
    </>
  );
};

export default AlbumList;
