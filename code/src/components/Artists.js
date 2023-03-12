import React from 'react';
// to make :& when there are two artists, and: , if there are more (but there isnt in this top50)
const generateDelimiter = (index, length) => {
  if (index === length - 2) {
    return ' & ';
  } else if (index < length - 2) {
    return ', ';
  }
};

export const Artist = (props) => {
  return (
    <span>
      {props.artist.map((items, index) => {
        return (
          <>
            <a key={items.id} className="artist-link" href={items.external_urls.spotify} target="_blank" rel="noopener noreferrer">{items.name}</a>
            {generateDelimiter(index, props.artist.length)}
          </>
        )
      })}
    </span>
  )
};