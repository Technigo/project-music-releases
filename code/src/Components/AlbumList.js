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

            {album.artists.map((artist, i) => {
              return (
                /* Importing artist(s), separating comma/ampersand and link to each artist */
                <Artist
                  key={artist.id}
                  name={artist.name}
                  id={artist.id}
                  artistLink={artist.external_urls.spotify}
                  amountOfArtists={album.artists.length}
                  index={i}
                />
              );
            })}
          </article>
        );
      })}
    </>
  );
};

export default AlbumList;
