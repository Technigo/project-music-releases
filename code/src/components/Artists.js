import React from 'react'

const Artists = (props) => {
  const generateDelimiter = (index, length) => {
    if (index === length - 2) {
      return ' & '
    } else if (index < length - 2) {
      return ', '
    }
  }
  // lets delete this, when console log is commented out we get the key error.
  // console.log(props)
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
