import React from "react"

const Albums = ({ albumName, albumLink }) => {
  return (
    <a
      className="links"
      href={albumLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>{albumName}</h2>
    </a>
  )
}

export default Albums
