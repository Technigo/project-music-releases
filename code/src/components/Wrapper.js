import React from "react"

import Artists from "./Artists"
import Albums from "./Albums"
import Image from "./Image"

const Wrapper = ({
  coverImage,
  id,
  albumName,
  albumLink,
  artistName,
  artistLink,
}) => {
  return (
    <div className="album-card">
      <Image coverImage={coverImage} />
      <Albums albumName={albumName} albumLink={albumLink} />
      <Artists artistName={artistName} artistLink={artistLink} />
    </div>
  )
}

export default Wrapper
