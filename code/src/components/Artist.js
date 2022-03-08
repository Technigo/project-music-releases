import React from 'react'

const Artist = (props) => {
  return (
    <div>
        Hello {props.albumName} {props.artistName}
    </div>
  )
}

export default Artist