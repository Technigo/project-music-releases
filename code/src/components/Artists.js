import React from 'react'

// const generateDelimiter = (index, length) => {
//   if (index === length - 2) {
//     return ' & '
//   } else if (index < length - 2) {
//     return ', '
//   }
// }

const Artists = (props) => {
  const generateDelimiter = (index, length) => {
    if (index === length - 2) {
      return ' & '
    } else if (index < length - 2) {
      return ', '
    }
  }

  console.log(props)
  return (
    <>
      {props.artistList.map((artists, index) => {
        return (
          // prettier-ignore
          <a className="artist" href="{artists.external_urls.spotify}" target="blank" rel="noopener noreferrer">
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
