import React from "react"

const Artists = ({ artistName, artistLink }) => {
  return (
    <div className="links" href={artistLink}>
      <h3>{artistName}</h3>
    </div>
  )
}

export default Artists
