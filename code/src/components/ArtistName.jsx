import React from 'react';

export const ArtistName = (props) =>{
  const content = props.item.artists;
  return (
    <>
     {content.map((artist, index) => {
        return (
        <a className='artist-name underline'
        key={artist.id}
        href={artist.external_urls.spotify}>
          <span>{content.length > 1 && index === content.length -1?' & ' : ''}</span>
          {artist.name}
          <span>{content.length -2 > index? ', ' : ''}</span>
          </a>
        )
      })
     }
     </>
  )
};