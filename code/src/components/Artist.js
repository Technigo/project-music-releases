import React from 'react'

const Artist = (props) => {

  return (
    <>
        {props.item.artists.map((artist,key) =>
        <div className='artist-name' key={artist.id}>
           <p> {artist.name}</p>
        </div>
        )}
    </>
  )
}

export default Artist