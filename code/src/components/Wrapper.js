import React from "react"

import Artists from "./Artists"
import Albums from "./Albums"
import Image from "./Image"

const Wrapper = ({
  coverImage,
  albumName,
  albumLink,
  artistName,
  artistLink,
}) => {
  return (
    <>
      <div className="image-container">
        <Image coverImage={coverImage} />
      </div>
      <div className="info-container">
        <Albums albumName={albumName} albumLink={albumLink} />
        <Artists artistName={artistName} artistLink={artistLink} />
      </div>
    </>
  )
}

export default Wrapper
