import React from 'react'

const Artists = (props) => {
  // this makes the , and & between the names
  const generateDelimiter = (index, length) => {
    if (index === length - 2) {
      return ' & '
    } else if (index < length - 2) {
      return ', '
    }
  }
  return (
    <>
      {props.artistList.map((artists, index) => {
        return (
          // prettier-ignore
          <a key={artists.id} className="artist" href={artists.external_urls.spotify} target="_blank" rel="noopener noreferrer">
            <h2>
              {artists.name}
              {generateDelimiter(index, props.artistList.length)}
            </h2>
          </a>
        )
      })}
    </>
  )
}

export default Artists
