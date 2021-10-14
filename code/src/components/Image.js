import React from "react"

const Image = ({ coverImage }) => {
  return (
    <>
      <div className="icons-wrapper">
        <img className="icons heart" src="./icons/heart.svg" alt="heart" />
        <img className="icons play" src="./icons/play.svg" alt="play" />
        <img className="icons dots" src="./icons/dots.svg" alt="dots" />
      </div>
      <img src={coverImage} alt="Album cover" />
    </>
  )
}

export default Image
