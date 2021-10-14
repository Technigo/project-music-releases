import React from "react"

const Artists = ({ artistName, artistLink }) => {
  return (
    <a
      className="links"
      href={artistLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3 className="artists-divider">{artistName}</h3>
    </a>
  )
}

export default Artists
