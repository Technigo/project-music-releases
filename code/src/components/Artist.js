import React from 'react'


export const Artist = (props) => {
    const getArtistNames = (artists) => {
        return artists.map((artist) => artist.name).join(", ");
    }
    return (
        <div className='artist-name'>
            {getArtistNames(props.item.artists)}
        </div>
    )
  };

