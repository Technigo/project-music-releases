import React from 'react'

const Artist = ({name, url}) => {
  return (
    
      <a href={url}> <p>{name}</p> </a>
    
  )
}

export default Artist