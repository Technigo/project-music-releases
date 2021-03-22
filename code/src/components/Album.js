import React from 'react'

const Album = ({albumcontainer, albumlink}) => {
  return (
    <a 
    className="album-name" 
    href={albumlink}
    rel="noopener noreferrer"
    >
      <p>{albumcontainer}</p>
    </a>  
  )

}

export default Album