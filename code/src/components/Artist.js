import React from 'react'


const Artist = (props) => {
  
  const generateDelimiter = (index, length) => {
    if (index === length - 2) {
      return " & "
    } else if (index < length - 2) {
      return ", "
    } else {
      return
    }
  }
  
   return props.artists.map((artist, index) => {
      return (
        <span key={artist.id} className="delimiter">
          <a className="artist-name" href={artist.external_urls.spotify}>
          {artist.name}</a>{generateDelimiter(index, props.artists.length)}
        </span>
        )
    }) 
  
}
  

export default Artist


