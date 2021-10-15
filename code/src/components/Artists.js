import React from "react"

const Artists = ({ artistName, artistLink }) => {
  return (
    <div
      className="links"
      href={artistLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3>{artistName}</h3>
    </div>
  )
}

export default Artists
