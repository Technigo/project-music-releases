import React from 'react'
import data from '../data.json'


const Artist = (props) => {
  console.log(props.artists)
  console.log(props.artists.length)

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
        <span className="delimiter">
          <a className="artist-name" href={artist.external_urls.spotify}>
          {artist.name}</a>{generateDelimiter(index, props.artists.length)}
        </span>
        )
    }) 
  
}
  

export default Artist


