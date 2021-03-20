import React from 'react';

const generateDelimiter = (index, length) => {
  if (index === length - 2) {
    return " & ";
  } else if (index < length - 2) {
    return ", ";
  } else{
  return;
  }
};

const Artist = (prop) => {
  return (
    <a className="artist-name" title="link to the artist" target="_blank" rel="noopener noreferrer" href={prop.artist.external_urls.spotify}>
        {prop.artist.name}
        {generateDelimiter(prop.artist_index, prop.artist_array.length)}
    </a>
  )}
export default Artist;